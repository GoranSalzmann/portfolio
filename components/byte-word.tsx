"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

const BITS = [7, 6, 5, 4, 3, 2, 1, 0];

function toBytes(text: string) {
  return Array.from(text, (char) => char.charCodeAt(0) & 0xff);
}

function isPrintable(byte: number) {
  return (byte > 0x20 && byte < 0x7f) || byte > 0xa0;
}

function hex(byte: number) {
  return byte.toString(16).toUpperCase().padStart(2, "0");
}

/** The bytes as they would appear inside a string literal. */
function toLiteral(bytes: number[]) {
  return bytes
    .map((byte) => {
      if (byte === 0x22 || byte === 0x5c) return `\\${String.fromCharCode(byte)}`;
      if (byte === 0x20 || isPrintable(byte)) return String.fromCharCode(byte);
      return `\\x${hex(byte)}`;
    })
    .join("");
}

type ByteWordProps = {
  /** ASCII text; every character becomes an editable byte. */
  text: string;
  /** Name of the constant in the code line under the grid. */
  identifier: string;
  hint: string;
  /** Columns on small screens; spaces are dropped there so words wrap cleanly. */
  smallColumns: number;
};

export function ByteWord({ text, identifier, hint, smallColumns }: ByteWordProps) {
  const original = toBytes(text);
  const [bytes, setBytes] = useState(original);
  const [cursor, setCursor] = useState({ byte: 0, bit: 0 });
  const gridRef = useRef<HTMLDivElement>(null);
  const changed = bytes.some((byte, index) => byte !== original[index]);

  const flip = (byteIndex: number, bit: number) => {
    setBytes((current) =>
      current.map((byte, index) =>
        index === byteIndex ? byte ^ (1 << bit) : byte
      )
    );
  };

  const focusCell = (byteIndex: number, bitIndex: number) => {
    const cell = gridRef.current?.querySelector<HTMLButtonElement>(
      `[data-cell="${byteIndex}-${bitIndex}"]`
    );
    if (!cell || cell.offsetParent === null) return false;
    setCursor({ byte: byteIndex, bit: bitIndex });
    cell.focus();
    return true;
  };

  // One tab stop for the whole grid; arrows walk it as a 2 × (4 · n) field.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
    const row = Math.floor(cursor.bit / 4);
    const column = cursor.bit % 4;

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const nextRow = event.key === "ArrowUp" ? 0 : 1;
      if (nextRow !== row) focusCell(cursor.byte, nextRow * 4 + column);
      return;
    }
    if (!step) return;
    event.preventDefault();

    let x = cursor.byte * 4 + column + step;
    while (x >= 0 && x < bytes.length * 4) {
      if (focusCell(Math.floor(x / 4), row * 4 + (x % 4))) return;
      x += step; // skip bytes that are hidden at this width
    }
  };

  return (
    <div className="bytes">
      <div
        ref={gridRef}
        role="group"
        aria-label={`Die Bytes von „${text}“. Pfeiltasten wählen ein Bit, Leertaste kippt es.`}
        onKeyDown={onKeyDown}
        className="bytes-grid"
        style={
          {
            "--cols-sm": smallColumns,
            "--cols-lg": bytes.length,
          } as CSSProperties
        }
      >
        {bytes.map((byte, byteIndex) => {
          const printable = isPrintable(byte);
          return (
            <div
              key={byteIndex}
              className="byte"
              data-space={original[byteIndex] === 0x20 ? "" : undefined}
              data-changed={byte !== original[byteIndex] ? "" : undefined}
              style={{ "--i": byteIndex } as CSSProperties}
            >
              <span
                className="byte-glyph"
                data-blank={printable ? undefined : ""}
                aria-hidden
              >
                {printable ? String.fromCharCode(byte) : byte === 0x20 ? " " : "·"}
              </span>
              <span className="byte-hex" aria-hidden>
                0x{hex(byte)}
              </span>
              <div className="byte-bits">
                {BITS.map((bit, bitIndex) => {
                  const on = (byte >> bit) & 1;
                  const flipped = on !== ((original[byteIndex] >> bit) & 1);
                  const isCursor =
                    cursor.byte === byteIndex && cursor.bit === bitIndex;
                  return (
                    <button
                      key={bit}
                      type="button"
                      className="bit"
                      data-cell={`${byteIndex}-${bitIndex}`}
                      data-flipped={flipped ? "" : undefined}
                      aria-pressed={on === 1}
                      aria-label={`Zeichen ${byteIndex + 1}, Bit ${bit}`}
                      tabIndex={isCursor ? 0 : -1}
                      onFocus={() => setCursor({ byte: byteIndex, bit: bitIndex })}
                      onClick={() => flip(byteIndex, bit)}
                    >
                      {on}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="code min-w-0 break-all" aria-live="polite">
          <span className="tok-key">const</span> {identifier} ={" "}
          <span className={changed ? "tok-str" : "tok-num"}>
            &quot;{toLiteral(bytes)}&quot;
          </span>
          ;
        </p>
        {changed ? (
          <button
            type="button"
            className="link code"
            onClick={() => setBytes(original)}
          >
            Zurücksetzen
          </button>
        ) : (
          <p className="code tok-dim">{"// "}{hint}</p>
        )}
      </div>
    </div>
  );
}

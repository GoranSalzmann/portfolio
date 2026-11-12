"use client";

import { useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2500);
  };

  return (
    <button type="button" className="btn" onClick={copy}>
      <span aria-live="polite">
        {state === "copied"
          ? "Adresse kopiert"
          : state === "failed"
            ? "Kopieren nicht möglich – bitte markieren"
            : label}
      </span>
    </button>
  );
}

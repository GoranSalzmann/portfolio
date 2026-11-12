import type { TimelineEntry } from "@/lib/content";

/**
 * The career as a commit graph, newest first. Entries on the "branch" lane
 * fork off the trunk and end without merging back.
 */
export function GitLog({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol>
      {entries.map((entry, index) => (
        <li
          key={`${entry.year}-${entry.title}`}
          className="commit"
          data-lane={entry.lane}
        >
          <div className="commit-graph" aria-hidden>
            <span className="commit-node" />
          </div>
          <div className={index === entries.length - 1 ? "" : "pb-12"}>
            <p className="code">
              <span className="tok-num">{entry.year}</span>
              {index === 0 && <span className="tok-key"> (HEAD)</span>}
            </p>
            <h3 className="mt-1 font-mono text-lg font-bold leading-snug [font-stretch:75%] md:text-xl">
              {entry.title}
            </h3>
            <p className="mt-3 max-w-[62ch]">{entry.description}</p>
            <ul className="code tok-dim mt-3 flex flex-wrap gap-x-5">
              {entry.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

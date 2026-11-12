import { StarField } from "@/components/sky/star-field";
import { roles } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <StarField className="absolute inset-0 h-full w-full" />

      <div className="wrap relative z-10 flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-14">
        <div className="fade-late mb-6 flex flex-wrap items-end justify-between gap-6">
          <ul className="display space-y-0.5 text-lg font-medium sm:text-xl">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <p className="max-w-[16rem] text-right text-sm leading-snug text-muted">
            {site.location}
            <br />
            48°52′ N, 13°24′ O
          </p>
        </div>

        <h1
          className="display -ml-[0.04em] font-extrabold"
          style={{
            fontSize: "clamp(6rem, min(34vw, 36vh), 25rem)",
            fontVariationSettings: '"wdth" 80',
            lineHeight: 0.82,
          }}
        >
          <span className="name-line">
            <span>Mike</span>
          </span>
          <span className="name-line">
            <span>
              Karl<span className="text-star">.</span>
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}

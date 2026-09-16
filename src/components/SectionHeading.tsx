import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            invert ? "text-blue-soft" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-base leading-relaxed md:text-lg ${
            invert ? "text-white/85" : "text-fog"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden hero-atmosphere pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 site-grid opacity-40" />
      <div className="section-pad relative pb-12 md:pb-16">
        <div className="container-shell">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-soft">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-white text-balance md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

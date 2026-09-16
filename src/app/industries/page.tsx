import type { Metadata } from "next";
import Link from "next/link";
import { ImmersiveIntro, CtaBand } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sector experience across energy, infrastructure, government, financial services and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow="Industries"
        title="Where operational complexity meets commercial pressure."
        description="We apply manpower, consulting and technology capabilities across sectors that demand both precision and pace."
      />

      <section className="section-pad bg-blue-wash py-16 md:py-20">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Focus mosaic
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Sector experience that travels with your challenge.
            </h2>
          </Reveal>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {industries.map((industry, i) => (
              <article
                key={industry.title}
                className={`mb-4 break-inside-avoid rounded-2xl border border-line p-6 transition-transform hover:-translate-y-1 ${
                  i % 3 === 0
                    ? "bg-navy text-white border-transparent"
                    : i % 3 === 1
                      ? "bg-accent text-white border-transparent"
                      : "bg-white"
                }`}
              >
                <p
                  className={`font-display text-xs tracking-[0.18em] ${
                    i % 3 === 2 ? "text-accent" : "text-white/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className={`mt-3 font-display text-xl ${
                    i % 3 === 2 ? "text-ink" : "text-white"
                  }`}
                >
                  {industry.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i % 3 === 2 ? "text-fog" : "text-white/85"
                  }`}
                >
                  {industry.body}
                </p>
              </article>
            ))}
          </div>

          <Reveal className="mt-12">
            <Link href="/contact" className="text-sm font-semibold text-accent link-underline">
              Tell us about your industry challenge →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Your sector. Our delivery model."
        body="We’ll combine the right talent, process expertise and technology for your operating environment."
      />
    </>
  );
}

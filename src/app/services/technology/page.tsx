import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImmersiveIntro, CtaBand, BentoCell } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "IT & Digital Services",
  description:
    "Custom software, ERP, systems integration, mobile apps, websites and managed IT.",
};

const service = services[2];

export default function TechnologyPage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow={`${service.number} · Technology`}
        title={service.subtitle}
        description={service.summary}
        image={service.image}
      />

      <section className="section-pad bg-blue-wash py-16 md:py-20">
        <div className="container-shell">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Capability stack
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Technology should enable business — not complicate it.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.capabilities.map((item, i) => (
              <BentoCell
                key={item.title}
                className={i === 0 || i === 5 ? "md:col-span-2" : ""}
              >
                <p className="font-display text-xs tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{item.body}</p>
              </BentoCell>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
        <div className="section-pad relative">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-soft">
                Delivery lifecycle
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Discovery → Architecture → UX/UI → Build → Test → Deploy → Support
              </h2>
              <p className="mt-4 text-white/80">
                Secure, scalable solutions designed around specific workflows —
                from corporate websites to enterprise ERP platforms.
              </p>
              <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-blue-soft link-underline">
                Start a technology conversation →
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/15">
                <Image
                  src={service.image}
                  alt="Digital delivery"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a platform, portal or integration?"
        body="We’ll scope architecture, UX and delivery around real operating requirements."
      />
    </>
  );
}

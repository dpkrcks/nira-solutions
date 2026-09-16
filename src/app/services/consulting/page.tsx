import type { Metadata } from "next";
import Link from "next/link";
import { ImmersiveIntro, CtaBand } from "@/components/PageChrome";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import {
  costOptimisationSteps,
  procurementCapabilities,
  services,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Procurement transformation, strategic sourcing, cost optimisation and digital procurement.",
};

const service = services[1];

export default function ConsultingPage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow={`${service.number} · Consulting`}
        title={service.subtitle}
        description={service.summary}
        image={service.image}
      />

      <section className="section-pad bg-blue-wash py-16 md:py-20">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Practice areas
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
              We don’t simply recommend change — we help deliver it.
            </h2>
          </Reveal>

          <Stagger className="mt-12 space-y-0">
            {service.capabilities.map((p, i) => (
              <StaggerItem
                key={p.title}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12"
              >
                <p className="font-display text-accent md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl text-ink md:col-span-4">
                  {p.title}
                </h3>
                <p className="text-fog leading-relaxed md:col-span-7">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-white py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Procurement transformation
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink">
              Build a procurement function designed for the future.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {procurementCapabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-blue-wash px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl bg-accent p-8 text-white md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/75">
              Cost optimisation methodology
            </p>
            <ol className="mt-6 space-y-3">
              {costOptimisationSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 font-display text-lg">
                  <span className="text-white/50">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-white/85">
              Beyond price reduction — Total Cost of Ownership and lasting
              commercial value.
            </p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold link-underline">
              Talk procurement outcomes →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to unlock measurable commercial savings?"
        body="From spend analysis to digital procurement — we implement, not just advise."
      />
    </>
  );
}

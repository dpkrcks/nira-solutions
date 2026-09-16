import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImmersiveIntro, CtaBand } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Manpower Solutions",
  description: "Flexible and scalable manpower — onshore, offshore or hybrid.",
};

const service = services[0];

export default function ManpowerPage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow={`${service.number} · Manpower`}
        title={service.subtitle}
        description={service.summary}
        image={service.image}
      />

      <section className="section-pad bg-white py-16 md:py-20">
        <div className="container-shell">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Flexible workforce. Greater scalability.
            </h2>
          </Reveal>

          <div className="mt-12 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {service.capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="min-w-[78%] snap-center rounded-2xl border border-line bg-blue-wash p-6 md:min-w-0"
              >
                <p className="font-display text-sm text-accent">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl text-ink">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="section-pad grid gap-0 lg:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image src={service.image} alt="" fill className="object-cover opacity-60" />
          </div>
          <div className="flex flex-col justify-center py-14 lg:pl-12">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl">
                Onshore. Offshore. Hybrid.
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                Resources can work locally alongside your teams, through our
                global delivery network, or in a blended model — so you scale
                capability without locking into long-term overhead.
              </p>
              <Link href="/contact" className="mt-8 text-sm font-semibold text-blue-soft link-underline">
                Discuss workforce needs →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need specialised talent without hiring complexity?"
        body="We’ll shape a staff augmentation, project team or offshore model around your timeline."
      />
    </>
  );
}

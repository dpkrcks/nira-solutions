import type { Metadata } from "next";
import Image from "next/image";
import { ImmersiveIntro, CtaBand } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { DeliveryModelSwitcher } from "@/components/DeliveryModelSwitcher";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Dubai, London, Delhi and Australia — local engagement with global delivery.",
};

export default function GlobalPresencePage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow="Global presence"
        title="Four hubs. One delivery network."
        description="Local client engagement combined with global talent and cost-efficient delivery across the Middle East, Europe, India and Asia-Pacific."
        meta="Dubai · London · Delhi · Australia"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="section-pad">
          <div className="container-shell relative">
            <div className="pointer-events-none absolute left-[1.15rem] top-0 bottom-0 hidden w-px bg-gradient-to-b from-accent via-accent/40 to-transparent md:block" />

            <div className="space-y-16 md:space-y-24">
              {locations.map((loc, i) => (
                <Reveal key={loc.city}>
                  <article
                    className={`grid items-center gap-8 md:grid-cols-12 ${
                      i % 2 === 1 ? "md:text-right" : ""
                    }`}
                  >
                    <div
                      className={`relative md:col-span-5 ${
                        i % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                        <Image
                          src={loc.image}
                          alt={loc.city}
                          fill
                          className="object-cover"
                          sizes="(max-width:768px) 100vw, 42vw"
                        />
                      </div>
                    </div>
                    <div
                      className={`relative md:col-span-7 ${
                        i % 2 === 1 ? "md:order-1 md:pr-16" : "md:pl-16"
                      }`}
                    >
                      <span className="absolute left-0 top-2 hidden h-3 w-3 -translate-x-[1.4rem] rounded-full bg-accent ring-4 ring-white md:block" />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Hub 0{i + 1}
                      </p>
                      <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
                        {loc.city}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-fog">{loc.role}</p>
                      <p className={`mt-4 max-w-md text-mist leading-relaxed ${
                        i % 2 === 1 ? "md:ml-auto" : ""
                      }`}>
                        {loc.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-blue-wash py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Delivery models
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Onshore, offshore, hybrid or managed.
            </h2>
            <p className="mt-4 text-fog">
              Balance capability, cost, scalability and operational control based
              on your requirements.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <DeliveryModelSwitcher />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need local leadership with global scale?"
        body="We’ll assemble the right mix of onshore and offshore capability for your programme."
      />
    </>
  );
}

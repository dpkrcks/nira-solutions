import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImmersiveIntro, CtaBand } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Manpower solutions, procurement consulting and IT & digital services.",
};

export default function ServicesPage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow="Services"
        title="Three practices. One integrated delivery platform."
        description="Select a capability independently — or combine manpower, consulting and technology into a single strategic engagement."
        meta="Manpower · Consulting · IT & Digital"
      />

      <section className="bg-blue-wash">
        {services.map((service, index) => (
          <Reveal key={service.slug}>
            <article
              className={`border-b border-line ${
                index % 2 === 1 ? "bg-white/60" : ""
              }`}
            >
              <div className="section-pad py-14 md:py-16">
                <div className="container-shell grid items-center gap-10 lg:grid-cols-12">
                  <div
                    className={`relative aspect-[16/11] overflow-hidden rounded-2xl lg:col-span-6 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                    <div className="absolute left-4 top-4 rounded-md bg-navy/80 px-3 py-1.5 font-display text-xs tracking-[0.18em] text-white backdrop-blur">
                      {service.number}
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-sm font-medium text-accent">{service.subtitle}</p>
                    <h2 className="mt-2 font-display text-3xl text-ink md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 leading-relaxed text-fog">{service.summary}</p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.capabilities.slice(0, 4).map((cap) => (
                        <li
                          key={cap.title}
                          className="text-sm text-ink/85 before:mr-2 before:text-accent before:content-['→']"
                        >
                          {cap.title}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-deep"
                    >
                      Explore {service.title.split(" ")[0]}{" "}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand
        title="Not sure which capability you need?"
        body="Tell us the outcome — we’ll recommend the leanest engagement model."
        label="Start a conversation"
      />
    </>
  );
}

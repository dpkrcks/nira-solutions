"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { DeliveryModelSwitcher } from "@/components/DeliveryModelSwitcher";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { Magnetic } from "@/components/motion-bits";
import {
  aboutPoints,
  company,
  engagementModels,
  images,
  whyUs,
} from "@/lib/content";

export function HomeSections() {
  const reduce = useReducedMotion();
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutImageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <>
      {/* About */}
      <section ref={aboutRef} className="relative overflow-hidden bg-blue-wash">
        <div className="grid min-h-[70vh] lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
            <motion.div
              style={reduce ? undefined : { y: aboutImageY }}
              className="absolute inset-[-8%]"
            >
              <Image
                src={images.about}
                alt="NIRA team collaborating with clients"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-6xl text-white md:text-7xl"
              >
                10+
              </motion.p>
              <p className="mt-2 text-sm tracking-[0.18em] text-blue-soft uppercase">
                Years of UAE market experience
              </p>
            </div>
          </div>

          <div className="section-pad relative flex flex-col justify-center py-16 md:py-24 lg:pl-16 xl:pl-24">
            <div className="noise-overlay opacity-[0.03]" />
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Who we are
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.08] text-ink text-balance md:text-5xl">
                One partner for people, process & technology.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
                Modern businesses face three interconnected challenges: finding
                the right people, building the right processes, and implementing
                the right technology.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-mist">
                {company.blurb}
              </p>
            </Reveal>

            <Stagger className="mt-10 space-y-0">
              {aboutPoints.map((point, i) => (
                <StaggerItem
                  key={point}
                  className="flex gap-4 border-t border-line py-4"
                >
                  <span className="font-display text-sm text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-sm text-ink/90 md:text-base">{point}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent link-underline"
              >
                Learn more about us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services showcase */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="noise-overlay" />
        <div className="section-pad relative py-16 md:py-24">
          <div className="container-shell">
            <Reveal className="mb-12 max-w-2xl md:mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-soft">
                Our core services
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-balance md:text-5xl">
                Three capabilities.
                <span className="block text-blue-soft">One integrated solution.</span>
              </h2>
              <p className="mt-5 text-white/80 md:text-lg">
                Hover a capability to preview — engage independently or as one
                strategic partnership.
              </p>
            </Reveal>
            <ServiceShowcase />
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="bg-blue-wash">
        <div className="section-pad py-16 md:py-24">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Delivery model
              </p>
              <h2 className="mt-4 font-display text-3xl text-ink md:text-5xl">
                Local expertise.
                <span className="block">Global delivery.</span>
              </h2>
              <p className="mt-5 leading-relaxed text-fog">
                Our international footprint combines local client engagement with
                global talent and cost-efficient delivery across four hubs.
              </p>
              <div className="mt-8">
                <DeliveryModelSwitcher />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="order-1 lg:order-2 lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-blue-deep/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={images.delivery}
                      alt="Global delivery and collaboration"
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px border-t border-white/15 bg-navy/80 backdrop-blur-md sm:grid-cols-4">
                    {["Dubai", "London", "Delhi", "Australia"].map((city) => (
                      <div key={city} className="px-4 py-4 text-center">
                        <p className="font-display text-sm text-white">{city}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative overflow-hidden bg-accent">
        <motion.div
          aria-hidden
          className="mesh-orb -left-10 top-10 h-64 w-64 bg-white/20"
          animate={reduce ? undefined : { y: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="noise-overlay opacity-[0.06]" />
        <div className="section-pad relative py-16 md:py-24">
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  Why choose us
                </p>
                <h2 className="mt-4 font-display text-3xl text-white md:text-5xl">
                  Built around business outcomes.
                </h2>
                <p className="mt-5 text-white/90">
                  Flexible engagement models structured around your requirements.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/85">
                  {engagementModels.join(" · ")}
                </p>
              </Reveal>

              <Stagger className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                {whyUs.map((item, i) => (
                  <StaggerItem
                    key={item.title}
                    className="border-t border-white/30 pt-5"
                  >
                    <p className="font-display text-xs tracking-[0.2em] text-white/60">
                      0{i + 1}
                    </p>
                    <h3 className="mt-3 font-display text-xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                      {item.body}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy">
        <div className="noise-overlay" />
        <div className="section-pad relative py-20 md:py-28">
          <Reveal className="container-shell text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-soft">
              Next step
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl text-white text-balance md:text-6xl">
              Ready to scale capability without scaling complexity?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/85 md:text-lg">
              Tell us about your workforce, procurement or technology challenge —
              we&apos;ll shape a practical engagement around your outcomes.
            </p>
            <div className="mt-10 flex justify-center">
              <Magnetic strength={14}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-soft"
                >
                  Contact NIRA <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

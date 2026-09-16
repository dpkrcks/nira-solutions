"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Users,
  Workflow,
  Cpu,
  Globe2,
  Target,
  Layers,
  Handshake,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { TextReveal } from "@/components/motion-bits";
import {
  aboutPoints,
  company,
  engagementModels,
  images,
  locations,
  stats,
  whyUs,
} from "@/lib/content";

const pillars = [
  {
    icon: Users,
    title: "People",
    subtitle: "Manpower Solutions",
    body: "Flexible, scalable access to specialised professionals — onshore, offshore or hybrid — without traditional workforce overhead.",
    href: "/services/manpower",
    image: images.manpower,
  },
  {
    icon: Workflow,
    title: "Process",
    subtitle: "Consulting",
    body: "Procurement transformation, strategic sourcing and cost optimisation — strategy with hands-on implementation.",
    href: "/services/consulting",
    image: images.consulting,
  },
  {
    icon: Cpu,
    title: "Technology",
    subtitle: "IT & Digital",
    body: "Custom software, ERP, integrations and managed IT designed around real operating requirements.",
    href: "/services/technology",
    image: images.technology,
  },
] as const;

const whyIcons = [Globe2, Layers, Handshake, Target];

export function AboutView() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden bg-[#050b18] pt-28 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(27,87,240,0.3), transparent 55%), linear-gradient(180deg,#050b18,#071022 70%)",
          }}
        />
        <div className="section-pad relative pb-16 md:pb-20">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-soft"
              >
                About NIRA
              </motion.p>
              <TextReveal
                text="The operating partner behind people, process and technology."
                as="h1"
                className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-white text-balance md:text-5xl lg:text-6xl"
                delay={0.08}
              />
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              >
                {company.blurb}
              </motion.p>
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-8 flex flex-wrap gap-6 border-t border-white/15 pt-6"
              >
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-2xl text-white">{s.value}</p>
                    <p className="mt-1 max-w-[8rem] text-xs text-white/50">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src={images.about}
                  alt="NIRA team collaboration"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs tracking-[0.18em] text-blue-soft uppercase">
                    UAE · India · UK · Australia
                  </p>
                  <p className="mt-2 font-display text-lg text-white">
                    Regional expertise. Global delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white py-16 md:py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Modern businesses face three interconnected challenges.
            </h2>
            <p className="mt-5 text-fog leading-relaxed">
              Finding the right people, building the right processes, and
              implementing the right technology. We bring all three together —
              so you engage one strategic partner instead of three vendors.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent link-underline"
            >
              Explore our services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {aboutPoints.map((point, i) => (
              <StaggerItem
                key={point}
                className="rounded-2xl border border-line bg-blue-wash/80 p-5 md:p-6"
              >
                <p className="font-display text-sm text-accent">0{i + 1}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink md:text-[0.95rem]">
                  {point}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#050b18] text-white">
        <div className="section-pad py-16 md:py-20">
          <div className="container-shell">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-soft">
                Our model
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                One engagement. Three interconnected capabilities.
              </h2>
              <p className="mt-4 text-white/70">
                Specialised manpower, management & procurement consulting, and
                technology services — under one platform.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.08}>
                  <Link
                    href={pillar.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-accent/40 hover:bg-white/[0.05]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width:1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] to-transparent" />
                      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                        <pillar.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="text-xs tracking-[0.16em] text-blue-soft uppercase">
                        {pillar.subtitle}
                      </p>
                      <h3 className="mt-2 font-display text-2xl">{pillar.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                        {pillar.body}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-soft">
                        Learn more{" "}
                        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-blue-wash py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Why choose us
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                Built around measurable business outcomes.
              </h2>
              <p className="mt-4 text-fog">
                Whether the goal is reducing cost, increasing productivity,
                accelerating delivery or improving operational performance —
                our approach stays commercially focused.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {whyUs.map((item, i) => {
                  const Icon = whyIcons[i] ?? Target;
                  return (
                    <div key={item.title} className="bg-white p-6 md:p-7">
                      <Icon className="h-5 w-5 text-accent" />
                      <h3 className="mt-4 font-display text-lg text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-fog">
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white py-16 md:py-20">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              How we engage
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
              Flexible models structured around your requirements.
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((model, i) => (
              <StaggerItem
                key={model}
                className="flex items-center gap-4 rounded-xl border border-line bg-blue-wash/60 px-5 py-4"
              >
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ink">{model}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            <Reveal className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Presence
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">
                Four hubs. One network.
              </h3>
              <Link
                href="/global-presence"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent link-underline"
              >
                Global presence <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
            {locations.map((loc, i) => (
              <Reveal key={loc.city} delay={0.05 * (i + 1)} className="lg:col-span-1">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={loc.image}
                    alt={loc.city}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-lg text-white">{loc.city}</p>
                    <p className="mt-1 text-xs text-blue-soft">{loc.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-accent">
        <div className="section-pad relative py-16 md:py-20">
          <div className="container-shell grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                Next step
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Let&apos;s design the right operating model together.
              </h2>
              <p className="mt-4 max-w-xl text-white/90">
                Share your workforce, procurement or technology brief — we&apos;ll
                respond with a practical next step.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-blue-soft"
              >
                Talk to NIRA <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

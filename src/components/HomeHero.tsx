"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { ArrowRight, Users, Workflow, Cpu } from "lucide-react";
import { images } from "@/lib/content";

const chips = [
  {
    icon: Users,
    label: "People",
    detail: "Manpower",
    className: "left-[-8%] top-[18%] lg:left-[-12%]",
    delay: 0.55,
  },
  {
    icon: Workflow,
    label: "Process",
    detail: "Consulting",
    className: "right-[-6%] top-[28%] lg:right-[-10%]",
    delay: 0.7,
  },
  {
    icon: Cpu,
    label: "Technology",
    detail: "IT & Digital",
    className: "left-[8%] bottom-[14%] lg:left-[-4%]",
    delay: 0.85,
  },
] as const;

function TiltMedia() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 160,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 160,
    damping: 20,
  });

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
      {/* soft stage glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.35),transparent_65%)] blur-2xl"
      />

      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        className="relative"
      >
        {/* main frame */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#0b1630] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65)]"
        >
          {/* faux window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 font-display text-[10px] tracking-[0.16em] text-white/40 uppercase">
              nira · integrated delivery
            </span>
          </div>

          <div className="relative aspect-[4/5]">
            <Image
              src={images.hero}
              alt="NIRA professionals collaborating"
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 90vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f28] via-transparent to-black/10" />

            {/* bottom caption strip */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                <p className="font-display text-sm text-white">
                  Building Capability. Transforming Business.
                </p>
                <p className="mt-1 text-xs text-blue-soft">
                  Delivering Value across UAE · India · UK · Australia
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* floating capability chips — desktop/tablet only for clean mobile */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {chips.map(({ icon: Icon, label, detail, className, delay }) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`pointer-events-auto absolute z-10 ${className}`}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0a1428]/90 px-3.5 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 text-blue-soft">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-sm text-white">{label}</span>
                  <span className="block text-[11px] text-white/55">{detail}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050b18]">
      {/* layered atmosphere — Linear/Vercel style */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 20%, rgba(37,99,235,0.28), transparent 55%), radial-gradient(ellipse 45% 40% at 15% 85%, rgba(29,78,216,0.18), transparent 50%), linear-gradient(180deg, #050b18 0%, #071022 55%, #0a1630 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.11) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 35%, black 20%, transparent 75%)",
        }}
      />
      <div className="noise-overlay opacity-[0.035]" />

      <div className="section-pad relative flex min-h-[100svh] items-center py-28 lg:py-24">
        <div className="container-shell grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Copy column */}
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] text-blue-soft uppercase backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              People · Process · Technology
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-[2.65rem] leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]"
            >
              Capability that{" "}
              <span className="relative inline-block">
                <span className="relative z-10">transforms</span>
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 bottom-1 z-0 h-3 origin-left rounded-sm bg-accent/35 md:h-3.5"
                />
              </span>{" "}
              how business gets done.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70 md:text-base md:leading-7"
            >
              Integrated manpower, procurement consulting and technology — one
              partner for operational speed and long-term transformation across
              UAE, India, UK and Australia.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(27,87,240,0.7)] transition hover:bg-accent-deep"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                View capabilities
              </Link>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:max-w-md"
            >
              {[
                ["10+", "Years in UAE"],
                ["4", "Global hubs"],
                ["3", "Core practices"],
              ].map(([value, label], i) => (
                <div
                  key={label}
                  className={i > 0 ? "border-l border-white/10 pl-4" : ""}
                >
                  <p className="font-display text-2xl tracking-tight text-white md:text-[1.75rem]">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-white/45 md:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Media column */}
          <div className="relative z-10 lg:justify-self-end lg:w-full lg:max-w-[480px]">
            <TiltMedia />
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050b18] to-transparent"
      />
    </section>
  );
}

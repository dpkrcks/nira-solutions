"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { DotPattern } from "@/components/ui-effects";
import { TextReveal } from "@/components/motion-bits";

/** Creative page intro — asymmetric, not a generic centered hero */
export function ImmersiveIntro({
  eyebrow,
  title,
  description,
  image,
  meta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  meta?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden hero-atmosphere pt-28 md:pt-32">
      <DotPattern />
      <div className="noise-overlay" />
      <div className="section-pad relative pb-16 md:pb-20">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-12">
          <div className={image ? "lg:col-span-7" : "lg:col-span-10"}>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-soft"
            >
              {eyebrow}
            </motion.p>
            <TextReveal
              text={title}
              as="h1"
              className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-white text-balance md:text-6xl"
              delay={0.08}
            />
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
            >
              {description}
            </motion.p>
            {meta ? (
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-xs tracking-[0.18em] text-white/50 uppercase"
              >
                {meta}
              </motion.p>
            ) : null}
          </div>
          {image ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/15 lg:col-span-5"
            >
              <Image src={image} alt="" fill className="object-cover" sizes="40vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function BentoCell({
  children,
  className = "",
  span = "",
}: {
  children: ReactNode;
  className?: string;
  span?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white/80 p-6 backdrop-blur-sm md:p-8 ${span} ${className}`}
    >
      {children}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  href = "/contact",
  label = "Talk to NIRA",
}: {
  title: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <DotPattern className="opacity-40" />
      <div className="section-pad relative py-16 md:py-20">
        <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-white md:text-4xl">{title}</h2>
            <p className="mt-3 text-white/80">{body}</p>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
          >
            {label} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

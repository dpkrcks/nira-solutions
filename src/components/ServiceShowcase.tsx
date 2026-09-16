"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

export function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <ul className="space-y-1">
          {services.map((service, index) => {
            const selected = index === active;
            return (
              <li key={service.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group flex w-full items-start gap-4 border-l-2 py-5 pl-5 text-left transition-colors ${
                    selected
                      ? "border-accent text-white"
                      : "border-white/15 text-white/55 hover:border-white/40 hover:text-white/85"
                  }`}
                >
                  <span className="font-display text-xs tracking-[0.2em] text-blue-soft">
                    {service.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl md:text-2xl">
                      {service.title}
                    </span>
                    <AnimatePresence initial={false}>
                      {selected ? (
                        <motion.span
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="mt-2 block overflow-hidden text-sm leading-relaxed text-white/75"
                        >
                          {service.summary}
                          <Link
                            href={`/services/${service.slug}`}
                            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-soft link-underline"
                          >
                            Explore capability <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative lg:col-span-7">
        <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/11]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 58vw"
                priority={active === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-display text-sm tracking-[0.18em] text-blue-soft uppercase">
                  {current.subtitle}
                </p>
                <p className="mt-2 font-display text-2xl text-white md:text-3xl">
                  {current.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  );
}

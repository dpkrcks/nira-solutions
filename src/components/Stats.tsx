"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { stats } from "@/lib/content";
import { Marquee } from "@/components/motion-bits";

function useCountUp(target: number, active: boolean, duration = 1300) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);

  return value;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const numeric = parseInt(value, 10);
  const isNumeric = !Number.isNaN(numeric);
  const counted = useCountUp(isNumeric ? numeric : 0, inView);
  const display = isNumeric
    ? `${counted}${value.includes("+") ? "+" : ""}`
    : value;

  return (
    <div ref={ref}>
      <p className="font-display text-5xl tracking-tight text-white md:text-6xl">
        {display}
      </p>
      <p className="mt-3 max-w-[12rem] text-sm leading-snug text-blue-soft">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="noise-overlay opacity-[0.03]" />
      <div className="section-pad relative py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="container-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>

        <div className="container-shell mt-12 border-t border-white/10 pt-8">
          <Marquee
            items={[
              "Dubai",
              "London",
              "Delhi",
              "Australia",
              "Onshore",
              "Offshore",
              "Hybrid",
              "Managed Service",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

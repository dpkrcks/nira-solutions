"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(27,87,240,0.22), transparent 45%)`,
        }}
      />
      {children}
    </div>
  );
}

export function BorderBeam({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="border-beam pointer-events-none absolute inset-0" />
      {children}
    </div>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.35] ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
      }}
    />
  );
}

export function ConnectionDiagram() {
  const reduce = useReducedMotion();
  const nodes = [
    { id: "people", label: "People", x: 18, y: 28 },
    { id: "process", label: "Process", x: 50, y: 72 },
    { id: "tech", label: "Technology", x: 82, y: 28 },
  ];

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b57f0" stopOpacity="0" />
            <stop offset="50%" stopColor="#7eb0ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#1b57f0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          ["18,28", "50,72"],
          ["50,72", "82,28"],
          ["18,28", "82,28"],
        ].map(([from, to], i) => {
          const [x1, y1] = from.split(",").map(Number);
          const [x2, y2] = to.split(",").map(Number);
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.4"
              />
              {!reduce && (
                <motion.line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#beam)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  strokeDasharray="12 88"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: -100 }}
                  transition={{
                    duration: 2.4,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={reduce ? false : { scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <p className="font-display text-sm text-white">{node.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

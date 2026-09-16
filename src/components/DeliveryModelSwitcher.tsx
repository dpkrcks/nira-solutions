"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { deliveryModels } from "@/lib/content";

export function DeliveryModelSwitcher() {
  const [active, setActive] = useState<(typeof deliveryModels)[number]["id"]>(
    deliveryModels[0].id,
  );
  const current = deliveryModels.find((m) => m.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-x-1 gap-y-2 border-b border-line">
        {deliveryModels.map((model) => {
          const selected = model.id === active;
          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setActive(model.id)}
              className={`relative px-3 py-2.5 text-sm font-medium transition-colors ${
                selected ? "text-accent" : "text-mist hover:text-ink"
              }`}
            >
              {model.title}
              {selected ? (
                <motion.span
                  layoutId="delivery-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="relative mt-6 min-h-[96px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
          >
            <p className="font-display text-2xl text-ink">{current.title}</p>
            <p className="mt-2 max-w-xl text-fog">{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

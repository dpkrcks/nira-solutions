"use client";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Native scroll only — Lenis was blocking wheel scroll and creating
  // large empty gaps with motion transforms.
  return <>{children}</>;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isHome = pathname === "/";
  const lightNav = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const linkIdle = lightNav
    ? "text-ink/75 hover:text-ink"
    : "text-white/90 hover:text-white";
  const linkActive = lightNav ? "text-ink font-medium" : "text-white font-medium";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        lightNav
          ? "border-b border-line bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad">
        <div className="container-shell flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="relative z-10">
            <span
              className={`font-display text-lg tracking-[0.12em] md:text-xl ${
                lightNav ? "text-ink" : "text-white"
              }`}
            >
              NIRA
            </span>
            <span className="ml-2 font-display text-lg tracking-[0.06em] text-accent md:text-xl">
              SOLUTIONS
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-sm tracking-wide transition-colors ${
                      pathname.startsWith("/services") ? linkActive : linkIdle
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-lg border border-line bg-white p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm text-fog transition-colors hover:bg-blue-soft hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-underline text-sm tracking-wide transition-colors ${
                    pathname === link.href ? linkActive : linkIdle
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative z-10 lg:hidden ${lightNav ? "text-ink" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-line bg-white lg:hidden"
          >
            <div className="section-pad flex flex-col gap-1 py-4">
              {navLinks.map((link) =>
                "children" in link && link.children ? (
                  <div key={link.href} className="flex flex-col">
                    <button
                      type="button"
                      className="flex items-center justify-between py-3 text-left text-base text-ink"
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          <Link href={link.href} className="block py-2 text-sm text-mist">
                            Overview
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-sm text-mist"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className="py-3 text-base text-ink">
                    {link.label}
                  </Link>
                ),
              )}
              <Link
                href="/contact"
                className="mt-2 rounded-md bg-accent px-4 py-3 text-center text-sm font-medium text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import Link from "next/link";
import { locations, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-navy text-white">
      <div className="section-pad py-16">
        <div className="container-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-[0.08em]">
              NIRA <span className="text-blue">SOLUTIONS</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Integrated manpower, consulting and technology solutions —
              combining regional expertise with global delivery across UAE,
              India, UK and Australia.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
              People. Process. Technology.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="link-underline text-sm text-white/75 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Presence
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {locations.map((loc) => (
                <li key={loc.city} className="text-sm text-white/75">
                  {loc.city}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm text-blue link-underline"
            >
              Start a conversation →
            </Link>
          </div>
        </div>

        <div className="container-shell mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} NIRA SOLUTIONS. All rights reserved.</p>
          <p>Dubai · London · Delhi · Australia</p>
        </div>
      </div>
    </footer>
  );
}

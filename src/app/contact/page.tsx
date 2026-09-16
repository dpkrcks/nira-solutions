import type { Metadata } from "next";
import Image from "next/image";
import { ImmersiveIntro } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { DotPattern } from "@/components/ui-effects";
import { images, locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with NIRA SOLUTIONS about manpower, consulting or technology.",
};

export default function ContactPage() {
  return (
    <>
      <ImmersiveIntro
        eyebrow="Contact"
        title="Tell us the outcome. We’ll shape the engagement."
        description="Share a brief on workforce, procurement or technology — a regional team will respond with a practical next step."
      />

      <section className="bg-blue-wash">
        <div className="grid lg:grid-cols-12">
          <div className="relative hidden min-h-full lg:col-span-5 lg:block">
            <Image
              src={images.contact}
              alt="NIRA workplace"
              fill
              className="object-cover"
              sizes="40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/20" />
            <DotPattern className="opacity-30" />
            <div className="absolute inset-x-0 bottom-0 p-10">
              <p className="font-display text-2xl text-white">
                Dubai · London · Delhi · Australia
              </p>
              <p className="mt-3 max-w-sm text-sm text-blue-soft">
                One partner across regions — local engagement with global
                delivery.
              </p>
            </div>
          </div>

          <div className="section-pad py-14 lg:col-span-7 lg:py-16">
            <Reveal className="mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Send a message
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                We’ll get back shortly.
              </h2>
              <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-[0_20px_60px_rgba(10,24,64,0.06)] md:p-8">
                <ContactForm />
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {locations.map((loc) => (
                  <li key={loc.city} className="border-t border-line pt-4">
                    <p className="font-display text-lg text-ink">{loc.city}</p>
                    <p className="mt-1 text-xs text-accent">{loc.role}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

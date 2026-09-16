"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <label className="block">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-mist">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
        />
      </label>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </motion.button>

      {status === "ok" ? (
        <p className="text-sm text-accent">
          Thanks — we&apos;ll get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-mist">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
      />
    </label>
  );
}

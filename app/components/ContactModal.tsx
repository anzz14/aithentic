"use client";

import { useState } from "react";

type ContactErrors = {
  email?: string;
  purpose?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [touched, setTouched] = useState<{ email: boolean; purpose: boolean }>({
    email: false,
    purpose: false,
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!open) return null;

  const validateField = (field: keyof ContactErrors, value: string) => {
    if (field === "email") {
      return EMAIL_PATTERN.test(value.trim()) ? undefined : "Enter a valid email address.";
    }

    if (field === "purpose") {
      return value.trim().length >= 10 ? undefined : "Purpose should be at least 10 characters.";
    }

    return undefined;
  };

  const validate = () => {
    const nextErrors: ContactErrors = {
      email: validateField("email", email),
      purpose: validateField("purpose", purpose),
    };

    setTouched({ email: true, purpose: true });
    setErrors(nextErrors);
    return Object.values(nextErrors).every((value) => !value);
  };

  const updateField = (field: keyof ContactErrors, value: string) => {
    if (field === "email") {
      setEmail(value);
    } else {
      setPurpose(value);
    }

    if (touched[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof ContactErrors, value: string) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, value),
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, purpose }),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      setStatus("success");
      window.setTimeout(() => {
        onClose();
        setStatus("idle");
        setEmail("");
        setPurpose("");
        setErrors({});
        setTouched({ email: false, purpose: false });
      }, 1200);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <form
        onSubmit={handleSubmit}
        className="relative z-70 w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <p className="mt-1 text-sm text-slate-300">Leave your email and a short purpose so we can reach back.</p>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          <input
            required
            type="email"
            value={email}
            onChange={(event) => updateField("email", event.target.value)}
            onBlur={(event) => handleBlur("email", event.target.value)}
            placeholder="Email address"
            className="rounded-md border border-white/10 bg-white/5 p-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
          {touched.email && errors.email && <p className="-mt-2 text-sm text-red-400">{errors.email}</p>}
          <input
            required
            value={purpose}
            onChange={(event) => updateField("purpose", event.target.value)}
            onBlur={(event) => handleBlur("purpose", event.target.value)}
            placeholder="Purpose of getting in touch"
            className="rounded-md border border-white/10 bg-white/5 p-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
          {touched.purpose && errors.purpose && <p className="-mt-2 text-sm text-red-400">{errors.purpose}</p>}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Contact Request"}
          </button>

          {status === "success" && <span className="text-sm text-green-400">Sent — we will be in touch.</span>}
          {status === "error" && <span className="text-sm text-red-400">Failed to send. Try later.</span>}
        </div>
      </form>
    </div>
  );
}
"use client";

import { useEffect } from "react";
import { useState } from "react";

const HELP_OPTIONS = [
  "More traffic",
  "More leads",
  "Local SEO",
  "Technical SEO",
  "E-commerce SEO",
  "Website redesign",
  "Google rankings",
  "AI Search Optimization",
  "Content SEO",
];

type AuditModalProps = {
  open: boolean;
  onClose: () => void;
  heading?: string;
  initialHelpWith?: string[];
};

export function AuditModal({ open, onClose, heading, initialHelpWith = [] }: AuditModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [helpWith, setHelpWith] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<{ fullName: boolean; email: boolean; website: boolean }>({
    fullName: false,
    email: false,
    website: false,
  });
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; website?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sameHelpWith = (current: string[], next: string[]) => {
    if (current.length !== next.length) {
      return false;
    }

    return current.every((item, index) => item === next[index]);
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    setHelpWith((current) => (sameHelpWith(current, initialHelpWith) ? current : [...initialHelpWith]));
  }, [initialHelpWith, open]);

  if (!open) return null;

  const validateField = (field: keyof typeof errors, value: string) => {
    if (field === "fullName") {
      return value.trim().length >= 3 ? undefined : "Name should be at least 3 letters.";
    }

    if (field === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? undefined : "Enter a valid email address.";
    }

    if (field === "website") {
      if (!value.trim()) {
        return undefined;
      }

      return /^https?:\/\//i.test(value.trim()) ? undefined : "Website should start with http:// or https://";
    }

    return undefined;
  };

  const validate = () => {
    const nextErrors: { fullName?: string; email?: string; website?: string } = {
      fullName: validateField("fullName", fullName),
      email: validateField("email", email),
      website: validateField("website", website),
    };

    setTouched({ fullName: true, email: true, website: true });
    setErrors(nextErrors);
    return Object.values(nextErrors).every((value) => !value);
  };

  const updateField = (field: "fullName" | "email" | "website", value: string) => {
    if (field === "fullName") setFullName(value);
    if (field === "email") setEmail(value);
    if (field === "website") setWebsite(value);

    if (touched[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: "fullName" | "email" | "website", value: string) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, value),
    }));
  };

  const toggleHelp = (option: string) => {
    setHelpWith((prev) => (prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, company, website, phone, helpWith, message }),
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setErrors({});
        setTouched({ fullName: false, email: false, website: false });
      }, 1400);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <form
        onSubmit={handleSubmit}
        className="relative z-70 w-full max-w-2xl rounded-2xl bg-[#0f0f0f] border border-white/10 p-6 shadow-lg"
      >
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-white">{heading ?? "Get a Free SEO Audit"}</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <input
              required
              value={fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              onBlur={(e) => handleBlur("fullName", e.target.value)}
              placeholder="Full Name"
              className="rounded-md border border-white/10 bg-white/3 p-2 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            {touched.fullName && errors.fullName && <p className="text-sm text-red-400">{errors.fullName}</p>}
          </div>
          <div className="grid gap-2">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => updateField("email", e.target.value)}
              onBlur={(e) => handleBlur("email", e.target.value)}
              placeholder="Work Email"
              className="rounded-md border border-white/10 bg-white/3 p-2 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            {touched.email && errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
          </div>
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" className="rounded-md border border-white/10 bg-white/3 p-2 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
          <div className="grid gap-2">
            <input
              value={website}
              onChange={(e) => updateField("website", e.target.value)}
              onBlur={(e) => handleBlur("website", e.target.value)}
              placeholder="Website URL (optional)"
              className="rounded-md border border-white/10 bg-white/3 p-2 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            {touched.website && errors.website && <p className="text-sm text-red-400">{errors.website}</p>}
          </div>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="rounded-md border border-white/10 bg-white/3 p-2 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
        </div>

        <div className="mt-4">
          <label className="block text-sm text-slate-300">What do you want help with?</label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {HELP_OPTIONS.map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2 text-sm text-slate-200">
                <input
                  type="checkbox"
                  checked={helpWith.includes(opt)}
                  onChange={() => toggleHelp(opt)}
                  className="h-4 w-4 accent-orange-500"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Optional message" className="w-full rounded-md border border-white/10 bg-white/3 p-2 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
          >
            {status === "sending" ? "Sending..." : "Get Free Audit"}
          </button>

          {status === "success" && <span className="text-sm text-green-400">Sent — we will be in touch.</span>}
          {status === "error" && <span className="text-sm text-red-400">Failed to send. Try later.</span>}
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";

const HELP_OPTIONS = [
  "More traffic",
  "More leads",
  "Local SEO",
  "Technical SEO",
  "E-commerce SEO",
  "Website redesign",
  "Google rankings",
];

export function AuditModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [helpWith, setHelpWith] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!open) return null;

  const toggleHelp = (option: string) => {
    setHelpWith((prev) => (prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          <h3 className="text-lg font-bold text-white">Get a Free SEO Audit</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="rounded-md bg-white/3 p-2 text-white" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work Email" className="rounded-md bg-white/3 p-2 text-white" />
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" className="rounded-md bg-white/3 p-2 text-white" />
          <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website URL" className="rounded-md bg-white/3 p-2 text-white" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="rounded-md bg-white/3 p-2 text-white" />
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
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Optional message" className="w-full rounded-md bg-white/3 p-2 text-white" />
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

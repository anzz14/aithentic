"use client";

import { useState } from "react";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!open) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="rounded-md border border-white/10 bg-white/5 p-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-500"
          />
          <input
            required
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            placeholder="Purpose of getting in touch"
            className="rounded-md border border-white/10 bg-white/5 p-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-500"
          />
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
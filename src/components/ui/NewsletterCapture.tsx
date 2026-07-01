"use client";

import { useState } from "react";

interface NewsletterCaptureProps {
  title?: string;
  description?: string;
  source?: string;
}

export function NewsletterCapture({
  title = "Dapatkan Update Terbaru",
  description = "Insight terbaik langsung ke email Anda.",
  source = "website",
}: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", color: "#f9fafb" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginBottom: "20px" }}>
        {description}
      </p>
      {status === "success" ? (
        <p style={{ color: "#34d399", fontSize: "0.875rem" }}>
          Terima kasih! Anda sudah terdaftar.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Anda"
            required
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #374151",
              background: "#1f2937",
              color: "#f9fafb",
              fontSize: "0.875rem",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              background: "#6366f1",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.875rem",
              border: "none",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
            }}
          >
            {status === "loading" ? "..." : "Daftar"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "8px" }}>
          Gagal mendaftar, coba lagi.
        </p>
      )}
    </div>
  );
}

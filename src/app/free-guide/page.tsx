"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Download, ArrowRight, BookOpen, Target, TrendingUp, Search, Link2, BarChart3 } from "lucide-react";

export default function FreeGuidePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wa, setWa] = useState("");
  const [bisnis, setBisnis] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Halo Nuswa Lab, saya ingin mendapatkan Panduan SEO Lokal untuk UMKM. Nama: ${name}, Email: ${email}, WhatsApp: ${wa}, Bisnis: ${bisnis}`);
    window.open(`https://wa.me/6285181301622?text=${msg}`, "_blank");
  };

  const benefits = [
    { icon: Target, text: "Cara optimasi Google Business Profile step-by-step" },
    { icon: Search, text: "Template riset keyword lokal yang terbukti efektif" },
    { icon: CheckCircle, text: "Checklist teknikal SEO untuk website UMKM" },
    { icon: Link2, text: "10 strategi link building lokal tanpa biaya besar" },
    { icon: BarChart3, text: "Cara menganalisis kompetitor lokal dengan tepat" },
    { icon: TrendingUp, text: "Bonus: Kalender konten SEO 30 hari" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-60" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden" style={{background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 60%, #0d1f0d 100%)"}}>
        <div className="orb w-[500px] h-[500px] -top-32 -left-20 animate-orb" style={{background: "radial-gradient(circle, #5C7A5A33 0%, transparent 70%)"}} />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 font-semibold" style={{background: "rgba(92,122,90,0.2)", color: "#8fba8c", border: "1px solid rgba(92,122,90,0.4)"}}>
              <Download className="w-3.5 h-3.5" /> Download Gratis
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{fontFamily: "var(--font-display)", color: "white", lineHeight: "1.1"}}>
              Panduan SEO Lokal untuk<br />
              <span style={{color: "#8fba8c"}}>UMKM Indonesia 2026</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{color: "rgba(255,255,255,0.75)"}}>
              Panduan lengkap 40+ halaman yang akan mengajarkan Anda cara memenangkan pencarian lokal Google dan mendatangkan lebih banyak pelanggan tanpa biaya iklan besar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm" style={{color: "rgba(255,255,255,0.6)"}}>
              {["40+ Halaman", "Gratis 100%", "Bahasa Indonesia", "Langsung Bisa Diterapkan"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" style={{color: "#8fba8c"}} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{fontFamily: "var(--font-display)", color: "var(--color-foreground)"}}>
                Apa yang Ada di Dalam Panduan Ini?
              </h2>
              <div className="space-y-5">
                {benefits.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl" style={{background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)"}}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: "rgba(92,122,90,0.1)"}}>
                      <Icon className="w-5 h-5" style={{color: "#5C7A5A"}} />
                    </div>
                    <p className="font-medium pt-2" style={{color: "#1a2e1a"}}>{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-3xl" style={{background: "linear-gradient(135deg, #1a2e1a 0%, #0d1f0d 100%)", color: "white"}}>
                <BookOpen className="w-8 h-8 mb-4" style={{color: "#8fba8c"}} />
                <h3 className="text-xl font-bold mb-2">Cocok untuk siapa?</h3>
                <ul className="space-y-2 text-sm" style={{color: "rgba(255,255,255,0.75)"}}>
                  {["UMKM yang ingin mendominasi pencarian lokal", "Pemilik toko offline yang ingin go digital", "Tim marketing yang ingin belajar SEO dari nol", "Freelancer dan konsultan digital"].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{color: "#8fba8c"}} /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl" style={{border: "1px solid rgba(92,122,90,0.2)"}}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: "rgba(92,122,90,0.1)"}}>
                    <Download className="w-8 h-8" style={{color: "#5C7A5A"}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: "#1a2e1a"}}>Dapatkan Panduan Gratis Kami</h3>
                  <p className="text-sm" style={{color: "#6b7280"}}>Isi form di bawah dan kami kirimkan via WhatsApp dalam 5 menit</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{color: "#374151"}}>Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none"
                      style={{borderColor: "#d1d5db", color: "#1a2e1a"}}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{color: "#374151"}}>Alamat Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="email@bisnis.com"
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none"
                      style={{borderColor: "#d1d5db", color: "#1a2e1a"}}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{color: "#374151"}}>Nomor WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={wa}
                      onChange={e => setWa(e.target.value)}
                      placeholder="0812-3456-7890"
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none"
                      style={{borderColor: "#d1d5db", color: "#1a2e1a"}}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{color: "#374151"}}>Nama Bisnis / Usaha</label>
                    <input
                      type="text"
                      value={bisnis}
                      onChange={e => setBisnis(e.target.value)}
                      placeholder="Contoh: Toko Elektronik Sejahtera"
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none"
                      style={{borderColor: "#d1d5db", color: "#1a2e1a"}}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
                    style={{background: "linear-gradient(135deg, #5C7A5A 0%, #3d5c3b 100%)"}}
                  >
                    <Download className="w-5 h-5" /> Download Panduan Gratis
                  </button>
                  <p className="text-xs text-center" style={{color: "#9ca3af"}}>
                    Dengan mengisi form ini, Anda setuju dihubungi via WhatsApp. Data Anda aman bersama kami.
                  </p>
                </form>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm" style={{color: "var(--color-muted-foreground)"}}>Sudah punya panduan? <Link href="/contact" className="font-semibold" style={{color: "#5C7A5A"}}>Konsultasi langsung dengan tim kami <ArrowRight className="w-3.5 h-3.5 inline" /></Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo GoSocial, saya ${form.name} dari ${form.company}. Email: ${form.email}. Layanan: ${form.service}. Pesan: ${form.message}`;
    window.open(`https://wa.me/6281234566636?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-20 lg:pt-48">
        <div className="orb orb-primary w-[500px] h-[500px] -top-40 -right-20 animate-orb" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Hubungi Kami</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4" style={{fontFamily:"var(--font-display)"}}>Mari berdiskusi</h1>
            <p style={{color:"var(--color-muted-foreground)"}}>Konsultasi gratis 30 menit dengan strategist kami. Tidak ada komitmen.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-strong rounded-3xl p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="font-bold text-xl mb-2" style={{fontFamily:"var(--font-display)"}}>Pesan Terkirim!</h3>
                    <p className="mb-6" style={{color:"var(--color-muted-foreground)"}}>Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
                    <button onClick={()=>setSent(false)} className="btn-ghost">Kirim Lagi</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium block mb-1.5">Nama Lengkap *</label>
                        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[color:var(--color-primary)] transition" style={{borderColor:"var(--color-border)",background:"oklch(1 0 0 / 0.8)"}} />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1.5">Perusahaan</label>
                        <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="PT. Contoh" className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[color:var(--color-primary)] transition" style={{borderColor:"var(--color-border)",background:"oklch(1 0 0 / 0.8)"}} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium block mb-1.5">Email *</label>
                        <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[color:var(--color-primary)] transition" style={{borderColor:"var(--color-border)",background:"oklch(1 0 0 / 0.8)"}} />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1.5">No. WhatsApp</label>
                        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="08xxxxxxxxxx" className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[color:var(--color-primary)] transition" style={{borderColor:"var(--color-border)",background:"oklch(1 0 0 / 0.8)"}} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1.5">Layanan yang Diminati</label>
                      <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[color:var(--color-primary)] transition" style={{borderColor:"var(--color-border)",background:"oklch(1 0 0 / 0.8)"}}>
                        <option value="">Pilih layanan...</option>
                        {["360 Digital Marketing","Social Media Management","Digital Campaign / Ads","SEO & Local SEO","Website Development","Branding & Design","KOL & Affiliate","Commercial Photography","Video Production","Apps Development"].map(s=>(<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1.5">Pesan / Kebutuhan</label>
                      <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={4} placeholder="Ceritakan tentang bisnis dan kebutuhan digital Anda..." className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[color:var(--color-primary)] transition resize-none" style={{borderColor:"var(--color-border)",background:"oklch(1 0 0 / 0.8)"}} />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Kirim via WhatsApp <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-bold mb-4" style={{fontFamily:"var(--font-display)"}}>Kontak Langsung</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/6281234566636" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-[color:var(--color-primary)] transition">
                    <MessageCircle className="w-4 h-4" style={{color:"var(--color-primary)"}} /> +62 812-3456-6636
                  </a>
                  <a href="mailto:hello@gosocial.co.id" className="flex items-center gap-3 text-sm hover:text-[color:var(--color-primary)] transition">
                    <Mail className="w-4 h-4" style={{color:"var(--color-primary)"}} /> hello@gosocial.co.id
                  </a>
                  <div className="flex items-start gap-3 text-sm" style={{color:"var(--color-muted-foreground)"}}>
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{color:"var(--color-primary)"}} />
                    <span>Bumi Mandiri Tower II, Jl. Panglima Sudirman, Surabaya 60271</span>
                  </div>
                </div>
              </div>
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-bold mb-3" style={{fontFamily:"var(--font-display)"}}>Cabang Kami</h3>
                {["Surabaya (HQ)","Jakarta","Bandung","Yogyakarta","Malang"].map(c=>(
                  <div key={c} className="text-sm py-1.5 border-b last:border-0" style={{borderColor:"var(--color-border)",color:"var(--color-muted-foreground)"}}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

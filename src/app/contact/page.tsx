"use client";
import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Tim kami akan menghubungi Anda segera.");
  };

  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 left-1/4 animate-orb" />
        <div className="orb orb-violet w-[400px] h-[400px] top-20 right-1/4 animate-orb" style={{animationDelay:"-5s"}} />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-widest mb-6" style={{color:"var(--color-primary)"}}>Hubungi Kami</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"var(--font-display)"}}>
              <span className="text-gradient">Kami Siap</span><br />
              <span className="text-gradient">Membantu Anda</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{color:"var(--color-muted-foreground)"}}>Konsultasikan kebutuhan digital marketing bisnis Anda. Tim ahli kami siap memberikan solusi terbaik.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div className="glass shimmer-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6" style={{fontFamily:"var(--font-display)"}}>Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 transition-all"
                      style={{background:"var(--color-background)", borderColor:"var(--color-border)"}}
                      placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 transition-all"
                      style={{background:"var(--color-background)", borderColor:"var(--color-border)"}}
                      placeholder="email@bisnis.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nomor WhatsApp</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 transition-all"
                      style={{background:"var(--color-background)", borderColor:"var(--color-border)"}}
                      placeholder="+62 812 3456 7890" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ceritakan Kebutuhan Anda</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 transition-all resize-none"
                      style={{background:"var(--color-background)", borderColor:"var(--color-border)"}}
                      placeholder="Saya butuh bantuan untuk..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Kirim Pesan <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                {[
                  { Icon: MessageCircle, title: "WhatsApp", desc: "+62 812 3456 7890", sub: "Respon dalam 1 jam" },
                  { Icon: Mail, title: "Email", desc: "hello@gosocial.co.id", sub: "Respon dalam 24 jam" },
                  { Icon: MapPin, title: "Kantor", desc: "Jl. Sudirman No. 123, Jakarta Selatan", sub: "DKI Jakarta 12190" },
                  { Icon: Clock, title: "Jam Operasional", desc: "Senin - Jumat: 09.00 - 18.00", sub: "Sabtu: 09.00 - 14.00" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-2xl p-6 flex gap-4 items-start hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:"var(--gradient-primary)"}}>
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{fontFamily:"var(--font-display)"}}>{item.title}</h3>
                      <p className="font-medium">{item.desc}</p>
                      <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

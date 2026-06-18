"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

const navServices = [
  { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360" },
  { label: "Social Media Management", href: "/service/social-media-management" },
  {
    label: "Digital Campaign / Ads", href: "/service/digital-campaign",
    sub: [
      { label: "Meta Ads", href: "/service/digital-campaign/meta-ads" },
      { label: "Instagram Ads", href: "/service/digital-campaign/instagram-ads" },
      { label: "TikTok Ads", href: "/service/digital-campaign/tiktok-ads" },
      { label: "Google Ads", href: "/service/digital-campaign/google-ads" },
      { label: "Facebook Ads", href: "/service/digital-campaign/facebook-ads" },
      { label: "YouTube Ads", href: "/service/digital-campaign/youtube-ads" },
    ],
  },
  { label: "SEO & Local SEO", href: "/service/jasa-seo" },
  { label: "Website Development", href: "/service/jasa-pembuatan-website" },
  {
    label: "Branding & Design", href: "/service/branding",
    sub: [
      { label: "Jasa Desain", href: "/service/branding/jasa-desain" },
      { label: "Desain Logo", href: "/service/branding/jasa-desain/logo" },
      { label: "Banner & Brosur", href: "/service/branding/jasa-desain/banner-brosur" },
    ],
  },
  { label: "KOL & Affiliate", href: "/service/affiliate-marketing" },
  { label: "Commercial Photography", href: "/service/commercial-photography" },
  { label: "Foto Produk", href: "/service/jasa-foto-produk" },
  { label: "Video Production", href: "/service/video-production" },
  { label: "Apps Development", href: "/service/apps-development" },
  { label: "AI Automation", href: "/service/ai-automation" },
];
const navSolutions = [
  { label: "Enterprise / Brand", href: "/solution/enterprise" },
  { label: "Healthcare", href: "/solution/healthcare" },
  { label: "Education", href: "/solution/education" },
  { label: "F&B / Kuliner", href: "/solution/fnb" },
  { label: "Organisasi & NGO", href: "/solution/organization" },
  { label: "Retail & Toko Online", href: "/solution/retail" },
];
const navCompany = [
  { label: "Tentang Kami", href: "/about" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Clients", href: "/our-client" },
  { label: "Partnership", href: "/partnership" },
  { label: "Blog", href: "/blog" },
];

type NavItem = { label: string; href: string; sub?: { label: string; href: string }[] };

function DropdownMenu({ label, items, open, onToggle, onClose }: {
  label: string;
  items: NavItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  return (
    <div className="relative" onMouseLeave={() => { onClose(); setHoveredSub(null); }}>
      <button onClick={onToggle} onMouseEnter={onToggle}
        className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-black/5 transition text-sm font-medium">
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl shadow-2xl overflow-hidden z-50"
          style={{
            background: "oklch(1 0 0 / 0.95)",
            backdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 20px 60px -10px oklch(0.5 0.1 265 / 0.2), 0 0 0 1px oklch(0.88 0.02 265 / 0.5)",
          }}>
          <div className="p-2">
          {items.map((item, idx) => (
            <div key={item.href} className="relative"
              onMouseEnter={() => item.sub ? setHoveredSub(item.href) : setHoveredSub(null)}>
              <Link href={item.href} onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group"
                style={{ color: "var(--color-foreground)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-secondary)")}
                onMouseLeave={e => (e.currentTarget.style.background = "")}>
                <span className="group-hover:text-primary transition-colors">{item.label}</span>
                {item.sub && <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-40" />}
              </Link>
              {item.sub && hoveredSub === item.href && (
                <div className="absolute left-full top-0 ml-2 w-60 rounded-2xl shadow-2xl overflow-hidden z-50"
                  style={{
                    background: "oklch(1 0 0 / 0.95)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "0 20px 60px -10px oklch(0.5 0.1 265 / 0.2)",
                  }}>
                  <div className="p-2">
                    <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-muted-foreground)" }}>
                      Platform
                    </p>
                    {item.sub.map((s) => (
                      <Link key={s.href} href={s.href} onClick={onClose}
                        className="block px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                        style={{ color: "var(--color-foreground)" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "var(--color-secondary)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "")}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (menu: string) => setOpenMenu((prev) => (prev === menu ? null : menu));
  const close = () => setOpenMenu(null);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
        <nav className="glass rounded-2xl px-4 lg:px-6 py-3 flex items-center justify-between shadow-lg"
          style={{ boxShadow: "var(--shadow-glass)" }}>
          <Link href="/" onClick={close} className="flex items-center gap-2 flex-shrink-0">
            <img src="/images/gosocial-logo-2025.webp" alt="GoSocial" className="h-8 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <DropdownMenu label="Layanan" items={navServices} open={openMenu === "services"} onToggle={() => toggle("services")} onClose={close} />
            <DropdownMenu label="Solusi" items={navSolutions} open={openMenu === "solutions"} onToggle={() => toggle("solutions")} onClose={close} />
            <DropdownMenu label="Perusahaan" items={navCompany} open={openMenu === "company"} onToggle={() => toggle("company")} onClose={close} />
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden lg:flex !py-2 !px-4 !text-sm gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Konsultasi Gratis
            </Link>
            <button className="lg:hidden p-2 rounded-xl hover:bg-black/5 transition" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mt-2 glass rounded-2xl px-4 py-4 shadow-xl lg:hidden" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-2 px-2">Layanan</p>
            {navServices.map((s) => (
              <div key={s.href}>
                <Link href={s.href} onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 text-sm hover:bg-black/5 rounded-xl transition font-medium">{s.label}</Link>
                {s.sub && s.sub.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                    className="block px-6 py-1.5 text-xs hover:bg-black/5 rounded-xl transition opacity-70">{sub.label}</Link>
                ))}
              </div>
            ))}
            <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-2 px-2 mt-4">Solusi</p>
            {navSolutions.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 text-sm hover:bg-black/5 rounded-xl transition font-medium">{s.label}</Link>
            ))}
            <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-2 px-2 mt-4">Perusahaan</p>
            {navCompany.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 text-sm hover:bg-black/5 rounded-xl transition font-medium">{s.label}</Link>
            ))}
            <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
                <Sparkles className="w-4 h-4" /> Konsultasi Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

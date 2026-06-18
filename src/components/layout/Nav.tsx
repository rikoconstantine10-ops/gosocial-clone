"use client";
import Link from "next/link";
import { useState, useRef } from "react";
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

function DropdownMenu({ label, items, open, onOpen, onClose }: {
  label: string;
  items: NavItem[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      onClose();
      setHoveredSub(null);
    }, 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); onOpen(); }}
      onMouseLeave={scheduleClose}
    >
      <button
        onClick={() => open ? onClose() : onOpen()}
        className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-black/5 transition text-sm font-medium"
      >
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 w-72 rounded-2xl shadow-2xl overflow-hidden z-50"
          style={{
            background: "oklch(1 0 0 / 0.97)",
            backdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 20px 60px -10px oklch(0.5 0.1 265 / 0.2), 0 0 0 1px oklch(0.88 0.02 265 / 0.5)",
          }}
        >
          <div className="p-2">
            {items.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.sub ? setHoveredSub(item.href) : setHoveredSub(null)}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group"
                  style={{ color: "var(--color-foreground)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "")}
                >
                  <span className="group-hover:text-primary transition-colors">{item.label}</span>
                  {item.sub && <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-40" />}
                </Link>
                {item.sub && hoveredSub === item.href && (
                  <div
                    className="absolute left-full top-0 ml-1 w-60 rounded-2xl shadow-2xl overflow-hidden z-50"
                    style={{
                      background: "oklch(1 0 0 / 0.97)",
                      backdropFilter: "blur(24px)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "0 20px 60px -10px oklch(0.5 0.1 265 / 0.2)",
                    }}
                  >
                    <div className="p-2">
                      <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-muted-foreground)" }}>
                        Platform
                      </p>
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={onClose}
                          className="block px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                          style={{ color: "var(--color-foreground)" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "var(--color-secondary)")}
                          onMouseLeave={e => (e.currentTarget.style.background = "")}
                        >
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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const open = (menu: string) => setOpenMenu(menu);
  const close = () => setOpenMenu(null);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
        <nav
          className="glass rounded-2xl px-4 lg:px-6 py-3 flex items-center justify-between shadow-lg"
          style={{ boxShadow: "var(--shadow-glass)" }}
        >
          <Link href="/" onClick={close} className="flex items-center gap-2 flex-shrink-0">
            <img src="/images/gosocial-logo-2025.webp" alt="GoSocial" className="h-8 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <DropdownMenu label="Layanan" items={navServices} open={openMenu === "services"} onOpen={() => open("services")} onClose={close} />
            <DropdownMenu label="Solusi" items={navSolutions} open={openMenu === "solutions"} onOpen={() => open("solutions")} onClose={close} />
            <DropdownMenu label="Perusahaan" items={navCompany} open={openMenu === "company"} onOpen={() => open("company")} onClose={close} />
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden lg:flex !py-2 !px-4 !text-sm gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Konsultasi Gratis
            </Link>
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-black/5 transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mt-2 rounded-2xl p-4 shadow-2xl"
            style={{
              background: "oklch(1 0 0 / 0.97)",
              backdropFilter: "blur(24px)",
              border: "1px solid var(--color-border)",
            }}
          >
            {[
              { key: "services", label: "Layanan", items: navServices },
              { key: "solutions", label: "Solusi", items: navSolutions },
              { key: "company", label: "Perusahaan", items: navCompany },
            ].map(({ key, label, items }) => (
              <div key={key} className="mb-2">
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm"
                  onClick={() => setMobileExpanded((p) => (p === key ? null : key))}
                >
                  {label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === key ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === key && (
                  <div className="mt-1 ml-3">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { close(); setMobileOpen(false); }}
                        className="block px-3 py-2 rounded-xl text-sm transition"
                        style={{ color: "var(--color-foreground)" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "var(--color-secondary)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "")}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary w-full justify-center mt-3 gap-1.5"
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles className="w-3.5 h-3.5" /> Konsultasi Gratis
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

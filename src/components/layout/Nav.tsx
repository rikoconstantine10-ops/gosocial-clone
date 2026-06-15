"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

const navServices = [
  { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360" },
  { label: "Social Media Management", href: "/service/social-media-management" },
  { label: "Digital Campaign / Ads", href: "/service/digital-campaign" },
  { label: "SEO & Local SEO", href: "/service/jasa-seo" },
  { label: "Website Development", href: "/service/jasa-pembuatan-website" },
  { label: "Branding & Design", href: "/service/branding" },
  { label: "KOL & Affiliate", href: "/service/affiliate-marketing" },
  { label: "Commercial Photography", href: "/service/commercial-photography" },
  { label: "Video Production", href: "/service/video-production" },
  { label: "Apps Development", href: "/service/apps-development" },
];
const navSolutions = [
  { label: "Enterprise / Brand", href: "/solution/enterprise" },
  { label: "Healthcare", href: "/solution/healthcare" },
  { label: "Education", href: "/solution/education" },
  { label: "F&B / Kuliner", href: "/solution/fnb" },
  { label: "Government & Organisasi", href: "/solution/government" },
  { label: "Retail & Toko Online", href: "/solution/retail" },
];
const navCompany = [
  { label: "Tentang Kami", href: "/about" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Our Clients", href: "/our-client" },
  { label: "Partnership", href: "/partnership" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
];

function DropdownMenu({ label, items, open, onToggle, onClose }: {
  label: string;
  items: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button onClick={onToggle} className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-black/5 transition text-sm">
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={onClose} />
          <div className="absolute left-0 top-full mt-2 min-w-[260px] glass-strong rounded-2xl p-2 z-20 animate-slide-up shadow-lg">
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose}
                className="block px-3 py-2 rounded-xl hover:bg-black/5 text-sm hover:text-[color:var(--color-primary)] transition">
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass-strong rounded-full flex items-center justify-between px-4 lg:px-6 py-2.5">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg" style={{fontFamily:"var(--font-display)"}}>
            <img src="/images/gosocial-logo-2025.webp" alt="GoSocial" className="h-8 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            <DropdownMenu label="Services" items={navServices} open={dropdown==="services"} onToggle={()=>setDropdown(dropdown==="services"?null:"services")} onClose={()=>setDropdown(null)} />
            <DropdownMenu label="Solution" items={navSolutions} open={dropdown==="solution"} onToggle={()=>setDropdown(dropdown==="solution"?null:"solution")} onClose={()=>setDropdown(null)} />
            <Link href="/portfolio" className="px-3 py-2 rounded-full hover:bg-black/5 transition text-sm">Portfolio</Link>
            <DropdownMenu label="Company" items={navCompany} open={dropdown==="company"} onToggle={()=>setDropdown(dropdown==="company"?null:"company")} onClose={()=>setDropdown(null)} />
            <Link href="/blog" className="px-3 py-2 rounded-full hover:bg-black/5 transition text-sm">Blog</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-sm">
              <Sparkles className="w-4 h-4" /> Get In Touch
            </Link>
            <button onClick={()=>setOpen(!open)} className="lg:hidden p-2 rounded-full glass" aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-3xl p-4 space-y-2 animate-slide-up shadow-lg">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pt-1">Services</div>
            {navServices.map(i=><Link key={i.href} href={i.href} onClick={()=>setOpen(false)} className="block px-3 py-1.5 text-sm hover:text-[color:var(--color-primary)]">{i.label}</Link>)}
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pt-2">Company</div>
            {navCompany.map(i=><Link key={i.href} href={i.href} onClick={()=>setOpen(false)} className="block px-3 py-1.5 text-sm hover:text-[color:var(--color-primary)]">{i.label}</Link>)}
            <Link href="/contact" onClick={()=>setOpen(false)} className="btn-primary w-full mt-2">Get In Touch</Link>
          </div>
        )}
      </div>
    </header>
  );
}

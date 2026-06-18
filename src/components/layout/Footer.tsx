import { Mail, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";


const footerServices = [
  { label: "360° Digital Marketing", href: "/service/jasa-digital-marketing-360" },
  { label: "Social Media Management", href: "/service/social-media-management" },
  { label: "Digital Campaign / Ads", href: "/service/digital-campaign" },
  { label: "Meta & Instagram Ads", href: "/service/digital-campaign/meta-ads" },
  { label: "TikTok Ads", href: "/service/digital-campaign/tiktok-ads" },
  { label: "Google Ads", href: "/service/digital-campaign/google-ads" },
  { label: "SEO & Local SEO", href: "/service/jasa-seo" },
  { label: "Website Development", href: "/service/jasa-pembuatan-website" },
  { label: "Branding & Design", href: "/service/branding" },
  { label: "KOL & Affiliate", href: "/service/affiliate-marketing" },
  { label: "Commercial Photography", href: "/service/commercial-photography" },
  { label: "Foto Produk", href: "/service/jasa-foto-produk" },
  { label: "Video Production", href: "/service/video-production" },
  { label: "Apps Development", href: "/service/apps-development" },
];

const footerSolutions = [
  { label: "Enterprise / Brand", href: "/solution/enterprise" },
  { label: "Healthcare", href: "/solution/healthcare" },
  { label: "Education", href: "/solution/education" },
  { label: "F&B / Kuliner", href: "/solution/fnb" },
  { label: "Organisasi & NGO", href: "/solution/organization" },
  { label: "Retail & Toko Online", href: "/solution/retail" },
];

const footerCompany = [
  { label: "Tentang Kami", href: "/about" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Clients", href: "/our-client" },
  { label: "Partnership", href: "/partnership" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t" style={{borderColor:"var(--color-border)",background:"oklch(0.97 0.005 265)"}}>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-3 space-y-5">
            <img src="/images/gosocial-logo-2025.webp" alt="GoSocial" className="h-10 w-auto" />
            <p className="text-sm leading-relaxed" style={{color:"var(--color-muted-foreground)"}}>
              PT. Nusa Digital Media — mendampingi bisnis bertumbuh secara digital sejak 2020.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://wa.me/6281234566636" target="_blank" rel="noopener noreferrer"
                className="btn-ghost !py-1.5 !px-3 !text-xs gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a href="mailto:hello@gosocial.co.id" className="btn-ghost !py-1.5 !px-3 !text-xs gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
            <div className="flex gap-2">
              <a href="https://instagram.com/gosocial.id" target="_blank" rel="noopener noreferrer"
                className="btn-ghost !p-2.5 !rounded-full" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@gosocial.id" target="_blank" rel="noopener noreferrer"
                className="btn-ghost !p-2.5 !rounded-full" title="YouTube">
                🎬
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:opacity-80 transition-opacity"
                    style={{color:"var(--color-muted-foreground)"}}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm mb-4">Solusi Industri</h4>
            <ul className="space-y-2">
              {footerSolutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:opacity-80 transition-opacity"
                    style={{color:"var(--color-muted-foreground)"}}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-sm mb-4 mt-8">Perusahaan</h4>
            <ul className="space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:opacity-80 transition-opacity"
                    style={{color:"var(--color-muted-foreground)"}}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm mb-4">Kontak</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:"var(--color-primary)"}} />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <a href="https://wa.me/6281234566636" target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:opacity-80 transition-opacity" style={{color:"var(--color-muted-foreground)"}}>+62 812-3456-6636</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:"var(--color-primary)"}} />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:hello@gosocial.co.id"
                    className="text-sm hover:opacity-80 transition-opacity" style={{color:"var(--color-muted-foreground)"}}>hello@gosocial.co.id</a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:"var(--color-primary)"}} />
                <p className="text-sm" style={{color:"var(--color-muted-foreground)"}}>Jl. Sudirman No. 123, Jakarta Selatan 12190</p>
              </div>
            </div>
            <div className="mt-6 p-4 glass rounded-2xl">
              <p className="text-xs font-medium mb-1">Konsultasi Gratis</p>
              <p className="text-xs mb-3" style={{color:"var(--color-muted-foreground)"}}>Diskusikan kebutuhan digital marketing Anda.</p>
              <Link href="/contact" className="btn-primary !py-2 !px-4 !text-xs w-full justify-center">Mulai Sekarang</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{borderColor:"var(--color-border)"}}>
          <p className="text-xs" style={{color:"var(--color-muted-foreground)"}}>
            © 2025 PT. Nusa Digital Media. Semua hak cipta dilindungi.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-xs hover:opacity-80 transition-opacity" style={{color:"var(--color-muted-foreground)"}}>Privacy Policy</Link>
            <Link href="/contact" className="text-xs hover:opacity-80 transition-opacity" style={{color:"var(--color-muted-foreground)"}}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

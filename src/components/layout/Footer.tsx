import Link from "next/link";
import { Mail, MessageCircle, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t" style={{borderColor:"var(--color-border)",background:"oklch(0.97 0.005 265)"}}>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-5">
            <img src="/images/gosocial-logo-2025.webp" alt="GoSocial" className="h-10 w-auto" />
            <p className="text-sm leading-relaxed max-w-sm" style={{color:"var(--color-muted-foreground)"}}>
              PT. Nusa Digital Media - mendampingi bisnis dan organisasi membangun branding, marketing, dan teknologi digital sejak 2020.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://wa.me/6281234566636" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-1.5 !px-3 !text-xs gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a href="mailto:hello@gosocial.co.id" className="btn-ghost !py-1.5 !px-3 !text-xs gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
              <a href="https://instagram.com/gosocial.id" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-1.5 !px-3 !text-xs gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" /> Instagram
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm uppercase tracking-wider" style={{fontFamily:"var(--font-display)",color:"var(--color-muted-foreground)"}}>Services</h4>
            <ul className="space-y-2">
              {[["360 Marketing","/service/jasa-digital-marketing-360"],["Social Media","/service/social-media-management"],["Website Dev","/service/jasa-pembuatan-website"],["Digital Ads","/service/digital-campaign"],["SEO","/service/jasa-seo"],["Branding","/service/branding"]].map(([label,href])=>(
                <li key={href}><Link href={href} className="text-sm hover:text-[color:var(--color-primary)] transition" style={{color:"var(--color-muted-foreground)"}}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm uppercase tracking-wider" style={{fontFamily:"var(--font-display)",color:"var(--color-muted-foreground)"}}>Company</h4>
            <ul className="space-y-2">
              {[["About","/about"],["How it Works","/how-it-works"],["Portfolio","/portfolio"],["Career","/career"],["Blog","/blog"],["Contact","/contact"]].map(([label,href])=>(
                <li key={href}><Link href={href} className="text-sm hover:text-[color:var(--color-primary)] transition" style={{color:"var(--color-muted-foreground)"}}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm uppercase tracking-wider" style={{fontFamily:"var(--font-display)",color:"var(--color-muted-foreground)"}}>As Seen On</h4>
            <div className="flex flex-wrap gap-3">
              {["Kompas","Detik","IDN Times","Tempo","Sindonews"].map(p=>(
                <span key={p} className="text-sm font-medium" style={{color:"var(--color-foreground)"}}>{p}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between gap-3 text-xs" style={{borderColor:"var(--color-border)",color:"var(--color-muted-foreground)"}}>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{color:"var(--color-primary)"}} />
            <span>Bumi Mandiri Tower II, Jl. Panglima Sudirman, Surabaya, Jawa Timur 60271</span>
          </div>
          <span>2025 PT. Nusa Digital Media. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

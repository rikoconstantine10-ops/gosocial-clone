import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-aurora opacity-50" />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <section className="relative pt-36 pb-16 lg:pt-48 flex items-center justify-center min-h-[70vh]">
        <div className="orb orb-violet w-[400px] h-[400px] -top-20 -left-20 animate-orb" />
        <div className="text-center relative">
          <div className="text-8xl md:text-[160px] font-bold text-gradient leading-none mb-4" style={{ fontFamily: "var(--font-display)" }}>404</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Halaman Tidak Ditemukan</h1>
          <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--color-muted-foreground)" }}>Maaf, halaman yang kamu cari tidak ada atau telah dipindahkan.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary"><Home className="w-4 h-4" /> Kembali ke Beranda</Link>
            <Link href="/contact" className="btn-ghost">Hubungi Kami <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Open_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "GoSocial — More Than Digital Marketing Agency",
  description: "GoSocial mendampingi bisnis dan organisasi dalam branding, marketing, dan aktivasi teknologi digital. Dipercaya 1.000+ klien sejak 2020.",
  openGraph: {
    title: "GoSocial — More Than Digital Marketing Agency",
    description: "GoSocial mendampingi bisnis dan organisasi dalam branding, marketing, dan aktivasi teknologi digital.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="light">
      <body className={`${spaceGrotesk.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

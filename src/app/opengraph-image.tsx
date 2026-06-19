import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nuswa Lab — Your Story, Our Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0f4f0 0%, #e8f0e8 50%, #f5f0ff 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Background decorative circles */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(92,122,90,0.08)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(120,80,200,0.06)", display: "flex" }} />

        {/* Logo icon - arch shape */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
          <svg width="64" height="80" viewBox="0 0 40 56" fill="none">
            <path d="M6 52 L6 20 Q6 2 20 2 Q34 2 34 20 L34 52" stroke="#5C7A5A" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <path d="M13 52 L13 21 Q13 10 20 10 Q27 10 27 21 L27 52" stroke="#5C7A5A" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "52px", fontWeight: "700", color: "#4A6A48", letterSpacing: "4px" }}>NUSWA LAB</span>
            <span style={{ fontSize: "18px", color: "#7A9A78", letterSpacing: "3px", marginTop: "4px" }}>Your Story, Our Strategy</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "120px", height: "3px", background: "linear-gradient(90deg, #5C7A5A, #9B7FD4)", borderRadius: "2px", marginBottom: "32px", display: "flex" }} />

        {/* Tagline */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Digital Marketing", "SEO & AEO", "AI Automation", "Branding"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#5C7A5A", display: "flex" }} />
              <span style={{ fontSize: "16px", color: "#5C7A5A", fontWeight: "600" }}>{item}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: "32px", right: "48px", fontSize: "16px", color: "#9AAA98", letterSpacing: "1px", display: "flex" }}>
          nuswalab.com
        </div>
      </div>
    ),
    { ...size }
  );
}

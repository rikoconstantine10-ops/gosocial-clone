"use client";
import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Users, BarChart2, DollarSign, ArrowRight } from "lucide-react";

const CURRENCIES: { label: string; code: string; symbol: string; rate: number }[] = [
  { label: "USD — US Dollar", code: "USD", symbol: "$", rate: 1 },
  { label: "IDR — Indonesian Rupiah", code: "IDR", symbol: "Rp", rate: 16400 },
  { label: "SGD — Singapore Dollar", code: "SGD", symbol: "S$", rate: 1.35 },
  { label: "MYR — Malaysian Ringgit", code: "MYR", symbol: "RM", rate: 4.75 },
  { label: "AUD — Australian Dollar", code: "AUD", symbol: "A$", rate: 1.55 },
  { label: "GBP — British Pound", code: "GBP", symbol: "£", rate: 0.79 },
  { label: "EUR — Euro", code: "EUR", symbol: "€", rate: 0.93 },
  { label: "SAR — Saudi Riyal", code: "SAR", symbol: "SAR", rate: 3.75 },
  { label: "AED — UAE Dirham", code: "AED", symbol: "AED", rate: 3.67 },
  { label: "QAR — Qatari Riyal", code: "QAR", symbol: "QAR", rate: 3.64 },
  { label: "JPY — Japanese Yen", code: "JPY", symbol: "¥", rate: 157 },
];

const INDUSTRY_ROAS: Record<string, number> = {
  "F&B / Restaurant": 3.8,
  "E-commerce / Retail": 4.2,
  "Travel & Tourism": 3.5,
  "Professional Services": 3.2,
  Healthcare: 3.6,
  Education: 3.4,
  "Real Estate": 3.0,
  Technology: 4.0,
  Other: 3.5,
};

const TRAFFIC_MULTIPLIER: Record<string, number> = {
  Indonesia: 2.8,
  Malaysia: 3.2,
  Singapore: 3.0,
  Australia: 3.5,
  Japan: 4.0,
  "South Korea": 3.8,
  "Saudi Arabia": 4.2,
  UAE: 4.0,
  Qatar: 4.5,
  Kuwait: 4.3,
  "United Kingdom": 3.3,
  Netherlands: 3.4,
  USA: 2.9,
  Philippines: 3.6,
  Other: 3.5,
};

function formatNumber(n: number, symbol: string, rate: number): string {
  const converted = n * rate;
  if (converted >= 1_000_000) return `${symbol}${(converted / 1_000_000).toFixed(1)}M`;
  if (converted >= 1_000) return `${symbol}${Math.round(converted / 1000)}K`;
  return `${symbol}${Math.round(converted).toLocaleString()}`;
}

export function ROICalculatorForm() {
  const [budget, setBudget] = useState(2000);
  const [industry, setIndustry] = useState("F&B / Restaurant");
  const [market, setMarket] = useState("Malaysia");
  const [currency, setCurrency] = useState("USD");
  const [calculated, setCalculated] = useState(false);

  const cur = CURRENCIES.find((c) => c.code === currency) ?? CURRENCIES[0];
  const roas = INDUSTRY_ROAS[industry] ?? 3.5;
  const trafficMultiplier = TRAFFIC_MULTIPLIER[market] ?? 3.5;

  const monthlyRevenue = budget * roas;
  const monthlyLeads = Math.round(budget / 45);
  const trafficGrowth = Math.round((trafficMultiplier - 1) * 100 * 1.5);
  const roiPct = Math.round(((monthlyRevenue - budget) / budget) * 100);
  const annualRevenue = monthlyRevenue * 12;

  return (
    <section className="py-10 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Calculator card */}
          <div className="glass rounded-3xl p-8 lg:p-12 mb-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
              Enter Your Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Budget slider */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  Monthly Marketing Budget
                </label>
                <div className="flex items-center gap-4 mb-2">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="glass border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm font-semibold min-w-[80px] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  <div className="flex-1 text-right">
                    <span className="text-3xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                      {formatNumber(budget, cur.symbol, cur.rate)}
                    </span>
                    <span className="text-sm text-[var(--color-muted-foreground)] ml-1">/mo</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={100}
                  value={budget}
                  onChange={(e) => { setBudget(Number(e.target.value)); setCalculated(false); }}
                  className="w-full h-2 rounded-full cursor-pointer accent-[var(--color-primary)]"
                  style={{ background: `linear-gradient(to right, var(--color-primary) ${((budget - 500) / 9500) * 100}%, var(--color-border) ${((budget - 500) / 9500) * 100}%)` }}
                />
                <div className="flex justify-between text-xs text-[var(--color-muted-foreground)] mt-1">
                  <span>{formatNumber(500, cur.symbol, cur.rate)}</span>
                  <span>{formatNumber(10000, cur.symbol, cur.rate)}</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold mb-2">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => { setIndustry(e.target.value); setCalculated(false); }}
                  className="w-full glass border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                >
                  {Object.keys(INDUSTRY_ROAS).map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Target market */}
              <div>
                <label className="block text-sm font-semibold mb-2">Target Market</label>
                <select
                  value={market}
                  onChange={(e) => { setMarket(e.target.value); setCalculated(false); }}
                  className="w-full glass border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                >
                  {Object.keys(TRAFFIC_MULTIPLIER).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => setCalculated(true)}
              className="btn-primary w-full text-base py-4 inline-flex items-center justify-center gap-2"
            >
              Calculate My ROI <TrendingUp className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          {calculated && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <h3 className="text-xl font-bold text-center" style={{ fontFamily: "var(--font-display)" }}>
                Your Estimated Results
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: DollarSign, label: "Monthly Revenue", value: formatNumber(monthlyRevenue, cur.symbol, cur.rate), sub: "generated from ads + SEO" },
                  { icon: Users, label: "Monthly Leads", value: `${monthlyLeads}+`, sub: "estimated new inquiries" },
                  { icon: BarChart2, label: "Traffic Growth", value: `+${trafficGrowth}%`, sub: "in 6 months (SEO)" },
                  { icon: TrendingUp, label: "ROI", value: `${roiPct}%`, sub: "return on investment" },
                ].map((r) => (
                  <div key={r.label} className="glass rounded-2xl p-5 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                    <r.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient mb-0.5" style={{ fontFamily: "var(--font-display)" }}>{r.value}</div>
                    <div className="text-xs font-semibold mb-0.5">{r.label}</div>
                    <div className="text-xs text-[var(--color-muted-foreground)]">{r.sub}</div>
                  </div>
                ))}
              </div>

              {/* Annual projection */}
              <div className="glass rounded-2xl p-6 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-1">Annual Revenue Projection</p>
                <p className="text-4xl font-bold text-gradient mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {formatNumber(annualRevenue, cur.symbol, cur.rate)}
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)] max-w-md mx-auto">
                  These are estimates based on average results across 200+ Nuswa Lab clients. Actual results vary by market, competition, and execution quality.
                </p>
              </div>

              <div className="text-center">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a Personalized Projection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

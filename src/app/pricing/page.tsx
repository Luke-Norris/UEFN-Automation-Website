"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start generating Verse scripts and explore the platform. No credit card required.",
    cta: "Get Started",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    annualPrice: "$24/mo billed annually",
    description: "Full map generation, device recipes, widget editor, 3D preview. The complete AI studio.",
    cta: "Start Free Trial",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "TBD",
    period: "",
    description: "Unlimited generation for studios and professional teams. Coming soon.",
    cta: "Get Notified",
    ctaHref: "/#waitlist",
    highlighted: false,
    comingSoon: true,
  },
];

type FeatureAvailability = boolean | string;

interface FeatureRow {
  name: string;
  free: FeatureAvailability;
  pro: FeatureAvailability;
  enterprise: FeatureAvailability;
}

const featureMatrix: FeatureRow[] = [
  { name: "Verse script generation", free: "50/mo", pro: "500/mo", enterprise: "Unlimited" },
  { name: "AI operations", free: false, pro: "500/mo", enterprise: "Unlimited" },
  { name: "Map generation", free: false, pro: true, enterprise: true },
  { name: "Device recipes & wiring", free: false, pro: true, enterprise: true },
  { name: "Widget editor & .uasset output", free: false, pro: true, enterprise: true },
  { name: "3D scene preview", free: false, pro: true, enterprise: true },
  { name: "Device inspection", free: "Basic", pro: "Full", enterprise: "Full" },
  { name: "Project safety (copy-on-read)", free: true, pro: true, enterprise: true },
  { name: "Projects", free: "1", pro: "5", enterprise: "Unlimited" },
  { name: "Desktop app", free: true, pro: true, enterprise: true },
  { name: "MCP server (Claude Code)", free: true, pro: true, enterprise: true },
  { name: "Architecture review", free: false, pro: false, enterprise: true },
  { name: "Priority processing", free: false, pro: false, enterprise: true },
  { name: "Team seats", free: false, pro: false, enterprise: "10 included" },
  { name: "API access", free: false, pro: false, enterprise: true },
  { name: "Support", free: "Community", pro: "Email", enterprise: "Dedicated" },
];

function CellValue({ value }: { value: FeatureAvailability }) {
  if (value === true)
    return <Check className="mx-auto h-5 w-5 text-accent" />;
  if (value === false)
    return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  return <span className="text-sm">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent{" "}
            <span className="text-accent">pricing</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade when you need more power. All paid plans
            include a 7-day free trial.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl border p-8 ${
                tier.highlighted
                  ? "border-accent bg-card shadow-lg shadow-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </div>
              )}

              <h2 className="text-lg font-semibold">{tier.name}</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className="text-muted-foreground">{tier.period}</span>
                )}
              </div>
              {tier.annualPrice && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.annualPrice}
                </p>
              )}
              <p className="mt-3 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-8">
                <Link href={tier.ctaHref}>
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className="w-full gap-2"
                    disabled={tier.comingSoon}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold">
            Compare features
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="pb-4 text-center text-sm font-medium">Free</th>
                  <th className="pb-4 text-center text-sm font-medium text-accent">
                    Pro
                  </th>
                  <th className="pb-4 text-center text-sm font-medium">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-border/50 last:border-0"
                  >
                    <td className="py-4 text-sm">{row.name}</td>
                    <td className="py-4 text-center">
                      <CellValue value={row.free} />
                    </td>
                    <td className="py-4 text-center">
                      <CellValue value={row.pro} />
                    </td>
                    <td className="py-4 text-center">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Have questions?{" "}
            <Link href="/#faq" className="text-accent hover:underline">
              Check our FAQ
            </Link>{" "}
            or{" "}
            <Link href="/#waitlist" className="text-accent hover:underline">
              join the waitlist
            </Link>{" "}
            to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}

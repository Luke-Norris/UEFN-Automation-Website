"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with UEFN AI assistance",
    features: [
      "50 Verse script generations/mo",
      "Basic syntax validation",
      "1 project",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Full power for serious creators",
    features: [
      "500 AI operations/mo",
      "All core features",
      "Device config validation",
      "Project-aware QA",
      "Up to 5 projects",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Coming",
    period: "soon",
    description: "For studios and professional teams",
    features: [
      "Unlimited AI operations",
      "Architecture review",
      "Team workspaces (10 seats)",
      "Priority processing",
      "Dedicated support",
      "API access",
    ],
    cta: "Get Notified",
    highlighted: false,
  },
];

export function PricingPreview() {
  return (
    <section className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent{" "}
            <span className="text-accent">pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href={tier.name === "Enterprise" ? "#waitlist" : "/signup"}>
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className="w-full gap-2"
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All paid plans include a 7-day free trial. Cancel anytime.
          Founding members get 30% off for life.
        </p>
      </div>
    </section>
  );
}

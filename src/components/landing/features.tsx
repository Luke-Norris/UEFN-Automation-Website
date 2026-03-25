"use client";

import { motion } from "framer-motion";
import {
  Map,
  Code2,
  LayoutGrid,
  Puzzle,
  Box,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Map Generation",
    description:
      "Describe a game mode and get a complete map — devices placed, wiring connected, biome-aware layouts. Desert, forest, urban, snow — the AI builds it.",
    tier: "Pro",
  },
  {
    icon: Code2,
    title: "Verse Code Generation",
    description:
      "15+ battle-tested templates plus custom AI-written Verse for any game mechanic. Scoring, rounds, abilities, UI bindings — production-ready code.",
    tier: "Free & Up",
  },
  {
    icon: LayoutGrid,
    title: "Widget Blueprints",
    description:
      "Create UMG widgets — HUDs, scoreboards, menus, notifications — with a visual editor that outputs real .uasset files ready for UEFN.",
    tier: "Pro",
  },
  {
    icon: Puzzle,
    title: "Device Recipes",
    description:
      "Pre-built multi-device patterns: Capture Points, Item Shops, Spawn Areas, Elimination Zones. Deploy complex setups with one click, fully wired.",
    tier: "Pro",
  },
  {
    icon: Box,
    title: "3D Scene Preview",
    description:
      "See your generated map in 3D before opening UEFN. Verify device positions, check spatial relationships, and iterate without leaving WellVersed.",
    tier: "Pro",
  },
  {
    icon: ShieldCheck,
    title: "Project Safety",
    description:
      "Copy-on-read file access, staged writes, automatic backups. Your project is always protected — WellVersed never modifies files without review.",
    tier: "All Plans",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to{" "}
            <span className="text-accent">playable map</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            WellVersed generates every layer of your UEFN project — devices,
            Verse code, widgets, and wiring — from a single description.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {feature.tier}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

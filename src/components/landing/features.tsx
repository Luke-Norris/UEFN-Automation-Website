"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Settings2,
  LayoutGrid,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Verse Script Generation",
    description:
      "Generate, refactor, and debug Verse scripts with full language-aware context. Not generic code — scripts that understand UEFN patterns.",
    tier: "Free & Up",
  },
  {
    icon: Settings2,
    title: "Device Config Validation",
    description:
      "Analyze your in-level device setups, catch misconfigurations before they break your island, and get actionable fix suggestions.",
    tier: "Pro",
  },
  {
    icon: LayoutGrid,
    title: "Procedural Level Assist",
    description:
      "AI-assisted procedural generation of level segments, layouts, and object populations. Build faster, iterate more.",
    tier: "Pro",
  },
  {
    icon: ShieldCheck,
    title: "Project-Aware QA",
    description:
      "Automated quality checks across your entire project — logic errors, broken references, performance flags. Like a QA team on demand.",
    tier: "Pro",
  },
  {
    icon: Zap,
    title: "Priority Processing",
    description:
      "Faster response times and higher usage limits for when deadlines matter and you need results now.",
    tier: "Pro",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Shared workspaces, team member seats, and project history. Built for studios working together on complex islands.",
    tier: "Enterprise",
    comingSoon: true,
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
            Everything you need to ship{" "}
            <span className="text-accent">faster</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            WellVersed deeply understands your project — not just your code.
            It reads your files, your configs, your structure.
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
                  {feature.comingSoon && " — Soon"}
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

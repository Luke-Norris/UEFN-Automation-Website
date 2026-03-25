"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Eye } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe Your Game",
    description:
      "Tell WellVersed what you want to build — game mode, mechanics, rules, biome. Natural language in the desktop app or Claude Code terminal.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Generates Everything",
    description:
      "Devices placed with biome-aware layouts, Verse code written for your game logic, widgets designed for your HUD, wiring connected between devices.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Preview & Refine",
    description:
      "See your map in 3D, tweak device properties in the visual editor, adjust Verse code, then export to UEFN. Iterate until it plays exactly right.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From concept to{" "}
            <span className="text-accent">creation</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps from game idea to playable map. No manual device
            placement, no boilerplate Verse code, no widget XML.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-border to-transparent md:block" />
              )}

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
                <step.icon className="h-7 w-7 text-accent" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {i + 1}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Download, FolderOpen, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install the Companion App",
    description:
      "Download WellVersed for Windows. A lightweight app that securely connects your local UEFN project to our cloud platform.",
  },
  {
    icon: FolderOpen,
    step: "02",
    title: "Connect Your Project",
    description:
      "Point WellVersed at your UEFN project directory. It indexes your files, Verse scripts, and device configurations instantly.",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Start Building",
    description:
      "Open your dashboard and start working. Generate scripts, validate configs, run QA — all with full context of your actual project.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in{" "}
            <span className="text-accent">minutes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No complex setup. No SDK integration. Just install, connect, and go.
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

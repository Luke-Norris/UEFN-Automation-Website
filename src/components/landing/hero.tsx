"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-4 py-1.5 text-sm text-accent"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Now accepting early access signups</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Your UEFN development team,{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              on demand
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            WellVersed is a project-aware AI platform purpose-built for UEFN.
            Generate Verse scripts, validate device configs, run automated QA,
            and ship better Fortnite experiences — faster.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#waitlist">
              <Button size="lg" className="gap-2">
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#features">
              <Button variant="outline" size="lg">
                See What It Does
              </Button>
            </a>
          </div>

          {/* Social proof placeholder */}
          <p className="mt-12 text-sm text-muted-foreground">
            Trusted by UEFN creators building the next generation of Fortnite experiences
          </p>
        </motion.div>

        {/* Terminal/code preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-success/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                WellVersed — Project Analysis
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-muted-foreground">
                <span className="text-accent">$</span> Analyzing project:{" "}
                <span className="text-foreground">MyIsland_v3</span>
              </div>
              <div className="mt-3 text-muted-foreground">
                <span className="text-success">&#10003;</span> Scanned 47 Verse files, 182 device configurations
              </div>
              <div className="mt-1 text-muted-foreground">
                <span className="text-success">&#10003;</span> Found 3 misconfigured trigger devices
              </div>
              <div className="mt-1 text-muted-foreground">
                <span className="text-success">&#10003;</span> Detected 2 Verse scripts with unused event bindings
              </div>
              <div className="mt-1 text-muted-foreground">
                <span className="text-success">&#10003;</span> Generated optimized player_manager.verse (127 lines)
              </div>
              <div className="mt-3 text-accent">
                Ready. 4 suggestions available →
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

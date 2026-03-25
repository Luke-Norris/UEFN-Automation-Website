"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What can WellVersed generate?",
    answer:
      "Complete UEFN maps with device placement, Verse code for game logic, UMG widget blueprints for UI, and device wiring. Describe a game mode — like a 4-team capture point match with an item shop — and WellVersed generates the devices, positions them with biome-aware layouts, writes the scoring and round logic in Verse, creates the scoreboard widget, and wires everything together.",
  },
  {
    question: "Do I need UEFN experience?",
    answer:
      "WellVersed helps both experienced creators and newcomers, but it's currently optimized for people who already know UEFN. Experienced creators use it to 10x their workflow — skipping hours of manual device placement and boilerplate code. If you're new to UEFN, WellVersed can still generate working maps, but you'll get the most out of it once you understand the fundamentals.",
  },
  {
    question: "Is my project safe?",
    answer:
      "Safety is built into every layer. All file reads use copy-on-read — WellVersed never locks your source files. Modifications go through staged writes, so nothing changes until you review and approve. Every direct write creates an automatic backup. When UEFN is running, all writes are staged to a separate directory. Your project is always protected.",
  },
  {
    question: "How does the AI understand UEFN?",
    answer:
      "WellVersed's AI is trained on 92+ real UEFN projects, Epic's complete device schema library, and the Book of Verse language specification. It parses .uasset binary files directly, understands device property structures, knows which devices wire together, and generates valid Verse that compiles in UEFN.",
  },
  {
    question: "What's the difference between the desktop app and the MCP server?",
    answer:
      "The WellVersed desktop app (built with Tauri) gives you a visual studio — 3D scene preview, widget editor, device inspector, wiring graph. The MCP server connects to Claude Code for AI-driven generation via natural language in your terminal. Both share the same generation engine. Use the app for visual editing and refinement, and the MCP server for rapid AI-driven creation.",
  },
  {
    question: "Can it generate any game mode?",
    answer:
      "WellVersed currently supports common game modes — battle royale, elimination, capture the point, tycoon, deathrun, and more. For custom mechanics, the Verse code generation can write custom logic for almost any game system. Device recipes cover the most common multi-device patterns, and new recipes are being added regularly.",
  },
  {
    question: "What about 3D assets and meshes?",
    answer:
      "WellVersed positions devices and actors in 3D space and provides a preview with basic mesh representations. It works with Epic's built-in device library — the thousands of props, prefabs, and gameplay devices that ship with UEFN. Custom decorative asset creation (meshes, textures, materials) is an area we're actively improving.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium sm:text-base">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked{" "}
            <span className="text-accent">questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about WellVersed.
          </p>
        </div>

        <div className="mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

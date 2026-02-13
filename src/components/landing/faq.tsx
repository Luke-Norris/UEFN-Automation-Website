"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What exactly does WellVersed do?",
    answer:
      "WellVersed is a project-aware AI platform built specifically for UEFN development. It connects to your local project files through a lightweight companion app, then provides intelligent assistance — from generating and debugging Verse scripts to validating device configurations and running automated quality checks across your entire project.",
  },
  {
    question: "How is this different from just using ChatGPT or Copilot?",
    answer:
      "General AI tools don't understand UEFN projects. They can't read your .uasset files, don't know your device configurations, and have no context about your project structure. WellVersed's proprietary analysis engine deeply parses your actual project — it understands the relationships between your Verse scripts, devices, and level layout. The results are dramatically more accurate and useful.",
  },
  {
    question: "Is my project data safe?",
    answer:
      "Yes. The companion app runs locally on your machine and only sends project data to our servers when you actively request an analysis. We never store your full project files — only the metadata needed to provide results. All communication is encrypted end-to-end.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "The WellVersed companion app requires Windows 10 or later. It's extremely lightweight (~5MB) and runs in your system tray. You'll also need an active internet connection for the AI analysis features.",
  },
  {
    question: "Can I use WellVersed with my existing UEFN workflow?",
    answer:
      "Absolutely. WellVersed doesn't modify your project files or interfere with UEFN. It reads your project directory in real-time and provides suggestions through the web dashboard. You copy what you need, when you need it.",
  },
  {
    question: "What happens when I hit my usage limit?",
    answer:
      "On the Free plan, you'll see a prompt to upgrade once you've used your 50 monthly generations. On Pro, the 500 operation limit resets monthly. You can always upgrade mid-cycle, and unused operations don't roll over.",
  },
  {
    question: "How do I get early access?",
    answer:
      "Join the waitlist below. We're rolling out access in waves — starting with experienced UEFN creators to ensure quality. Founding members get a permanent 30% discount on Pro and an exclusive Founder badge.",
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

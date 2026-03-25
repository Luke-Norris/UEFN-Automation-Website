"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Connect to API endpoint for waitlist signup
    // POST /api/waitlist { email, experience }
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="waitlist" className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join the{" "}
            <span className="text-accent">waitlist</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be among the first to generate complete UEFN maps from descriptions.
            Founding members get a permanent 30% discount and early access to
            new generation capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-success/30 bg-success/5 p-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-success" />
              <h3 className="text-xl font-semibold">You&apos;re on the list!</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;ll send you an invite as soon as a spot opens up.
                Join our Discord in the meantime to connect with other creators.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-medium"
                >
                  UEFN experience level
                </label>
                <select
                  id="experience"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="" disabled>
                    Select your experience level
                  </option>
                  <option value="beginner">Beginner — just getting started</option>
                  <option value="intermediate">
                    Intermediate — published a few islands
                  </option>
                  <option value="advanced">
                    Advanced — active creator with live islands
                  </option>
                  <option value="professional">
                    Professional — studio or full-time creator
                  </option>
                </select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. We&apos;ll only email you when your invite is ready.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

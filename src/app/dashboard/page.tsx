"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Download,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickActions = [
  {
    icon: Code2,
    title: "Generate Verse Script",
    description: "Create a new Verse script with AI assistance",
    href: "#",
  },
  {
    icon: ShieldCheck,
    title: "Run QA Check",
    description: "Scan your project for issues and misconfigurations",
    href: "#",
  },
  {
    icon: Zap,
    title: "Validate Devices",
    description: "Check all device configurations in your level",
    href: "#",
  },
];

// TODO: Replace with real project data
const recentProjects = [
  {
    id: "1",
    name: "MyIsland_v3",
    lastActive: "2 hours ago",
    files: 47,
    devices: 182,
  },
  {
    id: "2",
    name: "BattleArena_Prototype",
    lastActive: "Yesterday",
    files: 23,
    devices: 91,
  },
];

export default function DashboardPage() {
  // TODO: Replace with real companion status
  const companionConnected = false;

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Welcome back. Here&apos;s an overview of your projects.
      </p>

      {/* Companion App CTA (if not connected) */}
      {!companionConnected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center gap-4 rounded-xl border border-accent/30 bg-accent-muted p-4"
        >
          <WifiOff className="h-8 w-8 shrink-0 text-accent" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Connect your UEFN project</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Download the WellVersed companion app to connect your local project
              and unlock full project-aware AI features.
            </p>
          </div>
          <Link href="/download">
            <Button size="sm" className="shrink-0 gap-2">
              <Download className="h-4 w-4" />
              Download App
            </Button>
          </Link>
        </motion.div>
      )}

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold text-muted-foreground">
          Quick Actions
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                <action.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-3 text-sm font-semibold">{action.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-muted-foreground">
            Recent Projects
          </h2>
          <Link
            href="/dashboard/project"
            className="flex items-center gap-1 text-xs text-accent hover:underline"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-3 space-y-3">
          {recentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/dashboard/project/${project.id}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <FolderOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{project.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {project.files} files, {project.devices} devices
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {project.lastActive}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">Operations Used</p>
          <p className="mt-1 text-2xl font-bold">12 / 50</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[24%] rounded-full bg-accent" />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">Scripts Generated</p>
          <p className="mt-1 text-2xl font-bold">8</p>
          <p className="mt-1 text-xs text-muted-foreground">This month</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">Issues Found</p>
          <p className="mt-1 text-2xl font-bold">23</p>
          <p className="mt-1 text-xs text-muted-foreground">3 critical</p>
        </div>
      </div>
    </div>
  );
}

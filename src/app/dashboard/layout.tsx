"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  Settings,
  Wifi,
  WifiOff,
  BarChart3,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/project", label: "Projects", icon: FolderOpen },
  { href: "/dashboard/usage", label: "Usage", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // TODO: Replace with real companion app connection status
  const companionConnected = false;

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-muted/30 md:block">
        <div className="flex h-full flex-col px-4 py-6">
          {/* Companion Status */}
          <div className="mb-6 rounded-lg border border-border bg-card p-3">
            <div className="flex items-center gap-2">
              {companionConnected ? (
                <Wifi className="h-4 w-4 text-success" />
              ) : (
                <WifiOff className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-xs font-medium">
                {companionConnected ? "Companion Connected" : "Companion Offline"}
              </span>
            </div>
            {!companionConnected && (
              <p className="mt-1.5 text-xs text-muted-foreground">
                Download the companion app to connect your UEFN project.
              </p>
            )}
          </div>

          {/* New Project Button */}
          <Button size="sm" className="mb-6 w-full gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/dashboard" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-accent/10 font-medium text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Plan Info */}
          <div className="mt-auto rounded-lg border border-border bg-card p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Free Plan</span>
              <Link
                href="/pricing"
                className="text-xs text-accent hover:underline"
              >
                Upgrade
              </Link>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>12 / 50 operations</span>
                <span>24%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[24%] rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
      </div>
    </div>
  );
}

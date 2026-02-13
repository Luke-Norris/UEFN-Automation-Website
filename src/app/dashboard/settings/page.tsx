"use client";

import { Button } from "@/components/ui/button";
import { Monitor, CreditCard, User, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your account, subscription, and preferences.
      </p>

      <div className="mt-8 space-y-8">
        {/* Profile */}
        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Profile</h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                defaultValue="Creator"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                defaultValue="creator@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button size="sm">Save Changes</Button>
          </div>
        </section>

        {/* Subscription */}
        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Subscription</h2>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-lg bg-muted/50 p-4">
            <div>
              <p className="font-medium">Free Plan</p>
              <p className="text-sm text-muted-foreground">
                50 operations per month
              </p>
            </div>
            <Button size="sm" variant="outline">
              Upgrade to Pro
            </Button>
          </div>
        </section>

        {/* Companion App */}
        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <Monitor className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Companion App</h2>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              No companion app connected. Download and install the WellVersed
              companion app to connect your local UEFN projects.
            </p>
            <Button size="sm" variant="outline" className="mt-3">
              Download Companion App
            </Button>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>

          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Email notifications for QA reports</span>
              <input type="checkbox" defaultChecked className="accent-accent" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Product updates and announcements</span>
              <input type="checkbox" defaultChecked className="accent-accent" />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}

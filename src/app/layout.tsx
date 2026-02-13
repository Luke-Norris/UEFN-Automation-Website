import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "WellVersed — AI-Powered UEFN Development Platform",
  description:
    "Your UEFN development team, on demand. Generate Verse scripts, validate device configs, run QA checks, and build faster with project-aware AI.",
  keywords: ["UEFN", "Fortnite", "Verse", "AI", "game development", "level design"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

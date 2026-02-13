import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Documentation" },
    { href: "/download", label: "Download" },
  ],
  Company: [
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Contact" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="font-mono text-sm font-bold text-accent-foreground">W</span>
              </div>
              <span className="font-mono text-lg font-bold tracking-tight">
                Well<span className="text-accent">Versed</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Your UEFN development team, on demand.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} WellVersed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

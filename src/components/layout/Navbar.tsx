"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50",
        "border-b border-surface-border bg-surface/70 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        <a
          href="/"
          className="font-mono text-sm font-semibold tracking-widest text-text-primary"
        >
          <span className="text-cobalt">//</span> INCKPEK
          <span className="text-text-muted"> SEC</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={cn(
            "hidden rounded-md border border-cobalt/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cobalt transition-all duration-300 md:inline-flex",
            "hover:border-cobalt/60 hover:shadow-glow-cobalt",
          )}
        >
          Solicitar Auditoría
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Menú"
        >
          <span className="block h-px w-5 bg-text-secondary" />
          <span className="block h-px w-5 bg-text-secondary" />
          <span className="block h-px w-5 bg-text-secondary" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-surface-border bg-surface px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex self-start rounded-md border border-cobalt/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cobalt"
            >
              Solicitar Auditoría
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

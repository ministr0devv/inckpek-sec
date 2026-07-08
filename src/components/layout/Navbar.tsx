"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-nav backdrop-blur-lg"
          : "bg-white/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 lg:px-6">
        <Logo compact />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-text-secondary transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={cn(
            "hidden rounded-clean bg-brand-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-text-inverse transition-all duration-300 md:inline-flex",
            "hover:bg-brand-primary-hover",
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
        <div className="border-t border-border-clean bg-white px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex self-start rounded-clean bg-brand-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-text-inverse"
            >
              Solicitar Auditoría
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

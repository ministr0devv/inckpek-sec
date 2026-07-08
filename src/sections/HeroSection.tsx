"use client";

import { cn } from "@/lib/utils";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { HeroNetwork } from "@/components/three/HeroNetwork";

function Badge() {
  return (
    <ScrollAnimate delay={0}>
      <div className="inline-flex items-center gap-2 rounded-pill border border-border-clean bg-bg-muted/80 px-4 py-1.5">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider text-text-secondary">
          Auditoría disponible — respuesta en &lt;24h
        </span>
      </div>
    </ScrollAnimate>
  );
}

function HeroTitle() {
  return (
    <ScrollAnimate delay={0.12} distance={40}>
      <h1 className="max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-text-main">
        Blindaje de{" "}
        <span className="text-gradient">código fuente</span>
        <br />
        corporativo, antes de la brecha.
      </h1>
    </ScrollAnimate>
  );
}

function HeroSubtext() {
  return (
    <ScrollAnimate delay={0.2} distance={32}>
      <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        Auditoría ofensiva combinada con análisis SAST/DAST y remediación
        directa sobre tu repositorio. Entregamos parches de código listos
        para producción en menos de 24 horas para incidentes críticos.
      </p>
    </ScrollAnimate>
  );
}

function HeroActions() {
  return (
    <ScrollAnimate delay={0.3} distance={32}>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#contacto"
          className={cn(
            "inline-flex items-center gap-2 rounded-clean bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-text-inverse transition-all duration-300",
            "hover:bg-brand-primary-hover",
          )}
        >
          Agendar Consultoría Técnica
        </a>
        <a
          href="#metodologia"
          className={cn(
            "inline-flex items-center gap-2 rounded-clean border border-border-clean bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-text-secondary transition-all duration-300",
            "hover:border-text-secondary hover:text-text-main",
          )}
        >
          Ver Metodología
        </a>
      </div>
    </ScrollAnimate>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-bg-surface to-bg-main px-4 pt-16">
      <HeroNetwork />

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <Badge />
        <div className="mt-8 space-y-6">
          <HeroTitle />
          <HeroSubtext />
        </div>
        <div className="mt-10">
          <HeroActions />
        </div>
      </div>
    </section>
  );
}

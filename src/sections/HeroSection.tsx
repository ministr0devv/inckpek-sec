"use client";

import { cn } from "@/lib/utils";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

function Badge() {
  return (
    <ScrollAnimate delay={0}>
      <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card/80 px-4 py-1.5">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider text-text-secondary">
          Disponibilidad inmediata para auditorías críticas
        </span>
      </div>
    </ScrollAnimate>
  );
}

function HeroTitle() {
  return (
    <ScrollAnimate delay={0.12} distance={40}>
      <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <span className="text-text-primary">
          Garantizamos la integridad de su c&oacute;digo fuente
        </span>{" "}
        <span className="text-cobalt">antes de la brecha inform&aacute;tica.</span>
      </h1>
    </ScrollAnimate>
  );
}

function HeroSubtext() {
  return (
    <ScrollAnimate delay={0.2} distance={32}>
      <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        Auditor&iacute;as de seguridad ofensiva combinadas con an&aacute;lisis
        est&aacute;tico SAST y din&aacute;mico DAST. Entregamos parches de
        c&oacute;digo listos para producci&oacute;n en menos de 24h para
        incidentes cr&iacute;ticos.
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
            "inline-flex items-center gap-2 rounded-md bg-cobalt px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300",
            "hover:bg-cobalt-500 hover:shadow-glow-cobalt",
          )}
        >
          Agendar Consultor&iacute;a T&eacute;cnica
        </a>
        <a
          href="#metodologia"
          className={cn(
            "inline-flex items-center gap-2 rounded-md border border-surface-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-text-secondary transition-all duration-300",
            "hover:border-text-secondary hover:text-text-primary",
          )}
        >
          Ver Metodolog&iacute;a
        </a>
      </div>
    </ScrollAnimate>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pt-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% -15%, rgba(37, 99, 235, 0.05), transparent)",
            "radial-gradient(ellipse 60% 40% at 50% 120%, rgba(37, 99, 235, 0.03), transparent)",
          ].join(", "),
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(37, 99, 235, 1) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37, 99, 235, 1) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "64px 64px",
        }}
      />

      <div className="flex max-w-5xl flex-col items-center text-center">
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

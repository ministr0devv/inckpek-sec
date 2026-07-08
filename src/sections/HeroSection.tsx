import { cn } from "@/lib/utils";

const fadeUp = "animate-[fadeUp_0.8s_ease-out_both]";
const fadeUpD1 = "animate-[fadeUp_0.8s_ease-out_0.15s_both]";
const fadeUpD2 = "animate-[fadeUp_0.8s_ease-out_0.3s_both]";
const fadeUpD3 = "animate-[fadeUp_0.8s_ease-out_0.45s_both]";

function Badge() {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-elevated/80 px-4 py-1.5",
        fadeUp,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-success" />
      </span>
      <span className="text-[11px] font-medium uppercase tracking-wider text-text-secondary">
        Disponibilidad inmediata para auditorías críticas
      </span>
    </div>
  );
}

function HeroTitle() {
  return (
    <h1
      className={cn(
        "max-w-4xl text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        fadeUpD1,
      )}
    >
      <span className="bg-gradient-to-r from-white via-ink-50 to-ink-200 bg-clip-text text-transparent">
        Blindamos el código fuente de tu infraestructura
      </span>{" "}
      <span className="bg-gradient-to-r from-cian-300 via-cian to-cian-600 bg-clip-text text-transparent">
        antes de la brecha.
      </span>
    </h1>
  );
}

function HeroSubtext() {
  return (
    <p
      className={cn(
        "max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg",
        fadeUpD2,
      )}
    >
      Auditorías de seguridad híbridas y remediación DevSecOps de alto nivel.
      Combinamos el análisis ofensivo manual experto y la optimización
      inteligente para entregar parches de código listos para producción.
    </p>
  );
}

function HeroActions() {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", fadeUpD3)}>
      <a
        href="#contacto"
        className={cn(
          "inline-flex items-center gap-2 rounded-md bg-cian px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink-900 transition-all duration-300",
          "hover:bg-cian-400 hover:shadow-glow-cian",
        )}
      >
        Agendar Consultoría Técnica
      </a>
      <a
        href="#casos"
        className={cn(
          "inline-flex items-center gap-2 rounded-md border border-surface-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-text-secondary transition-all duration-300",
          "hover:border-text-secondary hover:text-text-primary",
        )}
      >
        Ver Casos de Éxito
      </a>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 180, 216, 0.06), transparent),
            radial-gradient(ellipse 60% 50% at 50% 110%, rgba(0, 180, 216, 0.03), transparent)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 216, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 1) 1px, transparent 1px)
          `,
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

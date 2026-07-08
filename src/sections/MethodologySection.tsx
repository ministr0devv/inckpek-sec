import { cn } from "@/lib/utils";

const phases = [
  {
    number: "01",
    title: "Reconocimiento Pasivo y OSINT",
    description:
      "Inspección perimetral, mapeo de subdominios y detección de vectores de exposición externa sin intrusión activa. Recopilamos toda la inteligencia disponible para trazar la superficie de ataque antes de cualquier prueba ofensiva.",
  },
  {
    number: "02",
    title: "Análisis Ofensivo y Explotación",
    description:
      "Pruebas manuales de lógica de negocio, OWASP Top 10 y simulación de adversarios reales sobre la infraestructura. Cada hallazgo se verifica de forma artesanal para descartar falsos positivos y medir el impacto real.",
  },
  {
    number: "03",
    title: "Remediación y Hardening de Código",
    description:
      "Inyección directa de parches de seguridad sobre el repositorio (Next.js, TypeScript, Supabase) para corregir la raíz del problema. No entregamos informes sin acción: escribimos el código que cierra la brecha.",
  },
  {
    number: "04",
    title: "Re-Testing y Reporte Ejecutivo",
    description:
      "Validación final de la mitigación, pruebas de regresión y emisión del informe técnico cifrado y firmado por inckpek. El ciclo se cierra solo cuando el vector de ataque está completamente eliminado.",
  },
];

function SectionHeader() {
  return (
    <div className="max-w-xl">
      <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cian">
        02 // PROCESO OPERATIVO
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
        Metodología de
        <br />
        Auditoría Rigurosa
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
        Enfoque dual de caja blanca y caja negra combinado con inteligencia
        artificial supervisada para maximizar la cobertura sin sacrificar la
        precisión del análisis manual.
      </p>
    </div>
  );
}

function PhaseStep({
  number,
  title,
  description,
  index,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group/phase flex flex-col gap-4 sm:flex-row sm:gap-8",
        "border-b border-surface-border pb-8 last:border-b-0 last:pb-0",
      )}
      style={{
        animation: `fadeUp 0.8s ease-out ${0.25 + index * 0.15}s both`,
      }}
    >
      <div className="flex shrink-0 items-start">
        <span className="font-mono text-5xl font-black leading-none tracking-tighter text-ink-500 transition-colors duration-300 sm:text-6xl lg:text-7xl group-hover/phase:text-cian/60">
          {number}
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:pt-2">
        <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
          {title}
        </h3>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

export function MethodologySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 lg:py-32">
      <SectionHeader />

      <div className="mt-16 space-y-8 lg:space-y-10">
        {phases.map((phase, index) => (
          <PhaseStep key={phase.number} {...phase} index={index} />
        ))}
      </div>
    </section>
  );
}

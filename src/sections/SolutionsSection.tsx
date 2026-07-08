import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Auditoría Ofensiva Avanzada",
    subtitle: "Pentesting",
    description:
      "Evaluación profunda de la postura de seguridad mediante análisis manual experto. Identificamos vectores de ataque reales antes de que un adversario los exploite.",
    tags: [
      "Pentesting Web & APIs",
      "Análisis de Lógica de Negocio",
      "OWASP Top 10",
      "Simulación de Adversarios",
    ],
  },
  {
    title: "Hardening & Remediación",
    subtitle: "de Código",
    description:
      "Corrección e inyección directa de parches sobre el código fuente para mitigar vulnerabilidades antes de que lleguen a producción.",
    tags: [
      "Next.js & TypeScript",
      "Arquitecturas Supabase",
      "Parches de Código Directos",
      "Revisión Estática (SAST)",
    ],
  },
  {
    title: "Consultoría DevSecOps",
    subtitle: "& IA",
    description:
      "Automatización y blindaje de flujos de despliegue continuo e integración segura de Inteligencia Artificial en los pipelines de desarrollo.",
    tags: [
      "Pipelines Seguros (CI/CD)",
      "Hardening de LLMs",
      "Automatización de Escaneos",
      "Cumplimiento Técnico",
    ],
  },
];

function SectionHeader() {
  return (
    <div className="max-w-xl">
      <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cian">
        01 // CAPACIDADES DE LÍNEA
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
        Soluciones de Seguridad de
        <br />
        Extremo a Extremo
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
        Cada servicio está diseñado para cerrar brechas específicas en tu ciclo
        de vida de desarrollo, desde la auditoría inicial hasta el hardening
        final.
      </p>
    </div>
  );
}

function SolutionCard({
  title,
  subtitle,
  description,
  tags,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  index: number;
}) {
  return (
    <div
      className={cn(
        "group/card flex flex-col gap-5 rounded-xl border border-surface-border bg-surface p-6 transition-all duration-500",
        "hover:border-cian/30 hover:bg-surface-card hover:shadow-glow-cian",
      )}
      style={{
        animation: `fadeUp 0.8s ease-out ${0.2 + index * 0.12}s both`,
      }}
    >
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <p className="font-mono text-xs font-medium tracking-wider text-cian">
          {subtitle}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-surface-border bg-surface-elevated/50 px-2.5 py-1 font-mono text-[11px] text-text-muted transition-colors duration-300 group-hover/card:border-cian/20 group-hover/card:text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SolutionsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 lg:py-32">
      <SectionHeader />

      <div className="mt-16 grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.title} {...solution} index={index} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { ScrollAnimate, StaggerGrid } from "@/components/ui/ScrollAnimate";

const solutions = [
  {
    title: "Ingeniería Inversa de Aplicaciones",
    subtitle: "Reverse Engineering",
    description:
      "Descompilación y análisis de binarios, ofuscación de lógica de negocio y detección de backdoors encubiertas en código propietario. Identificamos la amenaza antes de que el atacante complete su misión.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: [
      "Descompilación",
      "Análisis de Binarios",
      "Ofuscación",
      "Backdoors",
    ],
  },
  {
    title: "Pentesting de APIs Financieras",
    subtitle: "API Security",
    description:
      "Pruebas de penetración sobre APIs REST, GraphQL y WebSocket con lógica transaccional. Verificamos autorización horizontal, rate-limiting, inyección y exposición de datos sensibles.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    tags: ["REST & GraphQL", "WebSocket", "Auth Horizontal", "Rate-Limiting"],
  },
  {
    title: "Hardening de Infraestructura Cloud",
    subtitle: "Cloud Security",
    description:
      "Auditoría de configuración en AWS, Vercel y Supabase. Endurecimiento de buckets S3, funciones serverless, políticas IAM y reglas de firewall para eliminar toda superficie de ataque.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    tags: ["AWS IAM", "Supabase RLs", "Serverless", "Firewall Hardening"],
  },
  {
    title: "Auditoría DevSecOps Continua",
    subtitle: "Pipeline Security",
    description:
      "Integración de análisis SAST/DAST en pipelines CI/CD. Escaneo automatizado de dependencias, secrets expuestos y políticas de compliance técnico para blindar cada deploy.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    tags: ["SAST/DAST", "CI/CD", "Dependencias", "Compliance"],
  },
  {
    title: "Revisión de Código Fuente",
    subtitle: "Code Review",
    description:
      "Análisis manual línea por línea de repositorios Next.js, TypeScript y Supabase. Identificamos vulnerabilidades en autenticación, sesiones, sanitización y control de acceso.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    tags: ["Next.js", "TypeScript", "Autenticación", "Control de Acceso"],
  },
  {
    title: "Remediación con Parches Directos",
    subtitle: "Hotfix Deployment",
    description:
      "Inyección quirúrgica de parches de seguridad sobre tu repositorio. No entregamos informes sin acción: escribimos el código que cierra la brecha y lo dejamos listo para producción.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    tags: ["Parches Directos", "Pull Requests", "Zero-Day", "Producción"],
  },
];

function SectionHeader() {
  return (
    <ScrollAnimate>
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-brand-secondary">
          01 // CAPACIDADES DE LÍNEA
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-main sm:text-4xl lg:text-5xl">
          Soluciones de Seguridad de Extremo a Extremo
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
          Cada servicio está diseñado para cerrar brechas específicas en tu
          ciclo de vida de desarrollo, desde la auditoría inicial hasta el
          hardening final.
        </p>
      </div>
    </ScrollAnimate>
  );
}

function SolutionCard({
  title,
  subtitle,
  description,
  tags,
  image,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
}) {
  return (
    <ScrollAnimate delay={0.08 * index} distance={24}>
      <div
        className={cn(
          "group/card flex h-full flex-col overflow-hidden rounded-smooth border border-border-clean bg-white transition-all duration-300",
          "hover:shadow-elevated",
        )}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-bg-muted">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="text-lg font-semibold text-text-main">{title}</h3>
            <p className="mt-0.5 font-mono text-xs font-medium tracking-wider text-brand-secondary">
              {subtitle}
            </p>
          </div>

          <p className="flex-1 text-sm leading-relaxed text-text-muted">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border-clean bg-bg-muted/60 px-2.5 py-1 font-mono text-[11px] text-text-muted transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
}

export function SolutionsSection() {
  return (
    <section id="servicios" className="bg-bg-main py-24 lg:py-32">
      <div className="mx-auto max-w-container px-4">
        <SectionHeader />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.subtitle} {...solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

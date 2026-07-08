"use client";

import { cn } from "@/lib/utils";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const solutions = [
  {
    title: "Ingenier&iacute;a Inversa de Aplicaciones",
    subtitle: "Reverse Engineering",
    description:
      "Descompilaci&oacute;n y an&aacute;lisis de binarios, ofuscaci&oacute;n de l&oacute;gica de negocio y detecci&oacute;n de backdoors encubiertas en c&oacute;digo propietario. Ideamos el contraataque antes de que el atacante complete su misi&oacute;n.",
    tags: [
      "Descompilaci&oacute;n",
      "An&aacute;lisis de Binarios",
      "Ofuscaci&oacute;n",
      "Detecci&oacute;n de Backdoors",
    ],
  },
  {
    title: "Pentesting de APIs Financieras",
    subtitle: "API Security",
    description:
      "Pruebas de penetraci&oacute;n espec&iacute;ficas sobre APIs REST, GraphQL y WebSocket con l&oacute;gica transaccional. Verificamos autorizaci&oacute;n horizontal, rate-limiting, inyecci&oacute;n y exposici&oacute;n de datos sensibles.",
    tags: [
      "REST & GraphQL",
      "WebSocket",
      "Autorizaci&oacute;n Horizontal",
      "Rate-Limiting",
    ],
  },
  {
    title: "Hardening de Infraestructura Cloud",
    subtitle: "Cloud Security",
    description:
      "Auditor&iacute;a de configuraci&oacute;n en AWS, Vercel y Supabase. Endurecimiento de buckets S3, funciones serverless, pol&iacute;ticas IAM y reglas de firewall para eliminar superficies de ataque en entornos cloud-native.",
    tags: [
      "AWS IAM",
      "Supabase RLs",
      "Vercel WAF",
      "Serverless Hardening",
    ],
  },
  {
    title: "Auditor&iacute;a DevSecOps Continuo",
    subtitle: "Pipeline Security",
    description:
      "Integraci&oacute;n de an&aacute;lisis SAST/DAST en pipelines CI/CD. Escaneo automatizado de dependencias, secrets expuestos y pol&iacute;ticas de compliance t&eacute;cnico para prevenir la deriva de seguridad en cada deploy.",
    tags: [
      "SAST Automatizado",
      "DAST Continuo",
      "Escaneo de Dependencias",
      "Compliance T&eacute;cnico",
    ],
  },
  {
    title: "Revisi&oacute;n de C&oacute;digo Fuente",
    subtitle: "Code Review",
    description:
      "An&aacute;lisis manual l&iacute;nea por l&iacute;nea de repositorios Next.js, TypeScript y Supabase. Identificamos vulnerabilidades en l&oacute;gica de autenticaci&oacute;n, manejo de sesiones, sanitizaci&oacute;n de inputs y control de acceso.",
    tags: [
      "Next.js",
      "TypeScript",
      "Autenticaci&oacute;n",
      "Control de Acceso",
    ],
  },
  {
    title: "Remediaci&oacute;n con Parches Directos",
    subtitle: "Hotfix Deployment",
    description:
      "Inyecci&oacute;n quir&uacute;rgica de parches de seguridad sobre el repositorio del cliente. No entregamos informes sin acci&oacute;n: escribimos el c&oacute;digo que cierra la brecha y lo dejamos listo para producci&oacute;n.",
    tags: [
      "Parches Directos",
      "Pull Requests",
      "Zero-Day Mitigaci&oacute;n",
      "Listo para Producci&oacute;n",
    ],
  },
];

function SectionHeader() {
  return (
    <ScrollAnimate>
      <div className="max-w-xl">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cobalt">
          01 // CAPACIDADES DE L&Iacute;NEA
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
          Soluciones de Seguridad
          <br />
          de Extremo a Extremo
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
          Cada servicio est&aacute; dise&ntilde;ado para cerrar brechas
          espec&iacute;ficas en tu ciclo de vida de desarrollo, desde la
          auditor&iacute;a inicial hasta el hardening final.
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
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  index: number;
}) {
  return (
    <ScrollAnimate delay={0.1 * index} direction="up" distance={24}>
      <div
        className={cn(
          "group/card flex h-full flex-col gap-5 rounded-xl border border-surface-border bg-surface-card p-6 transition-all duration-500",
          "hover:border-cobalt/20 hover:bg-surface-elevated/50 hover:shadow-glow-cobalt",
        )}
      >
        <div className="space-y-1">
          <h3
            className="text-lg font-semibold text-text-primary"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="font-mono text-xs font-medium tracking-wider text-cobalt">
            {subtitle}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed text-text-secondary"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="mt-auto flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-surface-border bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-text-muted transition-colors duration-300 group-hover/card:border-cobalt/15 group-hover/card:text-text-secondary"
              dangerouslySetInnerHTML={{ __html: tag }}
            />
          ))}
        </div>
      </div>
    </ScrollAnimate>
  );
}

export function SolutionsSection() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-24 lg:py-32">
      <SectionHeader />

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.subtitle} {...solution} index={index} />
        ))}
      </div>
    </section>
  );
}

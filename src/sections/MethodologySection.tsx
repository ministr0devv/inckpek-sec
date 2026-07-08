"use client";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const phases = [
  {
    number: "01",
    title: "Análisis Estático (SAST)",
    subtitle: "Static Application Security Testing",
    description:
      "Escaneo automatizado del código fuente completo contra librerías de vulnerabilidades conocidas (CVE, OWASP). Identificamos dependencias inseguras, secrets expuestos en repositorios y malas prácticas de codificación sin ejecutar una sola línea.",
    techniques: [
      "Escaneo de dependencias",
      "Detección de secrets",
      "Análisis de flujo de datos",
    ],
  },
  {
    number: "02",
    title: "Análisis Dinámico (DAST)",
    subtitle: "Dynamic Application Security Testing",
    description:
      "Pruebas de penetración activas sobre la aplicación en ejecución. Simulamos ataques reales de inyección SQL, XSS, SSRF, deserialización insegura y manipulación de lógica de negocio desde la perspectiva de un adversario sin privilegios.",
    techniques: [
      "Inyección SQL / NoSQL",
      "Cross-Site Scripting (XSS)",
      "Server-Side Request Forgery",
    ],
  },
  {
    number: "03",
    title: "Remediación y Hardening",
    subtitle: "Code Hardening & Patching",
    description:
      "Corrección directa sobre el repositorio del cliente. Cada hallazgo verificado se traduce en un parche de código funcional, documentado y listo para producción. No entregamos informes sin acción: escribimos el código que cierra la brecha.",
    techniques: [
      "Parches directos (PR)",
      "Refactorización de código",
      "Endurecimiento de configuraciones",
    ],
  },
  {
    number: "04",
    title: "Re-Testing y Entrega Final",
    subtitle: "Validation & Delivery",
    description:
      "Validación completa de cada mitigación mediante pruebas de regresión automatizadas y verificación manual. El ciclo se cierra solo cuando el vector de ataque está completamente eliminado. Entregamos informe técnico cifrado y firmado.",
    techniques: [
      "Pruebas de regresión",
      "Informe cifrado",
      "Firma digital",
    ],
  },
];

function SectionHeader() {
  return (
    <ScrollAnimate>
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-brand-secondary">
          02 // PROCESO OPERATIVO
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-main sm:text-4xl lg:text-5xl">
          Metodología DevSecOps Quirúrgica
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
          Enfoque dual de caja blanca (SAST) y caja negra (DAST) combinado con
          análisis manual experto. Cada fase del ciclo produce un entregable
          concreto y medible.
        </p>
      </div>
    </ScrollAnimate>
  );
}

function PhaseStep({
  number,
  title,
  subtitle,
  description,
  techniques,
  index,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  techniques: string[];
  index: number;
}) {
  return (
    <ScrollAnimate delay={0.1 * index} distance={24}>
      <div className="group/phase flex flex-col gap-4 border-b border-border-clean pb-8 last:border-b-0 last:pb-0 sm:flex-row sm:gap-10">
        <div className="flex shrink-0 items-start">
          <span className="font-mono text-5xl font-black leading-none tracking-tighter text-bg-muted transition-colors duration-300 sm:text-6xl lg:text-7xl group-hover/phase:text-brand-primary/30">
            {number}
          </span>
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:pt-2">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-text-main sm:text-xl">
              {title}
            </h3>
            <span className="mt-0.5 font-mono text-xs font-medium tracking-wider text-brand-secondary/70">
              {subtitle}
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
            {description}
          </p>
          <div className="mt-1 flex flex-wrap gap-2">
            {techniques.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border-clean bg-bg-muted/50 px-2.5 py-1 font-mono text-[11px] text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
}

export function MethodologySection() {
  return (
    <section id="metodologia" className="bg-bg-main py-24 lg:py-32">
      <div className="mx-auto max-w-container px-4">
        <SectionHeader />

        <div className="mx-auto max-w-4xl space-y-8 lg:space-y-10">
          {phases.map((phase, index) => (
            <PhaseStep key={phase.number} {...phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

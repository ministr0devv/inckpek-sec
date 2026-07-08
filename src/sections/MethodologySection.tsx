"use client";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const phases = [
  {
    number: "01",
    title: "An&aacute;lisis Est&aacute;tico (SAST)",
    subtitle: "Static Application Security Testing",
    description:
      "Escaneo automatizado del c&oacute;digo fuente completo contra librer&iacute;as de vulnerabilidades conocidas (CVE, OWASP). Identificamos dependencias inseguras, secrets expuestos en repositorios y malas pr&aacute;cticas de codificaci&oacute;n sin ejecutar una sola l&iacute;nea.",
    techniques: [
      "Escaneo de dependencias",
      "Detecci&oacute;n de secrets",
      "An&aacute;lisis de flujo de datos",
    ],
  },
  {
    number: "02",
    title: "An&aacute;lisis Din&aacute;mico (DAST)",
    subtitle: "Dynamic Application Security Testing",
    description:
      "Pruebas de penetraci&oacute;n activas sobre la aplicaci&oacute;n en ejecuci&oacute;n. Simulamos ataques reales de inyecci&oacute;n SQL, XSS, SSRF, deserializaci&oacute;n insegura y manipulaci&oacute;n de l&oacute;gica de negocio desde la perspectiva de un adversario sin privilegios.",
    techniques: [
      "Inyecci&oacute;n SQL / NoSQL",
      "Cross-Site Scripting (XSS)",
      "Server-Side Request Forgery",
    ],
  },
  {
    number: "03",
    title: "Remediaci&oacute;n y Hardening",
    subtitle: "Code Hardening & Patching",
    description:
      "Correcci&oacute;n directa sobre el repositorio del cliente. Cada hallazgo verificado se traduce en un parche de c&oacute;digo funcional, documentado y listo para producci&oacute;n. No entregamos informes sin acci&oacute;n: escribimos el c&oacute;digo que cierra la brecha.",
    techniques: [
      "Parches directos (PR)",
      "Refactorizaci&oacute;n de c&oacute;digo",
      "Endurecimiento de configuraciones",
    ],
  },
  {
    number: "04",
    title: "Re-Testing y Entrega Final",
    subtitle: "Validation & Delivery",
    description:
      "Validaci&oacute;n completa de cada mitigaci&oacute;n mediante pruebas de regresi&oacute;n automatizadas y verificaci&oacute;n manual. El ciclo se cierra solo cuando el vector de ataque est&aacute; completamente eliminado. Entregamos informe t&eacute;cnico cifrado y firmado.",
    techniques: [
      "Pruebas de regresi&oacute;n",
      "Informe cifrado",
      "Firma digital",
    ],
  },
];

function SectionHeader() {
  return (
    <ScrollAnimate>
      <div className="max-w-xl">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cobalt">
          02 // PROCESO OPERATIVO DE AUDITOR&Iacute;A
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
          Metodolog&iacute;a DevSecOps
          <br />
          Quir&uacute;rgica
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
          Enfoque dual de caja blanca (SAST) y caja negra (DAST) combinado con
          an&aacute;lisis manual experto. Cada fase del ciclo produce un
          entregable concreto y medible.
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
    <ScrollAnimate delay={0.12 * index} distance={24}>
      <div className="group/phase flex flex-col gap-4 border-b border-surface-border pb-8 last:border-b-0 last:pb-0 sm:flex-row sm:gap-10">
        <div className="flex shrink-0 items-start">
          <span className="font-mono text-5xl font-black leading-none tracking-tighter text-surface-elevated transition-colors duration-300 sm:text-6xl lg:text-7xl group-hover/phase:text-cobalt/40">
            {number}
          </span>
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:pt-2">
          <div className="flex flex-col">
            <h3
              className="text-lg font-semibold text-text-primary sm:text-xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <span className="mt-0.5 font-mono text-xs font-medium tracking-wider text-cobalt/70">
              {subtitle}
            </span>
          </div>
          <p
            className="max-w-2xl text-sm leading-relaxed text-text-secondary"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-1 flex flex-wrap gap-2">
            {techniques.map((t) => (
              <span
                key={t}
                className="rounded-md border border-surface-border bg-surface-card/50 px-2.5 py-1 font-mono text-[11px] text-text-muted"
                dangerouslySetInnerHTML={{ __html: t }}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
}

export function MethodologySection() {
  return (
    <section id="metodologia" className="mx-auto max-w-7xl px-4 py-24 lg:py-32">
      <SectionHeader />

      <div className="mt-16 space-y-8 lg:space-y-10">
        {phases.map((phase, index) => (
          <PhaseStep key={phase.number} {...phase} index={index} />
        ))}
      </div>
    </section>
  );
}

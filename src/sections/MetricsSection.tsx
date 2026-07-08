"use client";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const metrics = [
  { value: "0%", label: "Falsos Positivos" },
  { value: "100%", label: "C&oacute;digo Auditado Manualmente" },
  { value: "&lt;24h", label: "Tiempo de Respuesta Cr&iacute;tico" },
  { value: "4", label: "Fases del Ciclo DevSecOps" },
];

export function MetricsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <ScrollAnimate key={metric.label} delay={0.08 * index}>
            <div className="flex flex-col items-center justify-center gap-2 bg-surface px-6 py-12 text-center">
              <span
                className="font-mono text-4xl font-black leading-none tracking-tighter text-cobalt sm:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: metric.value }}
              />
              <span
                className="max-w-[14ch] text-xs leading-relaxed text-text-secondary sm:text-sm"
                dangerouslySetInnerHTML={{ __html: metric.label }}
              />
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}

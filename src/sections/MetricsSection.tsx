"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span className="font-mono text-4xl font-black leading-none tracking-tighter text-brand-primary sm:text-5xl lg:text-6xl">
      {count}{suffix}
    </span>
  );
}

const metrics = [
  { value: 0, suffix: "%", label: "Falsos Positivos" },
  { value: 100, suffix: "%", label: "Código Auditado Manualmente" },
  { value: 24, suffix: "h", label: "Tiempo de Respuesta Crítico" },
  { value: 4, suffix: "", label: "Fases del Ciclo DevSecOps" },
];

export function MetricsSection() {
  return (
    <section className="bg-bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4">
        <ScrollAnimate>
          <div className="mb-12 text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-brand-secondary">
              INDICADORES DE RENDIMIENTO
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tighter text-text-main sm:text-4xl lg:text-5xl">
              Resultados que hablan por sí solos
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-smooth border border-border-clean bg-border-clean lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <ScrollAnimate key={metric.label} delay={0.08 * index}>
              <div className="flex flex-col items-center justify-center gap-2 bg-white px-6 py-12 text-center">
                <CountUp target={metric.value} suffix={metric.suffix} />
                <span className="max-w-[14ch] text-xs leading-relaxed text-text-muted sm:text-sm">
                  {metric.label}
                </span>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { Footer } from "@/components/layout/Footer";

function Spinner() {
  return (
    <svg className="-ml-1 size-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

const serviceOptions = [
  "Auditoría Ofensiva Completa",
  "Pentesting de APIs",
  "Hardening Cloud",
  "DevSecOps / CI/CD",
  "Code Review",
  "Otro",
];

function ChannelList() {
  const channels = [
    {
      icon: "@",
      label: "hello@aegiscode.security",
      href: "mailto:hello@aegiscode.security",
    },
    {
      icon: "T",
      label: "@aegiscode en Telegram",
      href: "https://t.me/aegiscode",
    },
  ];

  return (
    <div className="mt-8 space-y-3">
      {channels.map((ch) => (
        <a
          key={ch.label}
          href={ch.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-brand-primary"
        >
          <span className="flex size-8 items-center justify-center rounded-clean border border-border-clean bg-bg-muted font-mono text-xs text-text-muted transition-colors group-hover:border-brand-primary/30 group-hover:text-brand-primary">
            {ch.icon}
          </span>
          {ch.label}
        </a>
      ))}
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-smooth border border-border-clean bg-white px-6 py-16 text-center"
        style={{ animation: "fadeIn 0.5s ease-out both" }}
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-success/10 text-2xl text-success">
          &#10003;
        </div>
        <p className="mt-4 text-lg font-semibold text-text-main">
          Mensaje enviado
        </p>
        <p className="mt-1 text-sm text-text-muted">
          Revisaremos tu solicitud y te contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-smooth border border-border-clean bg-white p-6 sm:p-8 shadow-card"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
            Nombre
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 rounded-clean border border-border-clean bg-bg-surface px-3 text-sm text-text-main outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-brand-primary/60 focus:shadow-[0_0_0_2px_rgba(30,64,175,0.08)]"
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
            Empresa
          </span>
          <input
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="h-10 rounded-clean border border-border-clean bg-bg-surface px-3 text-sm text-text-main outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-brand-primary/60 focus:shadow-[0_0_0_2px_rgba(30,64,175,0.08)]"
            placeholder="Tu empresa"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          Correo Corporativo
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 rounded-clean border border-border-clean bg-bg-surface px-3 text-sm text-text-main outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-brand-primary/60 focus:shadow-[0_0_0_2px_rgba(30,64,175,0.08)]"
          placeholder="correo@empresa.com"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          Servicio de Interés
        </span>
        <select
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="h-10 rounded-clean border border-border-clean bg-bg-surface px-3 text-sm text-text-main outline-none transition-colors duration-200 focus:border-brand-primary/60 focus:shadow-[0_0_0_2px_rgba(30,64,175,0.08)]"
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          Detalles del Proyecto
        </span>
        <textarea
          required
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="resize-none rounded-clean border border-border-clean bg-bg-surface px-3 py-2 text-sm text-text-main outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-brand-primary/60 focus:shadow-[0_0_0_2px_rgba(30,64,175,0.08)]"
          placeholder="Describe brevemente tu proyecto o el servicio que necesitas..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "flex h-11 items-center justify-center gap-2 rounded-clean bg-brand-primary px-6 text-sm font-semibold uppercase tracking-wider text-text-inverse transition-all duration-300",
          "hover:bg-brand-primary-hover",
          "disabled:cursor-not-allowed disabled:opacity-60",
        )}
      >
        {loading ? (
          <>
            <Spinner />
            Enviando...
          </>
        ) : (
          "Enviar Solicitud"
        )}
      </button>
    </form>
  );
}

export function B2BSection() {
  return (
    <section id="contacto">
      <div className="bg-bg-main py-24 lg:py-32">
        <div className="mx-auto max-w-container px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollAnimate direction="left" distance={24}>
              <div className="max-w-xl">
                <span className="font-mono text-xs font-semibold tracking-[0.25em] text-brand-secondary">
                  03 // INICIAR PROTOCOLO
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-main sm:text-4xl lg:text-5xl">
                  Protege tu
                  <br />
                  Infraestructura
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                  Contáctanos a través de nuestros canales directos seguros o
                  completa el formulario y te responderemos en menos de 24 horas
                  hábiles.
                </p>
                <ChannelList />
              </div>
            </ScrollAnimate>

            <ScrollAnimate direction="right" distance={24} delay={0.15}>
              <ContactForm />
            </ScrollAnimate>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

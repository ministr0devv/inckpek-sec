"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

function Spinner() {
  return (
    <svg
      className="-ml-1 size-4 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
    >
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

function SectionHeader() {
  return (
    <div className="max-w-xl">
      <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cian">
        03 // INICIAR PROTOCOLO
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
        Protege tu
        <br />
        Infraestructura
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
        Contáctanos a través de nuestros canales directos seguros o completa el
        formulario y te responderemos en menos de 24 horas hábiles.
      </p>

      <div className="mt-8 space-y-3">
        <a
          href="mailto:inckpek@proton.me"
          className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-cian"
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-surface-border bg-surface-card font-mono text-xs text-text-muted transition-colors group-hover:border-cian/30">
            @
          </span>
          inckpek@proton.me
        </a>
        <a
          href="https://t.me/inckpek"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-cian"
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-surface-border bg-surface-card font-mono text-xs text-text-muted transition-colors group-hover:border-cian/30">
            T
          </span>
          Telegram
        </a>
        <a
          href="https://discord.gg/inckpek"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-cian"
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-surface-border bg-surface-card font-mono text-xs text-text-muted transition-colors group-hover:border-cian/30">
            D
          </span>
          Discord
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
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
        className="flex flex-col items-center justify-center rounded-xl border border-surface-border bg-surface-card px-6 py-16 text-center"
        style={{
          animation: "fadeUp 0.5s ease-out both",
        }}
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-success/10 text-2xl text-success">
          &#10003;
        </div>
        <p className="mt-4 text-lg font-semibold text-text-primary">
          Mensaje enviado
        </p>
        <p className="mt-1 text-sm text-text-secondary">
          Revisaremos tu solicitud y te contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-surface-border bg-surface-card p-6 sm:p-8"
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
            className="h-10 rounded-md border border-surface-border bg-surface px-3 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-cian/60 focus:shadow-[0_0_0_2px_rgba(0,180,216,0.1)]"
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
            className="h-10 rounded-md border border-surface-border bg-surface px-3 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-cian/60 focus:shadow-[0_0_0_2px_rgba(0,180,216,0.1)]"
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
          className="h-10 rounded-md border border-surface-border bg-surface px-3 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-cian/60 focus:shadow-[0_0_0_2px_rgba(0,180,216,0.1)]"
          placeholder="correo@empresa.com"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          Detalles del Proyecto / Servicio
        </span>
        <textarea
          required
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="resize-none rounded-md border border-surface-border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-cian/60 focus:shadow-[0_0_0_2px_rgba(0,180,216,0.1)]"
          placeholder="Describe brevemente tu proyecto o el servicio que necesitas..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "flex h-11 items-center justify-center gap-2 rounded-md bg-cian px-6 text-sm font-semibold uppercase tracking-wider text-ink-900 transition-all duration-300",
          "hover:bg-cian-400 hover:shadow-glow-cian",
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

function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="tracking-widest text-text-secondary">
            INCKPEK SEC
          </span>
          <span className="text-surface-border">//</span>
          <span>&copy; 2026</span>
        </div>

        <p className="max-w-md text-center font-mono text-[11px] leading-relaxed text-text-muted sm:text-right">
          Este documento y sus contenidos son confidenciales. Prohibida su
          distribución sin autorizaci&oacute;n expresa de Inckpek Sec.
        </p>

        <div className="flex items-center gap-4 font-mono text-[11px] text-text-muted">
          <a
            href="mailto:inckpek@proton.me"
            className="transition-colors hover:text-cian"
          >
            Contacto
          </a>
          <a href="#" className="transition-colors hover:text-cian">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}

export function ContactAndFooter() {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            style={{
              animation: "fadeUp 0.8s ease-out both",
            }}
          >
            <SectionHeader />
          </div>
          <div
            style={{
              animation: "fadeUp 0.8s ease-out 0.2s both",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

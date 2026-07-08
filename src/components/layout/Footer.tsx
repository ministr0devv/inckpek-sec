import { Logo } from "@/components/ui/Logo";

const serviceLinks = [
  { label: "Auditoría Ofensiva", href: "#" },
  { label: "Pentesting de APIs", href: "#" },
  { label: "Hardening Cloud", href: "#" },
  { label: "DevSecOps", href: "#" },
  { label: "Code Review", href: "#" },
];

const companyLinks = [
  { label: "Sobre Nosotros", href: "#" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Carreras", href: "#" },
  { label: "Blog Técnico", href: "#" },
];

const legalLinks = [
  { label: "Aviso Legal", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Términos del Servicio", href: "#" },
  { label: "Política de Cookies", href: "#" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-text-main">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-clean bg-bg-surface">
      <div className="mx-auto max-w-container px-4 py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Blindaje de código fuente corporativo. Auditoría ofensiva,
              hardening DevSecOps y remediación de vulnerabilidades para
              empresas que no pueden permitirse una brecha.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://t.me/aegiscode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted transition-colors hover:text-brand-primary"
              >
                Telegram
              </a>
              <a
                href="mailto:hello@aegiscode.security"
                className="text-xs text-text-muted transition-colors hover:text-brand-primary"
              >
                Email
              </a>
              <a
                href="https://github.com/aegiscode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted transition-colors hover:text-brand-primary"
              >
                GitHub
              </a>
            </div>
          </div>

          <FooterColumn title="Servicios" links={serviceLinks} />
          <FooterColumn title="Empresa" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
      </div>

      <div className="border-t border-border-clean">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Aegis Code Security. Todos los
            derechos reservados.
          </p>
          <p className="max-w-md text-center font-mono text-[10px] text-text-muted sm:text-right">
            Este sitio y sus contenidos son confidenciales. Prohibida su
            distribución sin autorización expresa.
          </p>
        </div>
      </div>
    </footer>
  );
}

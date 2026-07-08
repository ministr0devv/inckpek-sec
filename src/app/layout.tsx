import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://inckpeksec.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Inckpek Sec | Auditoría de Código, Hardening & DevSecOps Corporativo",
    template: "%s | Inckpek Sec",
  },
  description:
    "Agencia de ciberseguridad enterprise. Auditoría ofensiva, pentesting de APIs financieras, hardening de código Next.js/Supabase y consultoría DevSecOps. Con base en Zaragoza y operación global.",
  keywords: [
    "ciberseguridad",
    "auditoría de código",
    "pentesting",
    "hardening",
    "devsecops",
    "seguridad next.js",
    "seguridad supabase",
    "remediación de vulnerabilidades",
    "zaragoza",
    "consultoría seguridad",
    "análisis estático sast",
    "análisis dinámico dast",
  ],
  authors: [{ name: "Inckpek Sec" }],
  creator: "Inckpek Sec",
  publisher: "Inckpek Sec",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Inckpek Sec",
    title: "Inckpek Sec | Blindaje de Código Fuente Corporativo",
    description:
      "Auditoría ofensiva manual, hardening de código y remediación DevSecOps. Parches listos para producción en menos de 24h para incidentes críticos.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inckpek Sec — Blindaje de Código Fuente Corporativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inckpek Sec | Blindaje de Código Fuente Corporativo",
    description:
      "Auditoría ofensiva manual, hardening de código y remediación DevSecOps.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Inckpek Sec",
  description:
    "Agencia de ciberseguridad corporativa especializada en auditoría ofensiva de código, hardening DevSecOps, pentesting de APIs financieras y remediación de vulnerabilidades en infraestructuras Next.js, Supabase y AWS.",
  url: siteUrl,
  telephone: "+34-876-XXX-XXX",
  email: "inckpek@proton.me",
  foundingDate: "2024",
  areaServed: [
    {
      "@type": "City",
      name: "Zaragoza",
    },
    {
      "@type": "Country",
      name: "Spain",
    },
    {
      "@type": "Continent",
      name: "Global",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zaragoza",
    addressCountry: "ES",
  },
  knowsAbout: [
    "Auditoría de Código Fuente",
    "Pentesting Web y APIs",
    "Hardening de Infraestructura Cloud",
    "DevSecOps y CI/CD Seguro",
    "Análisis Estático SAST",
    "Análisis Dinámico DAST",
    "Remediación de Vulnerabilidades",
    "Seguridad en Next.js y Supabase",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Ciberseguridad",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auditoría Ofensiva Avanzada",
          description:
            "Pentesting manual de lógica de negocio, APIs y aplicaciones web con simulación de adversarios reales.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardening y Remediación de Código",
          description:
            "Corrección directa sobre el repositorio con parches de seguridad listos para producción.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultoría DevSecOps",
          description:
            "Automatización de pipelines seguros, hardening de LLMs y cumplimiento técnico continuo.",
        },
      },
    ],
  },
  sameAs: [
    "https://github.com/ministr0devv/inckpek-sec",
    "https://t.me/inckpek",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

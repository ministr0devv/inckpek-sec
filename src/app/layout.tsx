import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://aegiscode.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aegis Code Security | Blindaje de Código Fuente Corporativo",
    template: "%s | Aegis Code Security",
  },
  description:
    "Auditoría ofensiva de código, pentesting de APIs financieras, hardening DevSecOps y remediación de vulnerabilidades. Parches listos para producción en menos de 24h.",
  keywords: [
    "ciberseguridad",
    "auditoría de código",
    "pentesting",
    "hardening",
    "devsecops",
    "seguridad empresarial",
    "remediación de vulnerabilidades",
    "consultoría seguridad",
  ],
  authors: [{ name: "Aegis Code Security" }],
  creator: "Aegis Code Security",
  publisher: "Aegis Code Security",
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
    siteName: "Aegis Code Security",
    title: "Aegis Code Security | Blindaje de Código Fuente Corporativo",
    description:
      "Auditoría ofensiva, hardening DevSecOps y remediación de vulnerabilidades. Parches listos para producción.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aegis Code Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Code Security | Blindaje de Código Fuente Corporativo",
    description:
      "Auditoría ofensiva, hardening DevSecOps y remediación de vulnerabilidades.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aegis Code Security",
  description:
    "Agencia de ciberseguridad corporativa especializada en auditoría ofensiva de código, hardening DevSecOps y remediación de vulnerabilidades.",
  url: siteUrl,
  email: "hello@aegiscode.security",
  areaServed: ["Spain", "Global"],
  knowsAbout: [
    "Auditoría de Código Fuente",
    "Pentesting Web y APIs",
    "Hardening de Infraestructura Cloud",
    "DevSecOps y CI/CD Seguro",
    "Remediación de Vulnerabilidades",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

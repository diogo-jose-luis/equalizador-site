// src/app/layout.tsx
import "./globals.css";
import { lexendDeca, hind } from "./fonts";
import type { Metadata } from "next";
import JivoChat from "@/components/chat/JivoChat";

export const metadata: Metadata = {
  metadataBase: new URL("https://equalizador.ao"), // troca pelo teu domínio final
  title: {
    default: "Equalizador | Consultoria & Treinamentos em TI",
    template: "%s | Equalizador",
  },
  description:
    "Consultoria e formações em Tecnologias de Informação, com foco em resultados práticos para profissionais, estudantes e empresas.",
  keywords: [
    "Consultoria TI",
    "Treinamentos TI",
    "Formação CCNA",
    "Power BI",
    "Azure",
    "Luanda",
    "Angola",
    "Equalizador",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Equalizador",
    title: "Equalizador | Consultoria & Treinamentos em TI",
    description:
      "Consultoria e formações em Tecnologias de Informação, com foco em resultados práticos.",
    images: [
      {
        url: "/og.jpg", // coloca uma imagem em public/og.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Equalizador - Consultoria e Treinamentos em TI",
      },
    ],
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equalizador | Consultoria & Treinamentos em TI",
    description:
      "Consultoria e formações em TI com foco em prática, performance e resultados.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${lexendDeca.variable} ${hind.variable} bg-white text-neutral-900`}>
        {children}
        <JivoChat widgetId="7sTBTw6sFY" />
      </body>
    </html>
  );
}

// src/app/treinamentos/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import TrainingsCatalog from "@/components/sections/TrainingsCatalog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treinamentos",
  description:
    "Formações práticas e atualizadas em Tecnologias de Informação, Networking, Cloud, Segurança, Offshore e muito mais.",
  alternates: { canonical: "/treinamentos" },
};


export default function TreinamentosPage() {
  return (
    <>
      <Header />

      <PageBanner
        title="Treinamentos"
        description="Formações práticas e atualizadas em Tecnologias de Informação, Networking, Cloud, Segurança, Offshore e muito mais."
        images={[
          { src: "/banners/powerbi.png", alt: "Treinamento profissional" },
          { src: "/banners/bst.png", alt: "Formação em sala e online" },
        ]}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Treinamentos" },
        ]}
      />

      {/* Secção principal (como screenshot) */}
      <TrainingsCatalog />

      <Footer />
    </>
  );
}

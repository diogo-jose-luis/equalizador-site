// src/app/contacto/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import ContactSection from "@/components/sections/ContactSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Somos a Equalizador: consultoria e formações em TI com foco em prática, performance e resultados.",
  alternates: { canonical: "/contacto" },
};


export default function ContactoPage() {
  return (
    <>
      <Header />

      <PageBanner
        title="Contacto"
        description="Fala connosco para inscrições, propostas corporativas, consultoria e suporte. Respondemos rápido."
        images={[
          { src: "/banners/nos.png", alt: "Atendimento e suporte" },
          { src: "/banners/contacto.jpg", alt: "Formação e consultoria" },
        ]}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contacto" },
        ]}
      />

      <ContactSection />

      <Footer />
    </>
  );
}

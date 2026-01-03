// src/app/contacto/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactoPage() {
  return (
    <>
      <Header />

      <PageBanner
        title="Contacto"
        description="Fala connosco para inscrições, propostas corporativas, consultoria e suporte. Respondemos rápido."
        images={[
          { src: "/banners/contacto.jpg", alt: "Atendimento e suporte" },
          { src: "/banners/formandos.png", alt: "Formação e consultoria" },
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

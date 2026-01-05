// src/app/sobre-nos/page.tsx (ou src/pages/sobre-nos.tsx dependendo do teu setup)
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import AboutFeaturedStrip from "@/components/sections/AboutFeaturedStrip";
import Footer from "@/components/sections/Footer";
import MissionVisionValues from "@/components/sections/MissionVisionValues";
import PageBanner from "@/components/sections/PageBanner";
import Testimonials from "@/components/sections/Testimonials";

export default function SobreNosPage() {
  return (
    <>
      <Header />

      <PageBanner
        title="Sobre Nós"
        description="Somos a Equalizador: consultoria e formações em TI com foco em prática, performance e resultados."
        images={[
          { src: "/banners/nos.png", alt: "Formadora" },
          { src: "/about/students.png", alt: "Formando" },
        ]}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sobre Nós" }]}
      />

      {/* NOVA SECÇÃO (flutuante como Categories) */}
      <MissionVisionValues />

      <About />
      <AboutFeaturedStrip />
      <Testimonials />

      <Footer />
    </>
  );
}

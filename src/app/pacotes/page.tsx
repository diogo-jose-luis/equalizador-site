// src/app/pacotes/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import TrainingBatches from "@/components/sections/TrainingBatches";

export default function PacotesPage() {
  return (
    <>
      <Header />

      <PageBanner
        title="Pacotes de Formação"
        description="Programas completos e estruturados (Batches) que combinam múltiplas certificações para acelerar a tua carreira."
        images={[
          { src: "/banners/vmware.png", alt: "Pacotes de formação profissional" },
          { src: "/banners/powerbi.png", alt: "Programas intensivos de certificação" },
        ]}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pacotes" },
        ]}
      />

      <TrainingBatches />
      
      <Footer />
    </>
  );
}

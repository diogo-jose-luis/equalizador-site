import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import About from "@/components/sections/About";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import HighlightsStrip from "@/components/sections/HighlightsStrip";
import TrainingBatches from "@/components/sections/TrainingBatches";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
     <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Equalizador Consultoria & Treinamentos",
          url: "https://equalizador.ao",
          logo: "https://equalizador.ao/logo-equalizador.png",
          sameAs: [
            "https://www.facebook.com/equalizador",
            "https://www.instagram.com/_equalizador_ao/",
            "https://www.linkedin.com/company/equalizador-c-t/",
          ],
          contactPoint: [{
            "@type": "ContactPoint",
            telephone: "+244935689669",
            contactType: "customer support",
            email: "geral@equalizador.ao",
            areaServed: "AO",
            availableLanguage: ["pt", "en"],
          }],
        }}
      />
      <Header />
      <Hero />
      <Categories />
      <About />
      <FeaturedCourses />
      <HighlightsStrip />
      <TrainingBatches />
      <Footer />
    </>
  );
}

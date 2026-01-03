import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import About from "@/components/sections/About";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import HighlightsStrip from "@/components/sections/HighlightsStrip";
import TrainingBatches from "@/components/sections/TrainingBatches";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
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

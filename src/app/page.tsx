import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import TrainingClub from "@/components/home/TrainingClub";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandStory />
        <Testimonials />
        <TrainingClub />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

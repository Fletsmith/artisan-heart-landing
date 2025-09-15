import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import FeaturedTalents from "@/components/FeaturedProducts";
import WhyKumasiSection from "@/components/WhyKumasiSection";
import StoriesOfImpactSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <FeaturedTalents />
      <WhyKumasiSection />
      <StoriesOfImpactSection />
      <GallerySection />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

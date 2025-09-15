import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block bg-accent-gradient bg-clip-text text-transparent">
            Talent Lives Here
          </span>
          in Kumasi
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Kumasi is alive with creativity. From the weaving of kente cloth to the rhythms of music and the energy of young innovators, our city is full of stories waiting to be told. Kumasi Talent Hub is here to showcase those stories and connect the people behind them to the world.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-smooth"
        >
          👉 See Our Talents
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
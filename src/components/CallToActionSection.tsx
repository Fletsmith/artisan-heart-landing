import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get Involved
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Are you talented? Share your work with us and let people discover your gift. 
          Want to support? Partner with us, mentor a young talent, or sponsor a project to keep this vision alive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 transition-smooth"
          >
            👉 Join the Movement
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 backdrop-blur-sm transition-smooth"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
import { Leaf, Heart, Globe, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "All our products are made with natural, organic ingredients without harmful chemicals."
  },
  {
    icon: Heart,
    title: "Handmade with Care",
    description: "Each item is lovingly crafted by skilled artisans who take pride in their work."
  },
  {
    icon: Globe,
    title: "Supporting Local Communities",
    description: "Every purchase directly supports local farmers, artisans, and small businesses."
  },
  {
    icon: Truck,
    title: "Freshly Delivered",
    description: "Products are delivered fresh to your door, maintaining quality and freshness."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the finest local products while supporting 
            our community and preserving traditional craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:transform hover:-translate-y-2 transition-bounce"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gradient rounded-full mb-4 group-hover:shadow-elegant transition-smooth">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
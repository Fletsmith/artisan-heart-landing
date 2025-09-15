import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const talents = [
  {
    id: 1,
    name: "Arts & Crafts",
    description: "Kente weavers, bead makers, potters, and carvers who turn tradition into beauty.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Music & Dance",
    description: "Singers, rappers, drummers, and dance groups that bring energy to every stage.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Fashion & Style",
    description: "Designers who proudly mix Ghanaian culture with today's trends.",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Technology & Innovation",
    description: "Young creators building apps, robots, and digital tools.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Food & Culinary Skills",
    description: "Local chefs putting a new twist on traditional Ghanaian meals.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop"
  }
];

const FeaturedTalents = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Talents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every talent has a story — and we tell it with photos, videos, and personal journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent) => (
            <Card key={talent.id} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={talent.image} 
                  alt={talent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {talent.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {talent.description}
                </p>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                  Explore Talents
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTalents;
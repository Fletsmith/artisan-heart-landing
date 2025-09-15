import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Artisan Sourdough Bread",
    description: "Hand-crafted daily using traditional methods and locally sourced organic flour.",
    price: "$8.50",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Raw Wildflower Honey",
    description: "Pure, unprocessed honey from local beehives, harvested sustainably.",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1587049332474-346ce9b84a95?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Handwoven Wool Blanket",
    description: "Cozy blanket made from locally sourced wool, dyed with natural materials.",
    price: "$145.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Organic Vegetable Box",
    description: "Weekly selection of seasonal vegetables grown without synthetic pesticides.",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug Set",
    description: "Beautiful hand-thrown mugs, perfect for your morning coffee ritual.",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Herbal Tea Blend",
    description: "Carefully curated blend of locally foraged herbs for relaxation and wellness.",
    price: "$16.00",
    image: "https://images.unsplash.com/photo-1556909114-be52da702410?w=400&h=400&fit=crop"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully selected collection of locally-made treasures, 
            each one crafted with passion and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden shadow-warm hover:shadow-elegant transition-smooth">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
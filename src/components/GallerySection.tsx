const images = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=600&fit=crop",
];

const GallerySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Community in Pictures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the vibrant world of local artisans, fresh produce, 
            and the beautiful products that make our community special.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg shadow-warm hover:shadow-elegant transition-smooth">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
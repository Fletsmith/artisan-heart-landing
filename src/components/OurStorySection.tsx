const OurStorySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-warm-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe that every talent deserves to be seen. Kumasi Talent Hub was created to shine a spotlight on the skills and creativity of people in Kumasi and beyond. Some of these talents come from long traditions—like adinkra printing and wood carving—while others are modern and fresh, like digital art, fashion design, and app development.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At our core, we want to give talented people a place to be noticed, connect them to opportunities that can change their lives, and keep the spirit of Kumasi's culture alive while encouraging new ideas.
            </p>
            <p className="text-lg text-primary font-medium">
              Every person in Kumasi has a story worth telling, and we're here to help them share it with the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg shadow-warm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop" 
                  alt="Local farmer in field"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-muted rounded-lg shadow-warm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586195508888-7f54e1b6e2ff?w=400&h=300&fit=crop" 
                  alt="Artisan pottery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] bg-muted rounded-lg shadow-warm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" 
                  alt="Fresh produce"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg shadow-warm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop" 
                  alt="Handmade crafts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
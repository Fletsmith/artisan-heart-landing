import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    name: "Ama",
    role: "Artisan",
    story: "Through this platform, my beadwork found new customers even outside Ghana.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Kofi", 
    role: "Designer",
    story: "Being featured here gave me the confidence to take my clothing brand seriously.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Adwoa",
    role: "Musician", 
    story: "This hub connected me with producers who believed in my traditional-modern fusion sound.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  }
];

const StoriesOfImpactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from talented individuals whose lives have been changed through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="shadow-warm">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 italic text-lg">
                  "{story.story}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={story.avatar}
                    alt={story.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesOfImpactSection;
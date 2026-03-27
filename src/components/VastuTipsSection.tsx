import { Lightbulb, Home, Leaf, Layout } from "lucide-react";

interface Tip {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const vastuTips: Tip[] = [
  {
    id: 1,
    title: "Bedroom Placement",
    description: "The master bedroom should ideally be in the southwest corner of the home. This promotes stability, better sleep, and stronger relationships. Keep the bed head towards the south or west.",
    category: "Bedroom",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Kitchen Direction",
    description: "The kitchen should be in the southeast corner, representing the fire element. This promotes prosperity and health. The cook should face east while preparing meals for positive energy flow.",
    category: "Kitchen",
    icon: <Leaf className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Living Room Furniture",
    description: "Arrange seating in the living room so people face north or east. This promotes better conversation and positive energy. Heavy furniture should be towards the south and west walls.",
    category: "Living Room",
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Natural Light & Air",
    description: "Maximize natural light from the east and northeast. This brings fresh prana (life force) into your home. Ensure proper ventilation to maintain clean, positive energy throughout the space.",
    category: "General",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Main Entrance Direction",
    description: "The front door should ideally face north, east, or northeast. These directions welcome positive energy into your home. Avoid entrances facing southwest as much as possible.",
    category: "Entrance",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Water Features Placement",
    description: "Water elements (fountains, aquariums) should be placed in the north or northeast corner. They represent wealth and prosperity in Vastu. Avoid placing water in the southeast or southwest.",
    category: "Elements",
    icon: <Leaf className="w-6 h-6" />
  },
];

export function VastuTipsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Design Wisdom
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
            Vastu Design <span className="text-gold-gradient">Tips</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Practical Vastu principles you can apply to your home right away
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vastuTips.map((tip) => (
            <div
              key={tip.id}
              className="group p-6 lg:p-8 bg-card rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {tip.icon}
              </div>

              <span className="inline-block text-xs font-semibold text-primary/70 bg-primary/10 px-3 py-1 rounded-full mb-3">
                {tip.category}
              </span>

              <h3 className="text-lg lg:text-xl font-serif font-medium text-foreground mb-3">
                {tip.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            These tips can help you start aligning your space with Vastu principles. For a complete consultation tailored to your home, reach out to our team.
          </p>
        </div>
      </div>
    </section>
  );
}

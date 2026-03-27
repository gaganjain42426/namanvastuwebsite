import { Compass, Palette, Building2 } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Vastu Consultation",
    description:
      "Expert analysis and scientifically-backed remedies for existing spaces or new floor plans. We identify energy blockages and provide practical solutions that align with modern living.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Complete concept development, stunning 3D visualizations, and meticulous material selection. We craft spaces that reflect your personality while honoring Vastu principles.",
  },
  {
    icon: Building2,
    title: "Architect",
    description:
      "Custom architectural planning, structural design, and space optimization for residential and commercial projects. We bring your vision to life with precision and creativity.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              What We Offer
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group text-center p-8 lg:p-10 bg-card rounded-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-serif font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="w-0 h-0.5 bg-primary mx-auto mt-6 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

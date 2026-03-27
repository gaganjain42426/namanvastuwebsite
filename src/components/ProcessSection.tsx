import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquare, Lightbulb, Hammer, Key } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We listen to your vision, assess the space, and perform a thorough Vastu analysis.",
  },
  {
    icon: Lightbulb,
    title: "Concept & Design",
    description: "Our team creates 3D visualizations and mood boards aligned with Vastu principles.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "Skilled artisans bring the design to life with premium materials and craftsmanship.",
  },
  {
    icon: Key,
    title: "Handover",
    description: "A final walkthrough ensures every detail is perfect before we hand you the keys.",
  },
];

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">How We Work</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Our Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center transition-all duration-700 delay-${i * 150} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6">
                <step.icon size={28} className="text-primary" />
              </div>
              <span className="text-xs font-medium text-primary tracking-widest uppercase">
                Step {i + 1}
              </span>
              <h3 className="font-serif text-xl text-foreground mt-1 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

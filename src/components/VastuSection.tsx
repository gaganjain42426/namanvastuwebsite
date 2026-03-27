import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  "Optimized room placement for positive energy flow",
  "Entrance positioning for prosperity and welcome",
  "Kitchen and bathroom alignment for health",
  "Bedroom orientation for restful sleep",
  "Color psychology based on Vastu guidelines",
  "Furniture placement for harmony and balance",
];

export function VastuSection() {
  return (
    <section id="vastu" className="py-24 lg:py-32 bg-charcoal text-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-cream/60 text-sm tracking-[0.2em] uppercase">
                The Science of Space
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight">
              The Vastu <span className="text-gold-gradient">Approach</span>
            </h2>

            <p className="text-cream/70 font-sans leading-relaxed">
              Vastu Shastra is an ancient Indian science of architecture that
              harmonizes the built environment with natural forces. At Naman
              Vastu Designs, we apply these time-tested principles through a
              modern, practical lens—creating spaces that feel intuitively
              right.
            </p>

            <p className="text-cream/70 font-sans leading-relaxed">
              Our approach is subtle and sophisticated. There are no
              compromises on contemporary aesthetics—only enhancements that
              bring genuine comfort and positive energy to your daily life.
            </p>

            <Button variant="gold" size="lg" className="mt-4">
              Learn More About Vastu
            </Button>
          </div>

          {/* Principles List */}
          <div className="bg-cream/5 rounded-sm p-8 lg:p-10 backdrop-blur-sm border border-cream/10">
            <h3 className="text-xl font-serif font-medium mb-6">
              What We Consider
            </h3>
            <ul className="space-y-4">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 text-cream/80"
                >
                  <Check
                    size={20}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <span className="font-sans">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

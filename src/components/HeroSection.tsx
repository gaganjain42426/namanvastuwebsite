import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";
import { ChevronDown } from "lucide-react";

export function HeroSection({ onBookConsultation }: { onBookConsultation?: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-up">
            {/* Decorative line */}
            <div className="flex items-center gap-4 opacity-80">
              <div className="w-12 h-px bg-gold-gradient" />
              <span className="text-cream/80 text-sm tracking-[0.3em] uppercase font-sans">
                Est. Jaipur
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-cream leading-tight">
              Where Modern Luxury{" "}
              <span className="text-gold-gradient">Meets</span> Ancient Harmony
            </h1>

            <p className="text-lg md:text-xl text-cream/80 font-sans font-light max-w-xl leading-relaxed">
              Premium Vastu-compliant interior design for homes and businesses
              in Jaipur. Creating spaces that nurture prosperity, health, and
              peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl">
                Explore Our Work
              </Button>
              <Button variant="hero-outline" size="xl" onClick={onBookConsultation}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}

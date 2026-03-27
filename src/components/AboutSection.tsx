import aboutImage from "@/assets/about-section.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="image-reveal rounded-sm overflow-hidden">
              <img
                src={aboutImage}
                alt="Interior Design Philosophy"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-sm hidden lg:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight">
              More Than Just <br />
              <span className="text-gold-gradient">Beautiful Spaces</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                At Naman Vastu Designs, we believe that truly exceptional
                interiors go beyond aesthetics. We blend the timeless wisdom of
                Vastu Shastra with contemporary design principles to create
                spaces that are as harmonious as they are stunning.
              </p>
              <p>
                Our approach aligns your environment with positive energy flow,
                promoting health, prosperity, and peace of mind—without
                compromising on modern luxury and elegance.
              </p>
              <p>
                Every project is a unique journey, crafted with meticulous
                attention to detail, premium materials, and a deep understanding
                of how space influences well-being.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-serif font-semibold text-primary">
                  12+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-primary">
                  200+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-primary">
                  4.9
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Google Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

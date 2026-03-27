import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Vaishali Nagar, Jaipur",
    quote:
      "Naman Vastu Designs transformed our home beyond our expectations. The balance of modern elegance with Vastu principles has truly brought a sense of peace and positivity to our family.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Agarwal",
    location: "Malviya Nagar, Jaipur",
    quote:
      "Working with the team was an absolute pleasure. They listened to our needs, respected our budget, and delivered a stunning kitchen that feels both luxurious and energetically aligned.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sunita Mehra",
    location: "Civil Lines, Jaipur",
    quote:
      "The attention to detail is remarkable. Every corner of our villa reflects thoughtful design. Our guests constantly compliment the serene atmosphere.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Client Stories
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
            What Our Clients <span className="text-gold-gradient">Say</span>
          </h2>

          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-sm p-8 lg:p-12 border border-border/50 shadow-sm">
            {/* Quote */}
            <div className="relative">
              <svg
                className="absolute -top-4 -left-2 w-12 h-12 text-primary/20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              <p className="text-lg lg:text-xl text-foreground font-serif italic leading-relaxed pl-8">
                "{testimonials[current].quote}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <div>
                <div className="font-serif font-medium text-foreground">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].location}
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "w-6 bg-primary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

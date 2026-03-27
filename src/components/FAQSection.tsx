import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is Vastu Shastra and how does it apply to interior design?",
    answer: "Vastu Shastra is an ancient Indian science of architecture and space design that focuses on creating harmonious living environments. It combines principles of energy flow, directional orientation, and elemental balance. Our designs integrate these principles with modern aesthetics to create spaces that promote well-being, prosperity, and peace."
  },
  {
    id: 2,
    category: "Services",
    question: "Do you offer Vastu consultation for existing homes?",
    answer: "Yes, absolutely! We provide comprehensive Vastu consultations for existing homes and spaces. We analyze your current layout, identify energy imbalances, and recommend practical solutions that can be implemented without major renovations. This includes furniture placement, color recommendations, and specific Vastu remedies."
  },
  {
    id: 3,
    category: "Services",
    question: "What does a typical interior design project timeline look like?",
    answer: "Project timelines vary based on scope. A consultation typically takes 1-2 hours. Full design concepts take 2-4 weeks. Execution timelines depend on project complexity but generally range from 3-8 weeks for residential spaces. We provide detailed timelines during the initial consultation."
  },
  {
    id: 4,
    category: "Process",
    question: "How do you approach the design process?",
    answer: "Our process includes: 1) Initial consultation to understand your needs and Vastu requirements, 2) Site analysis and measurements, 3) Design concept development with 3D visualizations, 4) Material and color selection aligned with Vastu principles, 5) Project execution with quality oversight, 6) Final walkthrough and handover."
  },
  {
    id: 5,
    category: "Services",
    question: "Do you work with commercial spaces?",
    answer: "Yes, we specialize in both residential and commercial interior design. For offices, retail spaces, and other commercial properties, we create Vastu-compliant designs that enhance productivity, customer experience, and business prosperity while maintaining a professional aesthetic."
  },
  {
    id: 6,
    category: "General",
    question: "Can Vastu principles be applied to modern, minimalist designs?",
    answer: "Absolutely! Vastu principles are highly compatible with modern and minimalist design philosophies. The focus is on spatial harmony, flow, and balance—concepts that align beautifully with contemporary minimalism. We create clean, sophisticated spaces that honor both modern aesthetics and Vastu wisdom."
  },
  {
    id: 7,
    category: "Services",
    question: "What is your pricing structure?",
    answer: "Pricing depends on your project scope, space size, and complexity. We offer consultation-only packages, design-only services, and full execution projects. Each is customized based on your budget and requirements. Contact us for a personalized quote."
  },
  {
    id: 8,
    category: "Process",
    question: "Do you provide 3D visualizations before execution?",
    answer: "Yes, we create detailed 3D renderings and visualizations for all design projects. This allows you to see the final result before any work begins, ensuring complete alignment with your vision before proceeding with implementation."
  },
];

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(faqItems.map((item) => item.category))];
  const filteredFAQs = selectedCategory === "All" 
    ? faqItems 
    : faqItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Questions Answered
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about our services and Vastu design approach
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <h3 className="font-serif text-lg text-foreground pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Didn't find your answer?
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors">
            Get in touch with us
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

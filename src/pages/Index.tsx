import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { VastuSection } from "@/components/VastuSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VastuTipsSection } from "@/components/VastuTipsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookConsultation={() => setConsultationOpen(true)} />
      <main>
        <HeroSection onBookConsultation={() => setConsultationOpen(true)} />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ProcessSection />
        <VastuSection />
        <TestimonialsSection />
        <VastuTipsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer onBookConsultation={() => setConsultationOpen(true)} />
      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Visit Our Studio
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className={`rounded-sm overflow-hidden shadow-md transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <iframe
              title="Naman Vastu Designs Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1756!2d75.7865!3d26.8665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s61%20Padam%20Vihar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1711610400000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
            />
          </div>

          {/* Contact Details */}
          <div className={`flex flex-col justify-center space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Our Studio</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  61, Padam Vihar, Rajat Path,<br />New Sanganer Rd, Jaipur, Rajasthan 302020
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Call Us</h4>
                <a href="tel:+917791919898" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 77919 19898
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Email</h4>
                <a href="mailto:hello@namanvastu.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  hello@namanvastu.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Working Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

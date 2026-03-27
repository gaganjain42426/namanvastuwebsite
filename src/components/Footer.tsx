import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "The Vastu Approach", href: "#vastu" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/namanvaastudesigns/", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer({ onBookConsultation }: { onBookConsultation?: () => void }) {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Naman Vastu Designs"
              className="h-14 w-auto mb-6"
            />
            <p className="text-cream/60 font-sans text-sm leading-relaxed">
              Creating harmonious spaces where modern luxury meets ancient
              wisdom. Based in Jaipur, serving clients across Rajasthan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>
                  61, Padam Vihar, Rajat Path,
                  <br />
                  New Sanganer Rd, Jaipur, Rajasthan 302020
                </span>
              </li>
              <li>
                <a
                  href="tel:+917791919898"
                  className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <Phone size={18} className="text-gold" />
                  <span>+91 77919 19898</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@namanvastu.com"
                  className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail size={18} className="text-gold" />
                  <span>hello@namanvastu.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">
              Get Vastu Design Tips
            </h4>
            <p className="text-cream/60 text-sm mb-4">
              Subscribe to receive exclusive insights on creating harmonious
              spaces.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-cream/5 border border-cream/20 rounded-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <Button variant="gold" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-sm">
              © 2024 Naman Vastu Designs. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-cream/40 hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

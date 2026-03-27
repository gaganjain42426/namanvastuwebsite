import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hi! I'm interested in a Vastu-compliant interior design consultation.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle size={22} fill="white" stroke="white" />
      <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
    </a>
  );
}

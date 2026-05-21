import { Phone } from "lucide-react";

export function MobileCta() {
  return (
    <a
      href="tel:8307437043"
      className="md:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white px-5 py-3.5 font-semibold shadow-glow animate-float"
    >
      <Phone className="w-5 h-5" /> Call Now
    </a>
  );
}
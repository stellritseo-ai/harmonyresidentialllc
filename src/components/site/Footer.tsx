import { Phone, Mail, MapPin, Clock, Facebook, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient -z-10" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 left-1/3 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 rounded-xl bg-white/95 grid place-items-center p-1.5 shadow-glow">
                <img src={logo} alt="Harmony Residential Care logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-display font-bold">Harmony</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">Residential Care</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Compassionate, medically-led home healthcare for Round Rock and Central Texas families since 2005.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/15 grid place-items-center hover:bg-white hover:text-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Google Business" className="w-10 h-10 rounded-xl bg-white/15 grid place-items-center hover:bg-white hover:text-primary transition">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {[{l:"Home",h:"#home"},{l:"Services",h:"#services"},{l:"Why Choose Us",h:"#why"},{l:"Contact",h:"#contact"},{l:"Privacy Policy",h:"#"}].map((x) => (
                <li key={x.l}><a href={x.h} className="hover:text-white transition story-link">{x.l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 1104 S Mays St, Suite 107, Round Rock, TX 78664</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:8307437043" className="hover:text-white">830-743-7043</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:harmonyresicaretx@gmail.com" className="hover:text-white break-all">harmonyresicaretx@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Hours</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5" /> <span>Monday – Friday<br/>8:00 AM – 6:00 PM</span></li>
              <li className="rounded-xl bg-white/10 backdrop-blur p-3 text-xs">
                <div className="font-semibold text-white">24/7 On-Call Nurse</div>
                <div className="text-white/75 mt-0.5">Available for urgent needs anytime.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/75">
          <div>© 2026 Harmony Residential Care LLC. All rights reserved.</div>
          <div>Licensed Home Health Provider — Texas</div>
        </div>
      </div>
    </footer>
  );
}
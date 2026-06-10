import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronDown, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  // { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Pediatric Home Health Care", href: "#services" },
  { label: "Personal Assistance Services", href: "#services" },
  { label: "Primary Home Care (PHC)", href: "#services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-soft" : "bg-transparent border border-transparent"
            }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={logo}
              alt="Harmony Residential Care logo"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-10 md:h-12" : "h-11 md:h-14"
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((l) => (
              <NavItem key={l.label} {...l} />
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition rounded-lg">
                Services <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white/75 backdrop-blur-xl border border-white/20 rounded-2xl p-2 min-w-[240px] shadow-soft">
                  {services.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/70 rounded-xl transition"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(2).map((l) => (
              <NavItem key={l.label} {...l} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:8307437043"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white px-4 md:px-5 py-2.5 text-sm font-semibold shadow-glow hover:scale-[1.03] transition"
            >
              <Phone className="w-4 h-4" /> 830-743-7043
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-50 border border-primary/20 text-primary px-4 md:px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition shadow-soft"
            >
              <Calendar className="w-4 h-4" /> Book an Appointment
            </a>
            <button
              aria-label="Toggle menu"
              className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-white/70 backdrop-blur-xl border border-white/20"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 bg-white/75 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-soft animate-in fade-in slide-in-from-top-2">
            {[...navLinks.slice(0, 2), { label: "Services", href: "#services" }, ...navLinks.slice(2)].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium text-foreground/85 hover:text-primary rounded-xl hover:bg-secondary/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:8307437043"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-gradient text-white px-4 py-3 font-semibold"
            >
              <Phone className="w-4 h-4" /> Call 830-743-7043
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-50 border border-primary/20 text-primary px-4 py-3 font-semibold"
            >
              <Calendar className="w-4 h-4" /> Book an Appointment
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition group"
    >
      {label}
      <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-brand-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
    </a>
  );
}
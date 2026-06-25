import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Calendar, Shield, Clock, Star, Heart, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-nurse.jpg";
import heroImg2 from "@/assets/hero2.png";
import heroImg3 from "@/assets/hero3.png";
import { Counter } from "./Counter";

const slides = [
  {
    src: heroImg,
    alt: "Compassionate nurse caring for a senior patient at home",
  },
  {
    src: heroImg2,
    alt: "Professional healthcare services at home",
  },
  {
    src: heroImg3,
    alt: "Trusted residential home care providers",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient & blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/80 via-white to-white" />
      <div className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-brand-gradient opacity-25 blur-3xl animate-blob -z-10" />
      <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-blue-300 opacity-30 blur-3xl animate-blob -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.035] [background-image:radial-gradient(#0e57ef_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="w-3.5 h-3.5" />
              Licensed Texas Home Health Provider
            </div>
            <h1 className="mt-5 font-display text-[32px] md:text-[45px] leading-[42px] md:leading-[65px] font-bold text-foreground">
              20 Years of <span className="text-brand-gradient">Trusted Home</span> Health Care in Texas
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Compassionate, professional care for seniors and individuals with disabilities. We bring premium companionship,
              personal care, shared living, nursing, and Participate-directed HPC directly to your doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-brand-gradient text-white px-6 py-4 font-semibold shadow-glow hover:scale-[1.03] hover:shadow-[0_25px_60px_-15px_rgba(14,87,239,0.6)] transition"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Free Consultation
              </Link>
              <a
                href="tel:8307437043"
                className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-4 font-semibold text-foreground hover:shadow-soft hover:-translate-y-0.5 transition"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call: 830-743-7043
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Badge icon={<Shield className="w-4 h-4" />} text="Medicare & Medicaid Accepted" />
              <Badge icon={<Clock className="w-4 h-4" />} text="24/7 On-Call Nurse" />
              <Badge icon={<Star className="w-4 h-4" />} text="5-Star Rated Care" />
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow h-[480px] md:h-[560px] w-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={1536}
                    height={1152}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1c17de]/40 via-transparent to-transparent z-20 pointer-events-none" />

              {/* Pagination Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-30">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 md:-left-10 top-10 glass rounded-2xl p-4 shadow-soft animate-float w-[180px] z-30">
              <div className="text-3xl font-display font-bold text-brand-gradient">
                <Counter to={20} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground mt-1">Years caring for Texas families</div>
            </div>

            <div className="absolute -right-2 md:-right-6 top-40 glass rounded-2xl p-4 shadow-soft animate-float-slow w-[200px] z-30">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-brand-gradient grid place-items-center">
                  <Heart className="w-4 h-4 text-white" fill="white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">5,000+ Visits</div>
                  <div className="text-[11px] text-muted-foreground">delivered with care</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 md:left-10 glass rounded-2xl p-4 shadow-soft animate-float w-[230px] z-30">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {["#0e57ef", "#1c17de", "#4c6ef5"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <div className="text-xs font-semibold">Trusted by 500+ families</div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                ))}
                <span className="text-[11px] text-muted-foreground ml-1">4.9 / 5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-foreground/75">
      <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary grid place-items-center">{icon}</div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

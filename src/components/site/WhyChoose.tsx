import { Check, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import whyImg from "@/assets/why-choose.jpg";

const points = [
  { t: "20+ Years of Local Experience", d: "Two decades caring for Round Rock and Texas families." },
  { t: "Licensed & Compassionate Team", d: "Vetted RNs, LPNs, and licensed therapists you can trust." },
  { t: "Personalized Care Plans", d: "Plans built around your goals, schedule, and medical needs." },
  { t: "No Long-Term Contracts", d: "Flexible, transparent service with no surprises." },
  { t: "Fast Intake & 24/7 Support", d: "Care can begin within 48 hours — often the next day." },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-20 md:py-28 overflow-hidden bg-brand-gradient">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl pointer-events-none animate-blob" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-glow">
              <img src={whyImg} alt="Nurse assisting a senior at home" loading="lazy" className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass-dark text-white rounded-2xl p-5 shadow-glow w-[220px]">
              <div className="text-4xl font-display font-bold"><Counter to={98} suffix="%" /></div>
              <div className="text-xs text-white/85 mt-1">Patient satisfaction across our care programs</div>
            </div>
            <div className="absolute -top-6 -left-4 glass rounded-2xl p-4 shadow-soft w-[200px] animate-float">
              <div className="text-3xl font-display font-bold text-brand-gradient"><Counter to={48} />h</div>
              <div className="text-xs text-muted-foreground mt-1">Average time to first visit</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-4 py-1.5 text-xs font-semibold backdrop-blur">
            Why Choose Us
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-white">
            Care your family can trust — at every step of healing.
          </h2>
          <p className="mt-5 text-white/85 text-lg">
            We combine medical excellence with the warmth of family. Here's what sets Harmony apart.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <Reveal key={p.t} delay={i * 70}>
                <li className="flex items-start gap-4 rounded-2xl glass-dark p-4 text-white">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-white text-primary grid place-items-center shadow-glow">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold">{p.t}</div>
                    <div className="text-sm text-white/80 mt-0.5">{p.d}</div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <a
            href="tel:8307437043"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white text-primary px-6 py-4 font-semibold hover:scale-[1.03] transition shadow-glow"
          >
            <Phone className="w-5 h-5" /> Talk to a Care Coordinator
          </a>
        </Reveal>
      </div>
    </section>
  );
}
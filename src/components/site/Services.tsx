import { Stethoscope, Activity, MessageSquare, HandHelping, HeartHandshake, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Stethoscope,
    title: "Nursing Services",
    desc: "Skilled nursing including wound care, medication management, chronic disease monitoring, and post-hospitalization support — all provided by licensed RNs and LPNs.",
  },
  {
    icon: Activity,
    title: "Physical Therapy",
    desc: "Restore mobility, reduce pain, and rebuild strength after injury, surgery, or a fall with personalized in-home physical therapy plans.",
  },
  {
    icon: MessageSquare,
    title: "Speech Therapy",
    desc: "Regain communication skills and improve swallowing function following stroke, brain injury, or neurological conditions.",
  },
  {
    icon: HandHelping,
    title: "Occupational Therapy",
    desc: "Learn or relearn daily living activities — dressing, cooking, bathing — to maximize independence and safety at home.",
  },
  {
    icon: HeartHandshake,
    title: "Medical Social Services",
    desc: "Emotional counseling, community resource coordination, advance care planning, and support for families navigating complex health challenges.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
              Our Services
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Comprehensive <span className="text-brand-gradient">In-Home Care</span> Tailored to You
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A complete spectrum of medically-led services delivered with warmth, dignity, and clinical excellence.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="group relative h-full rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-200/60 via-transparent to-blue-300/60 hover:from-[#0e57ef] hover:to-[#1c17de] transition-all duration-500">
      <div className="relative h-full rounded-3xl bg-white p-7 overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-glow">
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-brand-gradient opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500" />
        <div className="relative w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="mt-5 text-xl font-display font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
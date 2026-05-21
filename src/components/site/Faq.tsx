import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Does insurance or Medicare cover your services?", a: "Yes. We accept Medicare, Medicaid, and most private insurance plans. Our team can verify your benefits for free before you start care." },
  { q: "What areas do you serve?", a: "We primarily serve Round Rock, Austin, Georgetown, and surrounding Williamson County communities. Call us to confirm your address." },
  { q: "How quickly can care start?", a: "Usually within 48 hours of your initial assessment. In urgent cases, we can often begin the next day." },
  { q: "Do I need a doctor's referral?", a: "A doctor's order is required for Medicare-covered skilled services. We can help coordinate with your physician." },
  { q: "Can I receive both nursing and therapy at the same time?", a: "Absolutely. Many clients receive a combination of nursing, PT, OT, and speech therapy — all coordinated by our care team." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
              FAQ
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Questions, <span className="text-brand-gradient">answered honestly</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">Everything you need to know before starting care.</p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? "bg-white shadow-glow border-transparent" : "bg-white/60 border-border hover:border-blue-200"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-lg text-foreground">{f.q}</span>
                    <span className={`shrink-0 w-9 h-9 rounded-xl grid place-items-center transition-all duration-300 ${isOpen ? "bg-brand-gradient text-white rotate-45" : "bg-blue-50 text-primary"}`}>
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
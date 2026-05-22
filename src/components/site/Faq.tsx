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
    <section id="faq" className="relative py-[50px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Side: 60% FAQ Content */}
          <div className="space-y-8">
            <Reveal>
              <div className="text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
                  FAQ
                </div>
                <h2 className="mt-4 text-[32px] md:text-[40px] font-bold leading-tight md:leading-[50px]">
                  Questions, <span className="text-brand-gradient">answered honestly</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground">Everything you need to know before starting care.</p>
              </div>
            </Reveal>

            <div className="space-y-3">
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
                        <span className="font-display font-semibold text-base md:text-lg text-foreground">{f.q}</span>
                        <span className={`shrink-0 w-9 h-9 rounded-xl grid place-items-center transition-all duration-300 ${isOpen ? "bg-brand-gradient text-white rotate-45" : "bg-blue-50 text-primary"}`}>
                          <Plus className="w-5 h-5" />
                        </span>
                      </button>
                      <div
                        className="grid transition-all duration-500 ease-out"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed text-sm md:text-base">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Side: 40% Map Section */}
          <Reveal delay={150} className="w-full lg:sticky lg:top-[120px]">
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow border border-blue-100/50 bg-white p-3 h-[480px]">
              <iframe
                title="Harmony Residential Care Service Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.7985551060206!2d-97.67935192432783!3d30.498450974698173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d1e81c166eb7%3A0x704d41941a452db6!2s1104%20S%20Mays%20St%20%23107%2C%20Round%20Rock%2C%20TX%2078664%2C%20USA!5e0!3m2!1sen!2snp!4v1779490425627!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
              
              {/* Floating Service Coverage glass card */}
              <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl shadow-glow border border-white/20">
                <h3 className="font-display font-bold text-foreground text-sm">Our Service Coverage Area</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Proudly providing top-tier in-home healthcare services across Round Rock, North Austin, Georgetown, and Williamson County.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Available 24/7 for support</span>
                  <a href="tel:512-555-0199" className="hover:underline">Call Us Today</a>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
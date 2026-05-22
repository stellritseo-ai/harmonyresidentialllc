import { useMemo, useState } from "react";
import { Stethoscope, Activity, MessageSquare, HandHelping, HeartHandshake, ArrowRight, Search, LayoutGrid } from "lucide-react";
import { Reveal } from "./Reveal";
import svcNursing from "@/assets/svc-nursing.jpg";
import svcPhysical from "@/assets/svc-physical.jpg";
import svcSpeech from "@/assets/svc-speech.jpg";
import svcOccupational from "@/assets/svc-occupational.jpg";
import svcSocial from "@/assets/svc-social.jpg";

const services = [
  {
    icon: Stethoscope,
    image: svcNursing,
    title: "Nursing Services",
    category: "Nursing",
    desc: "Skilled in-home nursing — wound care, medication management, and post-hospital recovery by licensed RNs.",
  },
  {
    icon: Activity,
    image: svcPhysical,
    title: "Physical Therapy",
    category: "Physical Therapy",
    desc: "Personalized therapy plans to restore mobility, reduce pain, and rebuild strength after surgery or injury.",
  },
  {
    icon: MessageSquare,
    image: svcSpeech,
    title: "Speech Therapy",
    category: "Speech Therapy",
    desc: "Regain communication and swallowing function after stroke, brain injury, or neurological conditions.",
  },
  {
    icon: HandHelping,
    image: svcOccupational,
    title: "Occupational Therapy",
    category: "Occupational Therapy",
    desc: "Relearn daily living skills — dressing, cooking, bathing — to maximize independence and safety at home.",
  },
  {
    icon: HeartHandshake,
    image: svcSocial,
    title: "Medical Social Services",
    category: "Medical Social Services",
    desc: "Emotional counseling, resource coordination, and family support for navigating complex health journeys.",
  },
];

const categories = [
  "All",
  "Nursing",
  "Physical Therapy",
  "Speech Therapy",
  "Occupational Therapy",
  "Medical Social Services",
] as const;

export function Services() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      const matchCat = active === "All" || s.category === active;
      const matchQ =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <section id="services" className="relative py-[50px] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
              Our Services
            </div>
            <h2 className="mt-4 text-[32px] md:text-[40px] font-bold leading-tight md:leading-[50px]">
              Comprehensive <span className="text-brand-gradient">In-Home Care</span> Tailored to You
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A complete spectrum of medically-led services delivered with warmth, dignity, and clinical excellence.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 hidden lg:flex lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const isActive = c === active;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all border ${
                      isActive
                        ? "bg-brand-gradient text-white border-transparent shadow-glow"
                        : "glass text-foreground/75 border-white/40 hover:text-primary hover:border-primary/30"
                    }`}
                    aria-pressed={isActive}
                  >
                    {c === "All" && <LayoutGrid className="w-3.5 h-3.5" />}
                    {c}
                  </button>
                );
              })}
            </div>
            <div className="relative lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services…"
                aria-label="Search services"
                className="w-full rounded-full glass border border-white/40 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-muted-foreground">
            <p className="text-base">No services match your search.</p>
            <button
              onClick={() => {
                setActive("All");
                setQuery("");
              }}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {filtered.length > 0 && (
          <Reveal>
            <div className="mt-16 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/50 border border-blue-100/60 rounded-[2rem] p-8 w-full mx-auto shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div>
                <h4 className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight">
                  Not sure which care program is right for you?
                </h4>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our clinical coordinators are here to evaluate your needs and build a custom home care plan. Schedule your free consultation today.
                </p>
              </div>
              <a
                href="#contact"
                className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-gradient text-white px-6 py-4 font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, image, title, desc }: { icon: any; image: string; title: string; desc: string }) {
  return (
    <div className="group relative h-full rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-200/70 via-white to-blue-300/60 hover:from-[#0e57ef] hover:to-[#1c17de] transition-all duration-500 shadow-soft hover:shadow-glow">
      <div className="relative h-full rounded-[22px] bg-white overflow-hidden flex flex-col transition-transform duration-500 group-hover:-translate-y-1.5">
        {/* Image wrapper - responsive height (h-48 on mobile, h-56 on desktop) */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            width={800}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          {/* Top tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-semibold text-white tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Home Care
            </span>
          </div>
        </div>

        {/* Body wrapper - responsive padding (p-6 on mobile, p-7 on desktop) */}
        <div className="relative p-6 pt-9 sm:p-7 sm:pt-10 flex flex-col flex-1">
          {/* Floating icon badge - responsive size & offset */}
          <div className="absolute -top-6 left-5 sm:-top-7 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-gradient grid place-items-center shadow-glow ring-4 ring-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 z-10">
            <Icon className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-white" />
          </div>
          {/* Title - responsive typography */}
          <h3 className="text-lg sm:text-xl font-display font-bold text-foreground tracking-tight">{title}</h3>
          {/* Description - responsive spacing */}
          <p className="mt-2.5 sm:mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
          {/* Action button - responsive spacing */}
          <a
            href="#contact"
            className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
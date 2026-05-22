import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Linda G.",
    city: "Round Rock",
    text: "After my mother's hip surgery, the physical therapist from Harmony Residential Care came to our home three times a week. She was patient, professional, and mom loved her. I cannot recommend them enough.",
  },
  {
    name: "James T.",
    city: "Austin",
    text: "Their speech therapy helped my father speak clearly again after his stroke. The nurse was also wonderful at managing his medications. Truly a blessing.",
  },
  {
    name: "Patricia M.",
    city: "Georgetown",
    text: "I was nervous about hiring home health care for my aunt with dementia. The Medical Social Worker guided us through everything — from insurance to emotional support. Excellent service.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-[50px] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/40" />
      <div className="absolute -bottom-32 -left-20 w-[480px] h-[480px] rounded-full bg-blue-200/40 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
              Testimonials
            </div>
            <h2 className="mt-4 text-[32px] md:text-[40px] font-bold leading-tight md:leading-[50px]">
              Trusted by <span className="text-brand-gradient">families like yours</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">Real stories from the people we proudly serve.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 100} className="h-full">
              <div className="relative h-full flex flex-col justify-between glass rounded-[2rem] p-8 shadow-glow hover:shadow-soft hover:-translate-y-1 transition duration-300">
                <Quote className="absolute -top-4 -left-4 w-14 h-14 text-primary/15" />
                <div>
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-5 h-5 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base text-foreground/85 leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4 border-t border-blue-100/50 pt-5">
                  <div className="w-11 h-11 rounded-full bg-brand-gradient grid place-items-center text-white font-display font-bold text-base shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}, TX</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white px-6 py-3 font-semibold shadow-glow hover:scale-[1.03] transition"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
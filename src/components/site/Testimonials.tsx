import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/40" />
      <div className="absolute -bottom-32 -left-20 w-[480px] h-[480px] rounded-full bg-blue-200/40 blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
              Testimonials
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Trusted by <span className="text-brand-gradient">families like yours</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">Real stories from the people we proudly serve.</p>
          </div>
        </Reveal>

        <div className="mt-14 relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full shrink-0 px-2">
                  <div className="relative mx-auto max-w-3xl glass rounded-[2rem] p-8 md:p-12 shadow-glow">
                    <Quote className="absolute -top-4 -left-4 w-14 h-14 text-primary/15" />
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="w-5 h-5 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed italic">"{t.text}"</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-gradient grid place-items-center text-white font-display font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display font-bold">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.city}, TX</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full glass grid place-items-center hover:shadow-soft transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-brand-gradient" : "w-2 bg-blue-200"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full glass grid place-items-center hover:shadow-soft transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white px-6 py-3 font-semibold shadow-glow hover:scale-[1.03] transition"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
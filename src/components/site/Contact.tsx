import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section id="contact" className="relative py-[50px] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 to-white" />
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
            Get in Touch
          </div>
          <h2 className="mt-4 text-[32px] md:text-[39px] font-bold leading-tight md:leading-[49px]">
            Let's build a <span className="text-brand-gradient">care plan</span> together
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach out for a free consultation. Our care coordinators will respond within one business hour.
          </p>

          <div className="mt-8 space-y-4">
            <InfoCard icon={<Phone className="w-5 h-5" />} title="Call us" lines={["830-743-7043"]} href="tel:8307437043" />
            <InfoCard icon={<Mail className="w-5 h-5" />} title="Email" lines={["harmonyresicaretx@gmail.com"]} href="mailto:harmonyresicaretx@gmail.com" />
            <InfoCard icon={<MapPin className="w-5 h-5" />} title="Visit us" lines={["1104 S Mays St, Suite 107", "Round Rock, TX 78664"]} />
            <InfoCard icon={<Clock className="w-5 h-5" />} title="Hours" lines={["Mon – Fri: 8:00 AM – 6:00 PM", "On-call nurse 24/7"]} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              const formData = new FormData(e.currentTarget);
              const data = {
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                service: formData.get("service"),
                message: formData.get("message"),
              };
              
              try {
                const response = await fetch("https://formsubmit.co/ajax/harmonyresicaretx@gmail.com", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  },
                  body: JSON.stringify(data)
                });
                
                if (response.ok) {
                  setSent(true);
                  e.currentTarget.reset();
                  setTimeout(() => setSent(false), 5000);
                } else {
                  alert("There was an error sending your message. Please try again or call us directly.");
                }
              } catch (error) {
                console.error("Error submitting form:", error);
                alert("There was an error sending your message. Please try again or call us directly.");
              } finally {
                setLoading(false);
              }
            }}
            className="glass rounded-[2rem] p-6 md:p-8 shadow-glow"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" placeholder="Jane Smith" />
              <Field label="Phone Number" name="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="mt-4">
              <Field label="Email Address" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
              <select name="service" required className="w-full rounded-2xl bg-white/80 border border-border px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition">
                <option value="">Select a service</option>
                <option>Pediatric Care (Trach / Vent / G-Tube)</option>
                <option>Personal Assistance (PAS / PHC)</option>
                <option>Not sure yet — need a consultation</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Brief Message</label>
              <textarea name="message" rows={4} required placeholder="Tell us a little about your needs…" className="w-full rounded-2xl bg-white/80 border border-border px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient text-white px-6 py-4 font-semibold shadow-glow hover:scale-[1.02] transition disabled:opacity-60"
            >
              <Send className="w-5 h-5" /> {loading ? "Sending..." : sent ? "Message Sent — we'll be in touch!" : "Send Message"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">Your information is private and never shared.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white/80 border border-border px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
      />
    </div>
  );
}

function InfoCard({ icon, title, lines, href }: { icon: React.ReactNode; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl glass p-4 shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-gradient text-white grid place-items-center shadow-glow">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-foreground font-medium">{l}</div>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
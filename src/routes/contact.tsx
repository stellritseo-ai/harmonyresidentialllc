import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import serviceBg from "@/assets/service-hero-bg.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Building,
  Activity,
  CheckCircle,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Our Round Rock Office | Harmony Residential Care" },
      { name: "description", content: "Get in touch with us 24/7. Call (830) 743-7043 for clinical nursing support or schedule an in-person care assessment at our Round Rock, TX office." },
      { property: "og:title", content: "Contact Us | Harmony Residential Care" },
      { property: "og:description", content: "Reach our office or 24/7 on-call nurse line. Schedule a free home care benefits assessment." },
    ],
  }),
  component: ContactPage,
});

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [careTypes, setCareTypes] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleCheckboxChange = (type: string) => {
    setCareTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (careTypes.length === 0) {
      setErrorMsg("Please select at least one Type of Care Needed.");
      return;
    }

    setLoading(true);

    const ageLabels: Record<string, string> = {
      infant: "Infant (0-1 year)",
      child: "Child (2-12 years)",
      teen: "Teen (13-21 years)",
      adult: "Adult (22-64 years)",
      senior: "Senior (65+ years)",
    };

    const urgencyLabels: Record<string, string> = {
      immediate: "Within 24 hours (Urgent)",
      soon: "Within 1 week",
      planning: "Planning ahead",
      research: "Just researching",
    };

    // Maps care types to display labels
    const careLabels = careTypes
      .map((type) => {
        if (type === "peds") return "Pediatric Home Health (Trach/Vent/G-Tube)";
        if (type === "pas") return "Personal Assistance Services (PAS)";
        if (type === "phc") return "Primary Home Care (PHC)";
        return "Not sure yet — need a consultation";
      })
      .join(", ");

    const data = {
      source: "Contact Page Inquiry Form",
      name: fullName,
      phone: phone,
      email: email,
      ageCategory: ageLabels[age] || age,
      careNeeded: careLabels,
      urgency: urgencyLabels[urgency] || urgency,
      message: message,
      preferredContact: contactMethod,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);
      if (response.ok && result?.ok !== false) {
        setFormSubmitted(true);
      } else {
        setErrorMsg(
          result?.error ||
            "There was an error sending your request. Please try again or call us directly at (830) 743-7043.",
        );
      }
    } catch (error) {
      console.error("Error submitting contact page form:", error);
      setErrorMsg(
        "There was an error sending your request. Please try again or call us directly at (830) 743-7043.",
      );
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "Do I need a doctor's order to receive care?",
      a: "For unskilled nurse care (pediatric home health), yes — we require a physician's order to initiate care. For Personal Assistance Services (PAS) or Primary Home Care (PHC) involving bathing, meals, and light housekeeping, a doctor's order is typically not needed. Call us and we will guide you through your specific case.",
    },
    {
      q: "Do you accept Medicaid / insurance?",
      a: "Yes. We accept Texas Medicaid (STAR Kids, STAR+PLUS), VA Community Care (for veterans), most private insurance plans, and managed care organizations (MCOs). We also offer private pay arrangements. Call us with your details, and we'll conduct a free benefits check for you.",
    },
    {
      q: "How soon can you start care?",
      a: "For urgent care situations, we can often initiate services within 24 to 48 hours. For standard personal care starts, the timeline is 3 to 5 business days. Complex pediatric cases requiring ventilator or tracheostomy scheduling typically require 48 to 72 hours to ensure safe nurse matching.",
    },
    {
      q: "Can I request a specific caregiver (gender, language)?",
      a: "Yes. We make every effort to honor preferences for caregiver gender, language (bilingual Spanish-speaking aides are available), and overall personality fit. We want your family to feel completely comfortable.",
    },
    {
      q: "Do you provide a free in-home consultation?",
      a: "Yes, absolutely. We provide a no-obligation, free initial assessment at your home or at the hospital prior to discharge. Contact us to schedule an appointment with a supervising nurse.",
    },
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Page Hero Section */}
      <PageHero
        title="Contact Us"
        description="We're Here for You — 24 Hours a Day, 7 Days a Week."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        bgImage={serviceBg}
      />

      {/* Quick Contact Options */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm font-body">Get In Touch</span>
          <h3 className="text-3xl font-bold font-display text-brand-deep">Choose the Way That Works Best for You</h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Phone Call",
              detail: "(830) 743-7043",
              desc: "Best for immediate needs, urgent starts or voice calls.",
              icon: Phone,
              action: "tel:8307437043",
              btnText: "Call Now",
            },
            {
              title: "Email Inquiry",
              detail: "harmonyresicaretx@gmail.com",
              desc: "Best for non-urgent questions, referrals, and follow-ups.",
              icon: Mail,
              action: "mailto:harmonyresicaretx@gmail.com",
              btnText: "Email Us",
            },
            {
              title: "Visit Our Office",
              detail: "1104 S Mays St, Suite 107",
              desc: "Located in Round Rock, TX. Visits are available by appointment.",
              icon: Building,
              action: "https://maps.google.com/?q=1104+S+Mays+St+Suite+107+Round+Rock+TX+78664",
              btnText: "Get Directions",
            },
            {
              title: "24/7 Clinical Hotline",
              detail: "(830) 743-7043",
              desc: "Speak to an on-call nurse supervisor for clinical emergencies.",
              icon: Activity,
              action: "tel:8307437043",
              btnText: "Call Nurse Line",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 text-center space-y-4 hover:shadow-soft hover:border-brand/20 transition-all duration-300 flex flex-col justify-between"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto">
                  <card.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-brand-deep font-display text-lg">{card.title}</h4>
                <p className="text-sm font-bold text-foreground">{card.detail}</p>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{card.desc}</p>
              </div>
              <a
                href={card.action}
                target={card.action.startsWith("http") ? "_blank" : undefined}
                rel={card.action.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-full py-2.5 px-4 rounded-xl border border-brand text-brand font-bold text-xs hover:bg-brand hover:text-white transition-colors duration-300 block"
              >
                {card.btnText}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Form & On-Call Nurse Section */}
      <section className="py-16 md:py-24 bg-muted border-y border-border px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Form (7 columns) */}
          <motion.div
            className="lg:col-span-7 bg-card border border-border rounded-3xl p-6 md:p-10 shadow-soft"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-display text-brand-deep mb-2">Send Us a Message</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body mb-8">
              Fill out the form below and we'll respond within 2 business hours (or faster if urgent). For immediate assistance, please call us directly at <a href="tel:8307437043" className="text-brand font-bold hover:underline">(830) 743-7043</a>.
            </p>

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-brand text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(512) 555-0199"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-brand text-sm"
                      />
                    </div>
                  </div>

                  {/* Email and Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-brand text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Patient's Age *</label>
                      <select
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-brand text-sm text-foreground"
                      >
                        <option value="">Select Age Category</option>
                        <option value="infant">Infant (0-1 year)</option>
                        <option value="child">Child (2-12 years)</option>
                        <option value="teen">Teen (13-21 years)</option>
                        <option value="adult">Adult (22-64 years)</option>
                        <option value="senior">Senior (65+ years)</option>
                      </select>
                    </div>
                  </div>

                  {/* Type of Care Needed */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">Type of Care Needed *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: "peds", label: "Pediatric Home Health (Trach/Vent/G-Tube)" },
                        { id: "pas", label: "Personal Assistance Services (PAS) – Bathing, meals" },
                        { id: "phc", label: "Primary Home Care (PHC) – Housekeeping, dressing" },
                        { id: "consult", label: "Not sure yet — need a consultation" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className="flex items-start gap-3 p-3 rounded-xl border border-border bg-background hover:bg-muted/40 cursor-pointer text-xs"
                        >
                          <input
                            type="checkbox"
                            checked={careTypes.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                            className="mt-0.5 accent-brand"
                          />
                          <span className="text-foreground/85 font-medium">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">How Urgent? *</label>
                    <select
                      required
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-brand text-sm text-foreground"
                    >
                      <option value="">Select Timeline</option>
                      <option value="immediate">Within 24 hours (Urgent)</option>
                      <option value="soon">Within 1 week</option>
                      <option value="planning">Planning ahead</option>
                      <option value="research">Just researching</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">Message (Tell us about your loved one's needs)</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about symptoms, clinical history, scheduling hours..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-brand text-sm text-foreground"
                    />
                  </div>

                  {/* Contact Method */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">Preferred Contact Method *</label>
                    <div className="flex gap-6">
                      {["Phone Call", "Email", "Text Message"].map((method) => (
                        <label key={method} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            required
                            value={method}
                            checked={contactMethod === method}
                            onChange={(e) => setContactMethod(e.target.value)}
                            className="accent-brand"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="space-y-4 pt-2">
                    {errorMsg && (
                      <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-xs font-medium text-red-700">
                        {errorMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-brand-gradient text-white font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity duration-300 shadow-glow disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" /> {loading ? "Sending Request..." : "Send Message"}
                    </button>
                    <p className="text-[10px] text-muted-foreground text-center font-body">
                      By submitting this form, you agree to be contacted by Harmony Residential Care LLC regarding your inquiry. We never share or sell your information.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-4 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold font-display text-brand-deep">Thank You, {fullName}!</h4>
                    <p className="text-sm text-muted-foreground font-body max-w-md mx-auto">
                      Your message has been sent successfully. One of our supervising nurses will contact you via <strong className="text-foreground">{contactMethod}</strong> within 2 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFullName("");
                      setPhone("");
                      setEmail("");
                      setAge("");
                      setCareTypes([]);
                      setUrgency("");
                      setMessage("");
                      setContactMethod("");
                    }}
                    className="py-2.5 px-6 rounded-xl border border-brand text-brand font-bold text-xs hover:bg-brand hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side: 24/7 On-Call Nurse Details (5 columns) */}
          <motion.div
            className="lg:col-span-5 bg-brand-deep text-white rounded-3xl p-8 space-y-6 shadow-glow relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1 py-1 px-3 rounded-full text-[10px] bg-red-500/20 text-red-300 font-extrabold uppercase tracking-widest border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping mr-1" /> Live Clinical Line
              </span>
              
              <h3 className="text-xl font-bold font-display flex items-center gap-2">
                🩺 What Happens When You Call After Hours?
              </h3>
              
              <p className="text-sm text-white/80 leading-relaxed font-body">
                Unlike most agencies that direct you to an answering service or voicemail, Harmony Residential Care has a licensed clinical supervisor on call 24/7/365 at <a href="tel:8307437043" className="font-bold underline text-white hover:text-blue-200 font-body">(830) 743-7043</a>.
              </p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-4">
              <h4 className="font-bold font-display text-sm text-blue-300">When You Call:</h4>
              <ul className="space-y-3 text-xs text-white/80 font-body">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                  <span>A real nurse answers directly (no recording or message centers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                  <span>They access your loved one's specific clinical plan in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                  <span>They diagnose alarms, offer clinical steps, or dispatch backup care</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-4">
              <h4 className="font-bold font-display text-sm text-blue-300">When to Call the 24/7 Nurse:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-white/70 font-body">
                <li>• Vent/Trach Alarm & Clutter</li>
                <li>• G-Tube Dislodgment</li>
                <li>• Missed medication doses</li>
                <li>• Sudden fevers or congestion</li>
                <li>• Caregiver sick call out</li>
              </ul>
            </div>

            <div className="bg-red-500/15 border border-red-500/20 rounded-xl p-4 space-y-2 text-xs">
              <h4 className="font-bold text-red-300 flex items-center gap-1.5 uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4" /> Call 911 Immediately If:
              </h4>
              <p className="text-[10px] text-white/70 leading-relaxed font-body">
                The patient is not breathing, has no pulse, severe bleeding, choking, or experiences symptoms of a heart attack/stroke. Always prioritize 911, then call us.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Office Location & Working Map Section */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map details (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Find Us</span>
            <h3 className="text-3xl font-bold font-display text-brand-deep">Visit Our Round Rock Office</h3>
            
            <div className="space-y-3 font-body">
              <p className="text-lg font-bold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand" /> 1104 S Mays St, Suite 107
              </p>
              <p className="text-sm text-muted-foreground pl-7">Round Rock, TX 78664</p>
            </div>

            <div className="border-t border-border pt-6 space-y-4 text-sm font-body text-muted-foreground">
              <h4 className="font-bold text-foreground">Landmarks & Directions:</h4>
              <ul className="space-y-2 text-xs">
                <li>• Located near the intersection of S Mays St and E Palm Valley Blvd</li>
                <li>• Directly across the street from Round Rock High School</li>
                <li>• Suite 107 — enter through the main entrance, first door on the right</li>
                <li>• Free visitor parking lot is available on-site</li>
              </ul>
            </div>

            <div className="bg-muted p-5 rounded-2xl space-y-3 text-xs font-body text-muted-foreground">
              <h4 className="font-bold text-brand-deep">Office Hours (In-Person Visits):</h4>
              <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
              <p>Saturday – Sunday: Closed for walk-ins</p>
              <p className="font-semibold text-brand italic mt-2">
                * Note: Please call ahead to schedule an in-person meeting. We cannot guarantee staff availability for unscheduled visits.
              </p>
            </div>
          </div>

          {/* Interactive Google Map (7 columns) */}
          <motion.div
            className="lg:col-span-7 h-[350px] md:h-[450px] rounded-3xl border border-border overflow-hidden shadow-soft relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=1104%20S%20Mays%20St%20Suite%20107%20Round%20Rock%20TX%2078664&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </section>

      {/* Serving Cities Area Badge Grid */}
      <section className="py-20 md:py-24 bg-muted border-t border-border px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Coverage Area</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-deep">Do We Serve Your City?</h3>
            <p className="text-sm text-muted-foreground font-body max-w-xl mx-auto">
              We provide professional in-home nursing and personal care throughout Central Texas.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Round Rock",
              "Austin",
              "Georgetown",
              "Cedar Park",
              "Pflugerville",
              "Hutto",
              "Taylor",
              "Leander",
              "Kyle",
              "Buda",
              "San Marcos",
            ].map((city) => (
              <span
                key={city}
                className="py-2 px-4 rounded-xl bg-card border border-border text-sm font-semibold text-brand-deep shadow-sm hover:border-brand/20 transition-all cursor-default"
              >
                📍 {city}
              </span>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-body leading-relaxed max-w-md mx-auto italic">
            Don't see your city listed? Call us anyway. We often accommodate extended travels for complex pediatric care or urgent starts.
          </p>
        </div>
      </section>

      {/* Frequently Asked Contact Questions Accordion */}
      <section className="py-20 md:py-28 px-4 max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Quick Answers</span>
          <h3 className="text-3xl font-bold font-display text-brand-deep">Before You Call</h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-brand/10 transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-display font-bold text-foreground text-sm md:text-base hover:text-brand transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-border pt-3 font-body">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Business Hours Table Summary */}
      <section className="py-20 md:py-28 bg-muted border-t border-border px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Availability</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-deep">Department Hours Summary</h3>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft bg-card">
            <table className="w-full border-collapse text-left text-sm font-body">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-4">Department</th>
                  <th className="p-4">Operational Hours</th>
                  <th className="p-4">Contact Gateway</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {[
                  { dept: "Office / Administration", hours: "Mon – Fri, 8:00 AM – 6:00 PM", contact: "(830) 743-7043" },
                  { dept: "24/7 On-Call Clinical Supervisor", hours: "24 Hours / 7 Days / 365 Days", contact: "(830) 743-7043 (Direct)" },
                  { dept: "Email Response Timeline", hours: "Mon – Fri: 2 hours (Next-day if after hours)", contact: "harmonyresicaretx@gmail.com" },
                  { dept: "In-Person Administrative Meetings", hours: "Mon – Fri, 8:00 AM – 6:00 PM (Appointment)", contact: "Call to schedule" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/40 transition-colors">
                    <td className="p-4 font-semibold text-foreground">{row.dept}</td>
                    <td className="p-4">{row.hours}</td>
                    <td className="p-4 font-medium text-brand-deep">{row.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Emergency Disclaimer Alert Box */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-red-500/20 text-red-600 flex items-center justify-center flex-shrink-0 animate-pulse">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-extrabold font-display text-red-800 text-lg uppercase tracking-wider">
              ⚠️ This Is Not a Medical Emergency Service
            </h4>
            <p className="text-xs text-red-900/80 leading-relaxed font-body">
              If you or your loved one is experiencing a life-threatening emergency — such as trouble breathing, chest pain, severe bleeding, or loss of consciousness — please **call 911 immediately**. Harmony Residential Care LLC is not a substitute for emergency medical services.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate border-t border-white/10">
        <div className="absolute inset-0 -z-10 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold font-display">
              Let's Start the Conversation.
            </h3>
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
              Whether you are a parent bringing a ventilator-dependent child home, an adult child worried about an aging parent who lives alone, or a senior seeking basic home assistance — we are here to walk with you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-semibold max-w-2xl mx-auto pt-4 border-t border-white/10">
            <div className="space-y-1">
              <span className="text-blue-300 block text-xs">Call Anytime</span>
              <a href="tel:8307437043" className="hover:underline text-white font-extrabold">(830) 743-7043</a>
            </div>
            <div className="space-y-1">
              <span className="text-blue-300 block text-xs">Email Directly</span>
              <a href="mailto:harmonyresicaretx@gmail.com" className="hover:underline text-white font-extrabold break-all">harmonyresicaretx@gmail.com</a>
            </div>
            <div className="space-y-1">
              <span className="text-blue-300 block text-xs">Visit Suite 107</span>
              <span className="text-white font-extrabold">Round Rock, TX</span>
            </div>
          </div>

          <div className="text-[10px] text-blue-200 leading-relaxed font-body">
            <p>Harmony Residential Care LLC — 20+ years of trusted care for Texas families.</p>
            <p className="italic">Pediatric home health & personal assistance services. 24/7 on-call nurse line.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

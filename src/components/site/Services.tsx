import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  HandHelping,
  ArrowRight,
  Baby,
  Heart,
  Clock,
  Activity,
  HeartPulse,
  Soup,
  Wind,
  UserCheck,
  ShieldAlert,
  BookOpen,
  Pill,
  Bath,
  Shirt,
  Utensils,
  Smile,
  Sparkles,
  Accessibility,
  Dumbbell,
  Trash2,
  Footprints,
  CalendarCheck
} from "lucide-react";
import svcPersonalCare from "@/assets/svc-personal-care.png";
import svcWaiverNursing from "@/assets/svc-waiver-nursing.png";

const servicesData = {
  pediatric: {
    title: "Pediatric Home Health Care",
    subtitle: "Specialized Clinical Support",
    description: "Compassionate, high-quality private duty nursing and medical support for infants, children, and adolescents with complex medical needs. Our specialized caregivers help children thrive in the safety and comfort of their own homes.",
    image: svcWaiverNursing,
    badge: "Clinical Excellence",
    items: [
      {
        title: "Extended Hour Nursing Care",
        detail: "8-24 hours a day shift nursing",
        desc: "Continuous, one-on-one medical care from registered (RN) or licensed vocational (LVN) nurses, tailored for complex shift coverage.",
        icon: Clock,
      },
      {
        title: "Monitoring Vitals",
        detail: "Continuous health tracking",
        desc: "Regular assessment of temperature, blood pressure, heart rate, and oxygen saturation to ensure immediate clinical response.",
        icon: Activity,
      },
      {
        title: "Pain Management",
        detail: "Comfort and relief focus",
        desc: "Carefully calibrated pain relief protocols and assessment strategies to maximize your child's comfort and well-being.",
        icon: HeartPulse,
      },
      {
        title: "Gastrostomy Tube Care & Feeding",
        detail: "G-Tube feeding and hygiene",
        desc: "Professional enteral nutrition administration, site cleaning, tube maintenance, and troubleshooting for gastrostomy tubes.",
        icon: Soup,
      },
      {
        title: "Tracheostomy Care & Management",
        detail: "Trach suctioning and hygiene",
        desc: "Critical airway management, including suctioning, cleaning, and tube changes to ensure consistent, safe respiration.",
        icon: Stethoscope,
      },
      {
        title: "Ventilator Management",
        detail: "Mechanical ventilator support",
        desc: "Experienced clinical management of ventilator parameters, tubing, alarms, and emergency procedures for vent-dependent children.",
        icon: Wind,
      },
      {
        title: "Oxygen Management",
        detail: "Supplemental oxygen care",
        desc: "Administration and titration of oxygen, including monitoring pulse oximetry levels and caring for oxygen delivery equipment.",
        icon: Wind,
      },
      {
        title: "Personal Care Support",
        detail: "Bathing, hygiene & ADL help",
        desc: "Gentle assistance with basic activities of daily living, including bathing, hair care, dressing, and hygiene, customized to child needs.",
        icon: UserCheck,
      },
      {
        title: "Catheter Care",
        detail: "Urinary system care",
        desc: "Hygienic care, monitoring, and sanitization of catheter devices to optimize comfort and prevent urinary tract infections.",
        icon: ShieldAlert,
      },
      {
        title: "Disease Management & Education",
        detail: "Family education and training",
        desc: "Comprehensive teaching and supportive resources to help parents and families confidently understand and manage chronic illnesses.",
        icon: BookOpen,
      },
      {
        title: "Medication & IV Administration",
        detail: "Oral, IV, and injections",
        desc: "Precise dosing, tracking, and clinical administration of oral medicines, injections, and complex intravenous (IV) infusions.",
        icon: Pill,
      },
      {
        title: "Advanced Wound Care",
        detail: "Wound vac and dressings",
        desc: "Sterile dressing changes, wound bed hygiene, and active management of wound vacuum-assisted closure (wound vac) systems.",
        icon: Heart,
      },
      {
        title: "Daily Head-To-Toe Assessment",
        detail: "Comprehensive physical check",
        desc: "A systematic daily physical exam to review respiratory, cardiovascular, and neurological stability, detecting early warning signs.",
        icon: Stethoscope,
      },
    ]
  },
  pas: {
    title: "Personal Assistance Services (PAS)",
    subtitle: "Primary Home Care (PHC)",
    description: "Dedicated assistance with non-medical activities of daily living to help adults, seniors, and individuals with disabilities maintain independence, dignity, and a high quality of life in their own homes.",
    image: svcPersonalCare,
    badge: "Daily Independence",
    items: [
      {
        title: "Bathing Support",
        detail: "Safe hygiene assistance",
        desc: "Respectful, safe help with bathing or showering to maintain personal hygiene, skin health, and client comfort.",
        icon: Bath,
      },
      {
        title: "Dressing Assistance",
        detail: "Morning and evening prep",
        desc: "Help selecting comfortable, clean clothes and assistance with dressing or undressing to start and end the day right.",
        icon: Shirt,
      },
      {
        title: "Feeding Assistance",
        detail: "Nutritional support",
        desc: "Attentive feeding support, focusing on appropriate meal pacing, safe swallowing, and maintaining a dignified dining experience.",
        icon: Utensils,
      },
      {
        title: "Grooming & Hair Care",
        detail: "Personal styling & care",
        desc: "Assistance with brushing hair, styling, applying lotion, and other grooming needs to keep clients feeling refreshed.",
        icon: Smile,
      },
      {
        title: "Shaving & Oral Care",
        detail: "Dignified grooming support",
        desc: "Gentle help with shaving, brushing teeth, flossing, or denture care to maintain oral health and personal appearance.",
        icon: Sparkles,
      },
      {
        title: "Routine Skin & Hair Care",
        detail: "Basic skin protection",
        desc: "Applying moisturizers, checking for pressure areas, and basic hair maintenance to promote skin health and cleanliness.",
        icon: Sparkles,
      },
      {
        title: "Toileting & Incontinence Care",
        detail: "Private bathroom support",
        desc: "Highly discreet, respectful assistance with toileting, transfer to commodes, and timely changing of incontinence briefs.",
        icon: Accessibility,
      },
      {
        title: "Exercising Support",
        detail: "Range-of-motion & mobility",
        desc: "Assistance with light stretching, walking routines, and active or passive range-of-motion exercises to maintain strength.",
        icon: Dumbbell,
      },
      {
        title: "Light Cleaning",
        detail: "Living area upkeep",
        desc: "Dusting, sweeping, sanitizing key surfaces, and tidying up the client's primary living space to keep it clean and safe.",
        icon: Trash2,
      },
      {
        title: "Laundry Services",
        detail: "Bedding and clothing care",
        desc: "Washing, drying, folding, and putting away client's clothes, pajamas, towels, and bedsheets on a regular basis.",
        icon: Shirt,
      },
      {
        title: "Escort Assistance",
        detail: "Non-driving travel escort",
        desc: "Accompanying the client during walking, transfers, or riding in public transit or third-party vehicles (employee does not drive).",
        icon: Footprints,
      },
      {
        title: "Meal Preparation",
        detail: "Healthy cooking & prepping",
        desc: "Planning, cooking, and serving nutritious meals and snacks tailored to the client's medical dietary restrictions and tastes.",
        icon: Soup,
      },
      {
        title: "Self-Medication Assistance",
        detail: "Medication reminders",
        desc: "Providing timely reminders, opening pill containers, reading labels, and assisting with water to support medication compliance.",
        icon: Pill,
      },
      {
        title: "Ambulation Support",
        detail: "Safe walking & transfers",
        desc: "Help moving safely around the house, transferring from bed to wheelchair, and using walkers or canes effectively.",
        icon: Footprints,
      },
    ]
  }
};

const tabs = [
  { id: "pediatric" as const, label: "Pediatric Care", icon: Baby },
  { id: "pas" as const, label: "Personal Assistance (PAS / PHC)", icon: HandHelping }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 14 } }
};

export function Services() {
  const [activeTab, setActiveTab] = useState<"pediatric" | "pas">("pediatric");
  const activeData = servicesData[activeTab];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-[#fafbfe]">
      {/* Background aesthetics */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/70 via-white to-white" />
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-50/50 blur-3xl -z-10 animate-blob animate-float-slow" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary border border-blue-100/50 shadow-soft">
            <CalendarCheck className="w-3.5 h-3.5" />
            Specialized Care Programs
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground font-display">
            Our Professional <span className="text-brand-gradient">In-Home Services</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            We deliver clinical expertise and dedicated daily living support with absolute warmth, dignity, and excellence.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <div className="relative glass p-1.5 rounded-full flex gap-1.5 max-w-2xl w-full sm:w-auto shadow-soft border border-white/70">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 z-10 w-full sm:w-auto ${
                    isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={isActive}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-brand-gradient rounded-full -z-10 shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Services Interactive Dashboard */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-8 items-stretch"
            >
              {/* Top Banner: Hero Spotlight Card */}
              <div className="w-full">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-soft min-h-[320px] md:min-h-[280px] flex flex-col justify-end p-8 md:p-10 group bg-blue-950">
                  <img
                    src={activeData.image}
                    alt={activeData.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent z-10" />

                  <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 h-full mt-auto">
                    <div className="max-w-3xl">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white tracking-wider uppercase border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          {activeData.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-white mt-4 tracking-tight leading-tight font-display">
                        {activeData.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mt-1.5">
                        {activeData.subtitle}
                      </p>
                      <p className="mt-4 text-sm md:text-[15px] text-blue-100/90 leading-relaxed font-light max-w-2xl">
                        {activeData.description}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-blue-50 px-6 py-4 rounded-2xl text-sm font-bold tracking-wide shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Inquire About Care
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Grid: Interactive Sub-Services Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {activeData.items.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      className="glass hover:bg-primary rounded-2xl p-5 border border-white/50 hover:border-primary hover:shadow-glow transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-100/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-white/50 transition-all duration-300 group-hover:scale-105">
                        <ItemIcon className="w-5 h-5 text-primary group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-primary/80 group-hover:text-white/80 tracking-wider uppercase block mb-0.5 transition-colors duration-300">
                          {item.detail}
                        </span>
                        <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-white leading-tight transition-colors duration-300 truncate">
                          {item.title}
                        </h4>
                        <p className="text-[15px] text-muted-foreground group-hover:text-white/90 leading-relaxed mt-1.5 font-light transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/40 border border-white/80 rounded-[2.2rem] p-8 md:p-10 w-full mx-auto shadow-soft flex flex-col md:flex-row items-center justify-between gap-8 text-left backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10" />
          <div className="relative z-10 max-w-2xl">
            <h4 className="font-display font-extrabold text-xl md:text-2xl text-foreground tracking-tight">
              Need a Customized Care Assessment?
            </h4>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              Our clinical directors are available to evaluate your loved one's specific medical and personal assistance needs and coordinate a custom plan of care.
            </p>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient text-white px-7 py-4.5 font-bold text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 relative z-10"
          >
            Schedule Free Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
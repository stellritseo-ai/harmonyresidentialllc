import welcomeImg from "@/assets/welcome-care.jpg";
import whyImg from "@/assets/why-choose.jpg";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { Award, HeartPulse, Users } from "lucide-react";

export function Welcome() {
  return (
    <section id="about" className="relative py-[50px]">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[3/4] mt-10 animate-float">
              <img src={welcomeImg} alt="Therapist helping a senior" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[3/4] animate-float-slow">
              <img src={whyImg} alt="Nurse comforting senior patients" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-4 flex items-center gap-4 shadow-glow">
              <Award className="w-6 h-6 text-primary" />
              <div>
                <div className="font-display font-bold text-foreground"><Counter to={20} />+ Years</div>
                <div className="text-xs text-muted-foreground">of trusted experience</div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full bg-blue-200/40 blur-3xl" />
        </Reveal>

        <Reveal delay={120}>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
            About Harmony
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="text-brand-gradient">Harmony Residential Care LLC</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For two decades, Harmony Residential Care LLC has been a beacon of compassionate in-home health care for
            families in surrounding Texas communities. Our mission is simple: to help you or your loved
            one live safely, comfortably, and with dignity — right at home.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a dedicated team of compassionate caregivers, nurses, and coordinators, we treat every individual
            like family. Whether you need daily personal care, friendly companionship, shared living solutions, Participate-directed HPC, medication administration, or specialized nursing, we are here for you.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat icon={<Users className="w-5 h-5" />} value={<Counter to={500} suffix="+" />} label="Families served" />
            <Stat icon={<HeartPulse className="w-5 h-5" />} value={<Counter to={50} suffix="+" />} label="Care experts" />
            <Stat icon={<Award className="w-5 h-5" />} value={<Counter to={20} suffix=" yrs" />} label="In the community" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: React.ReactNode; label: string }) {
  return (
    <div className="glass rounded-2xl p-4 shadow-soft">
      <div className="w-9 h-9 rounded-xl bg-brand-gradient text-white grid place-items-center mb-2">{icon}</div>
      <div className="font-display font-bold text-xl text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

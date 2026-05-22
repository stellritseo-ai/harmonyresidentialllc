import { Phone, Mail, Award, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const team = [
  {
    name: "Dr. Sarah Jenkins, MD",
    designation: "Medical Director",
    badge: "Doctor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Over 15 years in geriatric medicine, specializing in comprehensive home-health clinical oversight.",
    phone: "8307437043",
    email: "sarah.jenkins@harmonyresicare.com",
    cert: "Board Certified Physician"
  },
  {
    name: "Marcus Vance, BSN, RN",
    designation: "Director of Nursing",
    badge: "Nurse",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Passionate about direct clinical excellence, coordinating customized medication & wound-care plans.",
    phone: "8307437043",
    email: "marcus.vance@harmonyresicare.com",
    cert: "Licensed RN / Wound Specialist"
  },
  {
    name: "Dr. Elena Rostova, DPT",
    designation: "Director of Rehabilitation",
    badge: "Doctor of PT",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Restores movement and instills confidence through highly personalized physical therapy regimes.",
    phone: "8307437043",
    email: "elena.rostova@harmonyresicare.com",
    cert: "Doctor of Physical Therapy"
  },
  {
    name: "Emily Watson, BSN, RN",
    designation: "Senior Case Manager",
    badge: "Nurse",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Dedicated to smooth transitions from hospital to home, organizing all social resources.",
    phone: "8307437043",
    email: "emily.watson@harmonyresicare.com",
    cert: "Licensed RN / Case Manager"
  }
];

export function Staff() {
  return (
    <section id="staff" className="relative py-[50px] overflow-hidden bg-brand-gradient text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 left-1/3 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
              Our Team
            </div>
            <h2 className="mt-4 text-[32px] md:text-[40px] font-bold leading-tight md:leading-[50px] text-white">
              Meet Our <span className="text-blue-200">Staff</span>
            </h2>
            <p className="mt-3 text-base text-white/80">
              Meet our caring and supportive healthcare staff.
            </p>
          </div>
        </Reveal>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 80}>
              <div className="group relative bg-white/10 backdrop-blur rounded-[2rem] p-4 shadow-soft hover:shadow-glow border border-white/10 transition-all duration-500 flex flex-col h-full justify-between">
                
                {/* Image Wrapper */}
                <div>
                  <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Floating Designation Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-soft backdrop-blur-sm uppercase tracking-wider">
                      {member.badge}
                    </div>

                    {/* Interactive overlay card details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="text-white space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold">
                          <Award className="w-4 h-4 text-blue-200" />
                          <span>{member.cert}</span>
                        </div>
                        <p className="text-xs text-blue-50 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="mt-5 px-1">
                    <h3 className="font-display font-bold text-lg text-white tracking-tight group-hover:text-blue-200 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-200/90 mt-1">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between px-1">
                  <span className="flex items-center gap-1 text-[11px] font-medium text-white/90 bg-white/10 px-2.5 py-1 rounded-lg">
                    <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                    Care Provider
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${member.phone}`}
                      title={`Call ${member.name}`}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white grid place-items-center hover:bg-white hover:text-primary transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      title={`Email ${member.name}`}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white grid place-items-center hover:bg-white hover:text-primary transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

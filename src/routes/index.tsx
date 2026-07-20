// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Hero } from "@/components/site/Hero";
// import { Welcome } from "@/components/site/Welcome";
// import { Services } from "@/components/site/Services";
// import { WhyChoose } from "@/components/site/WhyChoose";
// import { Testimonials } from "@/components/site/Testimonials";
// import { Faq } from "@/components/site/Faq";
// import { Staff } from "@/components/site/Staff";
// import { Contact } from "@/components/site/Contact";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Harmony Residential Care LLC — Trusted Home Health Care in Round Rock, TX" },
//       { name: "description", content: "20 years of trusted companionship, home maker personal care, shared living, DD waiver nursing, Participate-directed HPC, and medication administration across Round Rock, Austin, and Georgetown." },
//       { property: "og:title", content: "Harmony Residential Care LLC — Trusted Home Health Care" },
//       { property: "og:description", content: "Trusted companionship, home maker personal care, shared living, DD waiver nursing, Participate-directed HPC, and medication administration for seniors and individuals with disabilities in Central Texas." },
//       { property: "og:type", content: "website" },
//     ],
//     links: [{ rel: "canonical", href: "/" }],
//   }),
//   component: Index,
// });

// function SectionWrapper({ children, linkTo, linkText }: { children: React.ReactNode, linkTo?: string, linkText?: string }) {
//   return (
//     <div className="relative">
//       {children}
//       {linkTo && (
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
//           <Link
//             to={linkTo as any}
//             className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-primary/20 text-primary px-6 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition shadow-soft"
//           >
//             {linkText || "Learn More"}
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// function Index() {
//   return (
//     <>
//       <Hero />

//       <Welcome />


//       <Services />



//       <WhyChoose />



//       <Testimonials />


//       <Faq />
//       {/* <Staff /> */}
//       <Contact />
//     </>
//   );
// }

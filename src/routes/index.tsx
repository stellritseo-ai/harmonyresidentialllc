import { Link } from "@tanstack/react-router";
// Remove these
import { Hero } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Staff } from "@/components/site/Staff";
import { Contact } from "@/components/site/Contact";

function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Harmony Residential Care LLC"
          className="mx-auto h-24 mb-10"
        />

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 mb-8">
          🚧 Website Under Construction
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          We're Building
          <span className="block text-blue-400">
            Something Amazing
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-8 mb-10">
          Our new website is currently under development to provide a better
          experience for our patients and families.
          <br />
          We'll be launching soon.
        </p>

        {/* Contact */}
        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Need Immediate Assistance?
          </h2>

          <div className="space-y-3 text-slate-300">
            <p>
              📞 <a href="tel:+15125551234" className="text-blue-400 hover:underline">
                (512) 555-1234
              </a>
            </p>

            <p>
              ✉️ <a href="mailto:info@harmonyresidentialcare.com" className="text-blue-400 hover:underline">
                info@harmonyresidentialcare.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Harmony Residential Care LLC.
          All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

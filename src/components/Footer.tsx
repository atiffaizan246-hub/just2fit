import { HelpCircle, Phone, MapPin, Mail, MessageSquare, Flame } from "lucide-react";
import { BRAND_INFO } from "../data";

interface FooterProps {
  onJoinClick: () => void;
}

export default function Footer({ onJoinClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 font-sans pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Graphic elements */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-red-600/2 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#home");
              }}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-black italic text-lg shadow-lg">
                J2F
              </div>
              <span className="font-display font-black tracking-wider text-lg text-white">
                JUST <span className="text-red-650">2</span> FIT <span className="text-red-500 uppercase font-sans text-[10px] tracking-widest font-black inline-block sm:hidden ml-1">GYM</span>
              </span>
            </a>
            
            <p className="text-sm text-zinc-500 leading-relaxed">
              Serving Paharganj, Motia Khan, and Central New Delhi with high-precision resistance gear, custom nutritional tracking schedules, and dedicated physical personal coaching targets.
            </p>

            <div className="flex gap-3 pt-1">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-zinc-400 transition-colors"
                title="WhatsApp support helpline"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-zinc-400 transition-colors"
                title="Phone call hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigator anchor list */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase text-white font-bold tracking-widest font-mono">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); handleScroll("#home"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => { e.preventDefault(); handleScroll("#features"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); handleScroll("#about"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  About Our Gym
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  onClick={(e) => { e.preventDefault(); handleScroll("#facilities"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Gym Facilities
                </a>
              </li>
            </ul>
          </div>

          {/* More navigation maps */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase text-white font-bold tracking-widest font-mono">Members Area</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#plans"
                  onClick={(e) => { e.preventDefault(); handleScroll("#plans"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Membership Plans
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => { e.preventDefault(); handleScroll("#gallery"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Gym Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Contact Helpdesk
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onJoinClick}
                  className="text-red-500 hover:text-red-400 hover:underline transition-colors text-left focus:outline-none"
                >
                  Get Visitor Pass
                </button>
              </li>
            </ul>
          </div>

          {/* Operational timing parameters */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase text-white font-bold tracking-widest font-mono">Fitness Timings</h4>
            <div className="space-y-3.5 text-sm p-4 rounded-xl bg-zinc-900/30 border border-zinc-900/40">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-zinc-300">Monday – Sunday</span>
                <span className="font-mono text-white font-bold bg-red-600/10 border border-red-500/20 px-2 py-0.5 rounded text-[10px]">05:00 AM – 10:00 PM</span>
              </div>
              <p className="text-xs text-zinc-550 text-zinc-500 leading-normal">
                Open 7 days a week, including major public holidays, with constant trainer availability. Separated changing lockers & pristine shower ventilation is operational round the clock.
              </p>
            </div>
          </div>

        </div>

        {/* Human written SEO Keywords description paragraph for Paharganj gym visibility */}
        <div className="py-6 text-center text-[11px] text-zinc-600 border-b border-zinc-900" id="footer-seo-meta-copy text-zinc-700">
          <p className="max-w-4xl mx-auto leading-relaxed">
            JUST 2 FIT Gym is proudly registered as the best gym in Paharganj, New Delhi 110055. Our fitness club features certified weight training areas, intense cardio stations, crossfit drills, postural alignments, and elite personal exercises. Perfect location for athletes seeking high-spec fitness centers and affordable workout health spots near Motia Khan Police Station, Connaught Place, Karol Bagh, and Central Delhi.
          </p>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-550 text-zinc-500" id="footer-copyright-row">
          <div>
            © {currentYear} <span className="text-zinc-300 font-semibold uppercase">{BRAND_INFO.name}</span>. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Powering Delhi's Fitness Community</span>
            <span className="text-zinc-700">|</span>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("#about"); }} className="hover:text-zinc-300 transition-colors">Privacy & Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

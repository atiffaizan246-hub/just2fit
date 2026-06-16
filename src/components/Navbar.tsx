import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Flame } from "lucide-react";
import { BRAND_INFO } from "../data";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link checking
      const sections = ["home", "features", "about", "facilities", "plans", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Why Us", href: "#features", id: "features" },
    { name: "About", href: "#about", id: "about" },
    { name: "Facilities", href: "#facilities", id: "facilities" },
    { name: "Plans", href: "#plans", id: "plans" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900/60 shadow-lg py-3"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-black italic text-xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              J2F
            </div>
            <span className="font-display font-black tracking-wider text-xl text-white">
              JUST <span className="text-red-600">2</span> FIT
              <span className="hidden sm:inline text-xs font-bold font-sans tracking-[0.25em] text-zinc-500 uppercase ml-2 block">GYM</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium uppercase tracking-wider rounded-md transition-colors ${
                  activeSection === link.id
                    ? "text-red-500 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
                id={`lnk-${link.id}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="px-4 py-2 text-sm font-semibold text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg flex items-center gap-2 transition-all hover:bg-zinc-900/50"
              id="cta-nav-call"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg shadow-red-600/20 active:scale-95 transition-all text-center"
              id="cta-nav-join"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2 rounded-lg border border-zinc-900 focus:outline-none"
              id="btn-mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[60px] bg-zinc-950/98 backdrop-blur-lg z-40 transition-transform duration-300 lg:hidden flex flex-col justify-between p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-navigation-drawer"
      >
        <div className="flex flex-col space-y-4">
          <p className="text-xs uppercase text-zinc-600 tracking-widest font-bold">Navigation Menu</p>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`text-xl font-bold uppercase tracking-wide py-1.5 block ${
                activeSection === link.id ? "text-red-500 pl-2 border-l-2 border-red-500" : "text-zinc-300"
              }`}
              id={`lnk-mob-${link.id}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-3 pt-6 border-t border-zinc-900">
          <div className="flex items-center gap-3 mb-2 px-1">
            <div className="flex text-red-500 gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-xs text-zinc-400">4.8 Rating (519+ Reviews)</span>
          </div>
          
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-teal-650 hover:bg-teal-700 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 text-emerald-400 font-semibold flex items-center justify-center gap-2 transition-all text-center"
            id="cta-mob-whatsapp"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold flex items-center justify-center gap-2 border border-zinc-800 transition-all text-center"
            id="cta-mob-call"
          >
            <Phone className="w-5 h-5 text-red-500" />
            <span>Call {BRAND_INFO.phoneFormatted}</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              onJoinClick();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all"
            id="cta-mob-join"
          >
            <Flame className="w-5 h-5 animate-pulse" />
            <span>GET INITIARY PASS</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Facilities from "./components/Facilities";
import Testimonials from "./components/Testimonials";
import MembershipPlans from "./components/MembershipPlans";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import { BRAND_INFO } from "./data";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState("general");
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating shortcuts only when scrolled 300px past Hero
      setShowFloatingButtons(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenJoinModal = (planId: string = "general") => {
    setSelectedPlanId(planId);
    setModalOpen(true);
  };

  const handleSelectPlanFromPricing = (planId: string) => {
    setSelectedPlanId(planId);
    // Smoothly scroll down to the contact form and focus or preselect it
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // Display a quick confirmation toast
    showToast(`Pre-selected plan package. Let us know your details below!`);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleModalSuccess = () => {
    showToast("Visitor pass created! Present your name at recepion.");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans text-zinc-100 overflow-x-hidden selection:bg-red-600 selection:text-white" id="root-viewport">
      
      {/* Floating Dynamic Informational Toast Indicator */}
      {toastMessage && (
        <div
          className="fixed top-20 right-4 z-50 p-4 rounded-xl bg-zinc-900 border border-red-500/30 text-white font-semibold text-xs sm:text-sm flex items-center gap-3 shadow-2xl animate-fade-in"
          id="global-toast-flag"
        >
          <div className="w-5 h-5 bg-red-600/10 rounded border border-red-500/20 text-red-500 flex items-center justify-center font-bold font-mono">
            i
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header Sticky Navigation */}
      <Navbar onJoinClick={() => handleOpenJoinModal("general")} />

      {/* 2. Full-Screen Cinematic Hero */}
      <Hero onJoinClick={() => handleOpenJoinModal("general")} />

      {/* 3. Why Choose Us (8 Value Propositions Panel) */}
      <WhyChooseUs />

      {/* 4. About Us (Story & Highlight Collage Section) */}
      <AboutUs />

      {/* 5. Gym Operational Facilities Selector */}
      <Facilities />

      {/* 6. Gym Membership Packages Comparison */}
      <MembershipPlans onSelectPlan={handleSelectPlanFromPricing} />

      {/* 7. Image Filters Responsive Gallery with Lightbox */}
      <Gallery />

      {/* 8. Verified Testimonials inspired by real local Google Reviews */}
      <Testimonials />

      {/* 9. Contact Section with validated inquiries form and Live Map */}
      <Contact
        preselectedPlanId={selectedPlanId}
        onClearPreselected={() => setSelectedPlanId("")}
      />

      {/* 10. Footer Section with SEO key metrics */}
      <Footer onJoinClick={() => handleOpenJoinModal("general")} />

      {/* 11. Modal Popup for visitors/lead forms */}
      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedPlanId={selectedPlanId}
        onSuccess={handleModalSuccess}
      />

      {/* Floating Action Buttons: Call, WhatsApp, Scroll to Top */}
      {showFloatingButtons && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none" id="floating-reception-shortcuts">
          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center border border-zinc-800 shadow-lg active:scale-90 transition-all cursor-pointer"
            title="Scroll to Top"
            id="floating-btn-scroll-top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          {/* Quick Phone call */}
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600 text-red-500 flex items-center justify-center shadow-2xl active:scale-90 transition-all hover:scale-105"
            title="Call JUST 2 FIT Reception"
            id="floating-btn-call"
          >
            <Phone className="w-5 h-5 fill-current text-red-500" />
          </a>

          {/* WhatsApp Direct Help */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl shadow-emerald-605/30 active:scale-95 transition-all hover:scale-105"
            title="Chat on WhatsApp"
            id="floating-btn-whatsapp"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </a>
        </div>
      )}

    </div>
  );
}

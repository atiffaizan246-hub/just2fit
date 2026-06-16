import { motion } from "motion/react";
import { Check, Flame, HelpCircle } from "lucide-react";
import { MEMBERSHIP_PLANS } from "../data";
import { MembershipPlan } from "../types";

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export default function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  return (
    <section id="plans" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-red-650/4 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Flexible Billing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2">
            No Hidden Fees. <span className="text-red-600">Select Your Plan.</span>
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Honest, affordable subscription options with no long-term locked commitments. Upgrade or freeze your membership whenever needed.
          </p>
        </div>

        {/* List of cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="plans-grid">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-300 ${
                plan.isPopular
                  ? "bg-zinc-900 border-2 border-red-600 shadow-2xl shadow-red-950/20"
                  : "bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800"
              }`}
              id={`plan-card-${plan.id}`}
            >
              {/* Top Badge ribbon */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white font-bold uppercase tracking-widest text-[10px] shadow-md shadow-red-600/40 flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-current" />
                  <span>{plan.badge}</span>
                </div>
              )}

              {/* Package Details */}
              <div>
                <h3 className="text-xs uppercase text-zinc-400 tracking-widest font-black font-mono">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl sm:text-5xl font-display font-black text-white">{plan.price}</span>
                  <span className="text-zinc-500 font-medium text-sm">/ {plan.period}</span>
                </div>

                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features list */}
                <ul className="mt-8 space-y-4 border-t border-zinc-900 pt-8" id={`plan-features-${plan.id}`}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.isPopular ? "bg-red-500/10 text-red-500" : "bg-zinc-900 text-zinc-500"
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-zinc-300 font-medium leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 rounded-xl text-center font-bold font-sans tracking-wide uppercase transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 active:scale-95"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700"
                  }`}
                  id={`btn-select-plan-${plan.id}`}
                >
                  {plan.id === "personal" ? "Book Personal Trainer" : "Enlist This Plan"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick FAQ / Note flag */}
        <div className="mt-14 max-w-2xl mx-auto flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900/60">
          <HelpCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-zinc-400 space-y-1">
            <p className="font-semibold text-zinc-300">Are there registration or cancellation penalties?</p>
            <p className="leading-relaxed">No, there are zero upfront registration fees or sneaky cancellation charges. We support simple cash, UPI (Paytm/GPay/PhonePe), or bank card payments directly at the gym reception desk.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

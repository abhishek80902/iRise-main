import { useState } from "react";
import { ChevronDown, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who is this consultation meant for?",
    a: "This session is suitable for people experiencing digestion problems, low energy, joint discomfort, or anyone looking for a natural and sustainable way to improve overall health."
  },
  {
    q: "How is Water Therapy different from medicines?",
    a: "Water Therapy focuses on improving hydration, oxygen flow, and internal balance so the body can heal naturally, instead of suppressing symptoms with long-term medication."
  },
  {
    q: "Is this a medical or diagnostic consultation?",
    a: "No. This is a lifestyle and hydration guidance session. No medicines are prescribed, and it does not replace medical diagnosis or professional treatment."
  },
  {
    q: "What can I expect after the 20-minute call?",
    a: "You will gain clarity on whether Water Therapy may support your condition and what practical steps you can take next — without pressure, sales tactics, or obligation."
  }
];

export default function FaqAndFooter() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* ================= FAQ SECTION ================= */}
      <section className="relative bg-[#F7F9FC] py-28">
        <div className="max-w-4xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
            <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto">
              Clear answers to help you decide calmly and confidently.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5">
            {faqs.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className="
                    bg-white
                    rounded-2xl
                    border border-slate-200
                    shadow-sm
                    transition
                  "
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-6 text-left"
                  >
                    <span className="font-semibold text-slate-800">
                      {item.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-blue-600"
                    >
                      <ChevronDown />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
             VitalSync Health
            </h3>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
              A calm, natural approach focused on restoring hydration, internal
              balance, and long-term wellbeing without dependency on medicines.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  p-2.5 rounded-full
                  border border-slate-200
                  text-slate-500
                  hover:text-blue-600
                  hover:border-blue-300
                  transition
                "
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  p-2.5 rounded-full
                  border border-slate-200
                  text-slate-500
                  hover:text-blue-600
                  hover:border-blue-300
                  transition
                "
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <p className="text-lg font-medium text-slate-900 mb-6">
              Explore
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="hover:text-slate-900 cursor-pointer">How It Works</li>
              <li className="hover:text-slate-900 cursor-pointer">Free Consultation</li>
              <li className="hover:text-slate-900 cursor-pointer">Water Therapy Basics</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="text-lg font-medium text-slate-900 mb-6">
              Legal
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="hover:text-slate-900 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-slate-900 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="border-t border-slate-200 py-8 text-center text-xs text-slate-500 px-6">
          <p className="max-w-4xl mx-auto leading-relaxed">
            This website is for educational and guidance purposes only.
            Water Therapy does not replace medical diagnosis or treatment.
            Always consult a qualified healthcare professional for medical concerns.
          </p>

          <p className="mt-3">
            © 2026 Water Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

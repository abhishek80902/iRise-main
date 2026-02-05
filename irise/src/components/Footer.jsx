import { useState } from "react";
import { ChevronDown, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Yeh consultation kis ke liye hai?",
    a: "Yeh session un logon ke liye hai jo digestion issues, low energy, joint discomfort face kar rahe hain — ya phir jo ek natural aur sustainable tareeke se apni overall health improve karna chahte hain."
  },
  {
    q: "Water Therapy medicines se kaise alag hai?",
    a: "Water Therapy hydration, oxygen flow aur internal balance ko improve karti hai, taaki body naturally heal kar sake — bina symptoms ko suppress kiye."
  },
  {
    q: "Kya yeh medical ya diagnostic consultation hai?",
    a: "Nahi. Yeh lifestyle aur hydration guidance session hai. Ismein koi medicines prescribe nahi hoti aur yeh medical diagnosis ka replacement nahi hai."
  },
  {
    q: "20-minute call ke baad mujhe kya clarity milegi?",
    a: "Aap samajh paayenge ki Water Therapy aapke liye kaise kaam kar sakti hai aur next practical steps kya ho sakte hain — bina kisi pressure ke."
  }
];

export default function FaqAndFooter() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* ================= FAQ SECTION ================= */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">

        {/* subtle grid background (SAME AS PREVIOUS SECTIONS) */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #E5E7EB 1px, transparent 1px),
              linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px"
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Aapke Kuch Questions Ke Answers
            </h2>

            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />

           <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto italic text-center">
  Taaki aap bina confusion aur pressure ke decision le sakein.
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
      <footer className="relative bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              RecoverNow
            </h3>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
              Ek natural aur calm approach jo hydration, internal balance
              aur long-term wellbeing par focus karta hai bina medicines par dependency ke.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition"
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
            Yeh website sirf educational aur guidance purpose ke liye hai.
            Water Therapy medical diagnosis ya treatment ka replacement nahi hai.
            Kisi bhi medical concern ke liye qualified healthcare professional se salah zaroor lein.
          </p>

          <p className="mt-3">
            © 2026 RecoverNow. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

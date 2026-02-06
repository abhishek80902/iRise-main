import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle,
  ArrowRight,
  Minus,
  Plus,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import ContactFormModal from "../components/Modal"; // ✅ existing form

export default function ChoiceSection() {
  const [openForm, setOpenForm] = useState(false);
  const [mode, setMode] = useState("call"); // call | whatsapp

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">
        {/* SUBTLE GRID */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #E5E7EB 1px, transparent 1px),
              linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Aaj Aapke Paas{" "}
              <span className="text-blue-600">Do Raaste</span>{" "}
              Hain!
            </h2>

            <div className="mt-4 w-24 h-1 bg-blue-600 rounded-full mx-auto" />

            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed italic text-center">
              Ek raasta wahi hai jo aap pehle se jaante hain.
              <br />
              <span className="block mt-2 not-italic font-semibold text-slate-800">
                Doosra aapki body ko mauka deta hai khud balance restore karne ka.
              </span>
            </p>
          </motion.div>

          {/* PATHS (UNCHANGED) */}
          <div className="relative grid gap-16 md:grid-cols-2">
            {/* OLD PATH */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8 text-slate-400">
                <XCircle />
                <h3 className="text-xl font-semibold text-slate-600">
                  Pehle Wala Raasta
                </h3>
              </div>

              <ul className="space-y-5 text-slate-600">
                {[
                  "Baar-baar doctor visits aur tests",
                  "Roz medicines par dependency",
                  "Temporary relief, phir wahi problem",
                  "Poora try karne ke baad bhi stuck feel hona"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Minus className="w-4 h-4 mt-1 text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-xl bg-white border border-slate-200 text-sm text-slate-500">
                Is approach mein symptoms control hote hain,
                lekin body ka balance restore nahi hota.
              </div>
            </motion.div>

            {/* NEW PATH */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl bg-white border border-emerald-200 p-10 shadow-xl"
            >
              <motion.div
                animate={{ opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-[3px] rounded-3xl blur-xl pointer-events-none bg-gradient-to-br from-emerald-200/40 to-blue-200/40"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 text-emerald-600">
                  <CheckCircle />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Healing Ka Naya Raasta
                  </h3>
                </div>

                <ul className="space-y-5 text-slate-700">
                  {[
                    "Body ko samajhna ki woh kaise kaam karti hai",
                    "Water Therapy ke through natural healing support",
                    "Internal balance aur organs ki efficiency improve karna",
                    "Healing bina daily life disturb kiye"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Plus className="w-4 h-4 mt-1 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-700">
                  Yeh approach body ko dobara sikhata hai
                  kaise khud heal karna hai.
                </div>
              </div>
            </motion.div>
          </div>

          {/* TRANSITION MESSAGE (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-slate-600 leading-relaxed italic">
              Yeh choice doctors ya medicines ke against nahi hai.
            </p>

            <p className="mt-3 text-lg text-slate-600 leading-relaxed italic">
              Yeh ek aise raaste ko explore karne ka decision hai
              jahan body ko{" "}
              <span className="font-semibold text-slate-900 not-italic">
                dabaya nahi, samjha aur support kiya jaata hai
              </span>.
            </p>
          </motion.div>

          {/* CTA + WHATSAPP (ONLY CHANGE HERE) */}
          <div className="mt-16 flex justify-center gap-4 px-3">

  {/* CALL */}
  <motion.button
    onClick={() => {
      setMode("call");
      setOpenForm(true);
    }}
    whileHover={{
      y: -3,
      scale: 1.05,
      boxShadow: "0 20px 44px rgba(16,185,129,0.35)"
    }}
    whileTap={{ scale: 0.96 }}
    className="
      w-full sm:w-auto
      max-w-[260px]
      px-6 sm:px-12
      py-4 sm:py-6
      rounded-full
      font-semibold
      text-white
      bg-gradient-to-r from-emerald-500 to-blue-600
      shadow-xl
      whitespace-nowrap
      text-sm sm:text-base
      inline-flex items-center justify-center gap-2
    "
  >
    Call Now
  </motion.button>

  {/* WHATSAPP */}
  <motion.button
    onClick={() => {
      setMode("whatsapp");
      setOpenForm(true);
    }}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.96 }}
    className="
      w-full sm:w-auto
      max-w-[260px]
      px-6 sm:px-10
      py-4 sm:py-6
      rounded-full
      font-semibold
      text-emerald-700
      bg-emerald-50
      border border-emerald-200
      shadow-sm
      whitespace-nowrap
      text-sm sm:text-base
      flex items-center justify-center gap-2
    "
  >
    <MessageCircle size={18} />
    WhatsApp
  </motion.button>

</div>

        </div>
      </section>

      {/* FORM MODAL */}
      <ContactFormModal
        open={openForm}
        onClose={() => setOpenForm(false)}
        mode={mode}
      />
    </>
  );
}

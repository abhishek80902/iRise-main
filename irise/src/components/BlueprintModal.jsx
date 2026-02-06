import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import ContactFormModal from "../components/Modal"; // 👈 YOUR FORM
import guidePhoto from "../assets/react.svg";

/* =======================
   AUTHORITY POINTS (HINGLISH)
======================= */
const points = [
  "Logon ki digestion, energy aur overall balance better karne mein madad ki sirf ye samajhkar ki body paani ko kaise use karti hai",
  "Symptoms chupane ke bajaye, pehle ye samajhne par focus karta hai ki problem ho kyun rahi hai",
  "Simple Water Therapy principles use karta hai taaki organs naturally better kaam kar paayein",
  "Na medicines, na treatments sirf aisi guidance jo body ke saath kaam kare, against nahi",
  "Un logon ka bharosa jinhone temporary relief nahi, balki long term health clarity chuni"
];

export default function AuthoritySection() {
  /* FORM STATE */
  const [openForm, setOpenForm] = useState(false);
  const [mode, setMode] = useState("call"); // call | whatsapp

  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">

        {/* subtle medical grid */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* MAIN CARD — UNCHANGED */}
          <div className="
            rounded-[28px]
            bg-gradient-to-br from-[#050A2A] via-[#0A1445] to-[#040821]
            border border-white/10
            p-10 md:p-16
            grid md:grid-cols-2 gap-14
            shadow-2xl
          ">

            {/* LEFT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 blur-sm" />

                <img
                  src={guidePhoto}
                  alt="Health Guide"
                  className="relative w-[280px] h-[280px] object-cover rounded-full shadow-2xl"
                />

                <div className="mt-6 text-center relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-4xl font-serif">
                    “
                  </span>

                  <p className="text-xl font-semibold text-white">XYZ</p>

                  <div className="mt-1 inline-flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Founder, RecoverNow
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-white">
                Kaun Aapki <span className="text-blue-400">Healing Journey</span> Guide Karega?
              </h2>

              <ul className="space-y-6">
                {points.map((text, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-4 text-white/85"
                  >
                    <CheckCircle className="text-blue-400 mt-1 shrink-0" />
                    <span className="text-lg leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-8 text-white/60 text-sm max-w-xl">
                Yeh guidance body ko force nahi karti  
                balki usse naturally heal karne ka mauka deti hai.
              </p>
            </motion.div>
          </div>

          {/* CTA — UPDATED ONLY */}
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

import { motion } from "framer-motion";
import { useState } from "react";
import {
  HeartPulse,
  Droplets,
  Activity,
  ShieldCheck,
  Info,
  MessageCircle
} from "lucide-react";
import ContactFormModal from "../components/Modal"; // ✅ existing form

const points = [
  {
    title: "Personal Health Analysis",
    desc: "Hum aapki health history, daily routine aur hydration habits ko samajhte hain bina koi medicines prescribe kiye.",
    icon: HeartPulse,
    color: "#2563EB"
  },
  {
    title: "How Water Therapy Fits You",
    desc: "Aapke body aur lifestyle ke hisaab se samjhaya jata hai ki Water Therapy aapki internal healing ko kaise support kar sakti hai.",
    icon: Droplets,
    color: "#10B981"
  },
  {
    title: "Improving Organ Efficiency",
    desc: "Aap samajhte hain ki sahi hydration kaise organs ko better kaam karne mein help karta hai aur body ke stress ko kam karta hai.",
    icon: Activity,
    color: "#6366F1"
  },
  {
    title: "Healing Without Disrupting Life",
    desc: "Ye bataya jata hai ki bina routine badle, healing process kaise dheere dheere shuru ho sakta hai bina extra pressure ke.",
    icon: ShieldCheck,
    color: "#059669"
  }
];

export default function ConsultationRoadmap() {
  /* FORM STATE */
  const [openForm, setOpenForm] = useState(false);
  const [mode, setMode] = useState("call"); // call | whatsapp

  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">
        {/* SUBTLE GRID */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #E5E7EB 1px, transparent 1px),
              linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* HEADING (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              20 Minutes Jo Aapki Health Ka{" "}
              <span className="text-blue-600">
                Roadmap Change Kar Denge
              </span>
            </h2>

            <div className="mt-4 w-24 h-1 bg-blue-600 rounded-full mx-auto" />

            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed italic">
              Is call par hum{" "}
              <span className="not-italic font-semibold text-slate-800">
                koi medicine prescribe nahi
              </span>{" "}
              karenge.
              <br />
              Hum sirf aapki{" "}
              <span className="not-italic font-semibold text-emerald-600">
                lifestyle aur body hydration
              </span>{" "}
              ko analyze karenge.
            </p>
          </motion.div>

          {/* ROADMAP (UNCHANGED) */}
          <div className="relative grid gap-10 sm:grid-cols-2">
            {points.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="relative rounded-3xl bg-white border border-slate-200 p-8 shadow-md"
                >
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, ${item.color}12, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 flex gap-6 items-start">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <div className="w-10 h-0.5 bg-slate-300 rounded-full mb-3" />
                      <p className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* REASSURANCE BOX (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <div className="relative flex gap-5 items-start bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 rounded-2xl px-8 py-7 shadow-sm">
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-blue-500 to-emerald-500" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 shrink-0">
                <Info className="w-6 h-6 text-blue-600" />
              </div>

              <p className="text-slate-700 text-lg leading-relaxed italic">
                Agar aapne kaafi solutions try kiye hain aur phir bhi better feel
                nahi kar rahe,{" "}
                <span className="font-semibold text-slate-900 not-italic">
                  yeh call aapko samjhata hai ki body ne ab tak respond kyun nahi kiya
                </span>{" "}
                aur aage kaunsa step sahi ho sakta hai.
              </p>
            </div>
          </motion.div>

          {/* CTA + WHATSAPP (ONLY CHANGE) */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-5">
            {/* CALL */}
            <motion.button
              onClick={() => {
                setMode("call");
                setOpenForm(true);
              }}
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0 18px 40px rgba(16,185,129,0.35)"
              }}
              className="
                px-16 py-5
                rounded-full
                font-semibold
                text-white
                bg-gradient-to-r from-emerald-500 to-blue-600
                shadow-xl
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
              className="
                px-12 py-5
                rounded-full
                font-semibold
                text-emerald-700
                bg-emerald-50
                border border-emerald-200
                shadow-sm
                flex items-center gap-3
              "
            >
              <MessageCircle size={20} />
              WhatsApp Now
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

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Droplets,
  Activity,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import ContactFormModal from "../components/Modal"; // ✅ existing form

/* =======================
   HEADLINE ROTATION
======================= */
const headlineParts = [
  "Water Therapy koi chamatkar nahi, ye ek pure science hai.",
  "Ye sharir ke natural systems ko sahi environment deta hai."
];

/* =======================
   CORE PRINCIPLES
======================= */
const principles = [
  {
    title: "Internal Deep Cleaning",
    desc: "Ye sharir ko andar se detox karti hai. Jab internal safai hoti hai, tabhi body heal karna shuru karti hai.",
    icon: Droplets,
    color: "#2563EB"
  },
  {
    title: "Cellular Oxygen Boost",
    desc: "Blood circulation aur oxygen delivery improve hoti hai, jisse cells ko nayi energy milti hai.",
    icon: Activity,
    color: "#059669"
  },
  {
    title: "Acidity Neutralization",
    desc: "Body ke acidic imbalance ko kam karke healing ke liye sahi internal environment banaya jata hai.",
    icon: HeartPulse,
    color: "#4F46E5"
  }
];

/* =======================
   MICRO SCIENCE
======================= */
const microScience = [
  "Supports lymphatic drainage",
  "Improves cellular hydration",
  "Encourages metabolic balance",
  "Promotes internal pH stability"
];

export default function WaterTherapySection() {
  const [headline, setHeadline] = useState("");
  const [index, setIndex] = useState(0);

  /* FORM STATE */
  const [openForm, setOpenForm] = useState(false);
  const [mode, setMode] = useState("call"); // call | whatsapp

  /* Typing Effect (stable) */
  useEffect(() => {
    let char = 0;
    const current = headlineParts[index % headlineParts.length];

    const type = setInterval(() => {
      if (char <= current.length) {
        setHeadline(current.slice(0, char));
        char++;
      } else {
        clearInterval(type);
        setTimeout(() => {
          const erase = setInterval(() => {
            if (char >= 0) {
              setHeadline(current.slice(0, char));
              char--;
            } else {
              clearInterval(erase);
              setIndex(i => i + 1);
            }
          }, 28);
        }, 1600);
      }
    }, 42);

    return () => clearInterval(type);
  }, [index]);

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EDEFF3]">

        {/* SUBTLE WAVE */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.1]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,160 C240,220 480,100 720,130 960,160 1200,220 1440,180 L1440,0 L0,0 Z"
            fill="#93C5FD"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* STABLE HEADING */}
          <div className="relative mb-6 min-h-[4.8rem] sm:min-h-[5.6rem] md:min-h-[6.4rem]">
            <h2 className="absolute inset-0 opacity-0 text-3xl sm:text-4xl md:text-5xl font-bold">
              Water Therapy koi chamatkar nahi, ye ek pure science hai.
            </h2>

            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              <span className="text-blue-600">{headline}</span>
              <span className="ml-2 inline-block w-[3px] h-[1em] bg-blue-600 animate-pulse align-middle" />
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-20 italic">
            Jab hydration, oxygen aur internal balance sahi hota hai,
            <span className="font-semibold text-slate-800 not-italic">
              {" "}tab body naturally heal karna shuru karti hai.
            </span>
          </p>

          {/* CORE PRINCIPLES (UNCHANGED) */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-24">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative rounded-3xl p-8 bg-white border border-slate-200 text-left shadow-sm"
                >
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, ${item.color}10, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {item.title}
                      <span
                        className="block mt-2 w-12 h-0.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MICRO SCIENCE (UNCHANGED) */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="grid sm:grid-cols-2 gap-5 bg-white/80 backdrop-blur border border-slate-200 rounded-2xl px-7 py-7 shadow-sm shadow-blue-100/40">
              {microScience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TRUST NOTE (UNCHANGED) */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
              <ShieldCheck size={16} />
              Science-backed • Drug-free • Non-invasive
            </div>

            <p className="text-slate-600 text-lg leading-relaxed italic">
              Water Therapy body ko force nahi karti.
              <br />
              <span className="font-semibold text-slate-900 not-italic">
                Ye sirf internal barriers hataati hai, taaki healing naturally ho sake.
              </span>
            </p>
          </div>

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
    text-white
    bg-[#075E54]
    border border-[#064C44]
    shadow-sm
    whitespace-nowrap
    text-sm sm:text-base
    flex items-center justify-center gap-2
  "
>
  <MessageCircle size={18} />
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

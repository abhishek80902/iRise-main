import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Droplets,
  Activity,
  HeartPulse,
  ShieldCheck
} from "lucide-react";

/* =======================
   HEADLINE ROTATION
======================= */
const headlineParts = [
  "Water Therapy Is Not a Miracle",
  "Water Therapy Is Backed by Science",
  "Water Therapy Creates the Healing Environment"
];

/* =======================
   CORE PRINCIPLES
======================= */
const principles = [
  {
    title: "Internal Deep Cleaning",
    desc: "Supports the body’s natural detox systems by helping flush waste and metabolic toxins.",
    icon: Droplets,
    color: "#2563EB"
  },
  {
    title: "Cellular Oxygen Boost",
    desc: "Improves oxygen transport in the blood, helping tired cells regain efficiency.",
    icon: Activity,
    color: "#059669"
  },
  {
    title: "Acidity Neutralization",
    desc: "Reduces internal acidity to create conditions where natural repair processes activate.",
    icon: HeartPulse,
    color: "#4F46E5"
  }
];

/* =======================
   SCIENCE SIGNALS
======================= */
const microScience = [
  "Supports lymphatic flow",
  "Improves cellular hydration",
  "Encourages metabolic balance",
  "Promotes internal pH stability"
];

export default function WaterTherapySection() {
  const [headline, setHeadline] = useState("");
  const [index, setIndex] = useState(0);

  /* typing effect */
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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EDEFF3]">

      {/* SUBTLE WATER FLOW */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,160 C240,220 480,100 720,130 960,160 1200,220 1440,180 L1440,0 L0,0 Z"
          fill="#93C5FD"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* HEADING (UNCHANGED STYLE) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          <span className="text-blue-600">{headline}</span>
          <span className="ml-2 inline-block w-[3px] h-[1em] bg-blue-600 animate-pulse" />
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-20">
          When hydration, oxygen, and internal balance improve,
          <span className="font-semibold text-slate-800">
            {" "}the body naturally shifts toward proper healing.
          </span>
        </p>

        {/* CORE PRINCIPLES */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {principles.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="
                  relative
                  rounded-3xl
                  p-8
                  bg-white
                  border border-slate-200
                  text-left
                  shadow-sm
                "
              >
                {/* soft inner depth */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, ${item.color}08, transparent 65%)`
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
                    <span className="relative inline-block">
                      {item.title}
                      <span
                        className="block mt-2 w-12 h-0.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </span>
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CLINICAL EVIDENCE PANEL */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="
            rounded-3xl
            bg-white
            border border-slate-200
            shadow-sm
            px-8 py-10
          ">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {microScience.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXPLANATION */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-300" />
            <span className="text-lg tracking-widest text-slate-400 uppercase">
              How it works
            </span>
            <div className="flex-1 h-px bg-slate-300" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            These principles work together not individually
            <span className="font-medium text-slate-800">
              {" "}to create an internal environment where the body can restore balance naturally.
            </span>
          </p>
        </div>

        {/* TRUST NOTE */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="
            inline-flex items-center gap-2
            px-5 py-2
            rounded-full
            bg-emerald-50
            text-emerald-700
            text-sm font-medium
            mb-6
          ">
            <ShieldCheck size={16} />
            Science-backed • Drug-free • Non-invasive
          </div>

          <p className="text-slate-600 text-lg leading-relaxed">
            Water Therapy doesn’t force the body to heal.
            <br />
            <span className="font-semibold text-slate-900">
              It removes internal barriers so healing can begin naturally.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <motion.a href="/book-call" whileTap={{ scale: 0.96 }}>
            <motion.button
              whileHover={{
                y: -3,
                boxShadow: "0 18px 40px rgba(37,99,235,0.35)"
              }}
              className="
                px-16 py-5
                rounded-full
                font-semibold
                text-white
                bg-gradient-to-r from-emerald-500 to-blue-600
                shadow-xl
                focus:outline-none
                focus-visible:ring-4
                focus-visible:ring-blue-300/40
              "
            >
              Book Your 1:1 Session Now
            </motion.button>
          </motion.a>
        </div>

      </div>
    </section>
  );
}

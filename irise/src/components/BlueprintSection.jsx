import { motion } from "framer-motion";
import {
  HeartPulse,
  Droplets,
  Activity,
  ShieldCheck
} from "lucide-react";

const points = [
  {
    title: "Personal Health Analysis",
    desc: "We understand your health history, daily routine, and hydration patterns without prescribing any medicines.",
    icon: HeartPulse,
    color: "#2563EB"
  },
  {
    title: "How Water Therapy Fits You",
    desc: "Based on your body and lifestyle, we explain how Water Therapy can support your internal healing process.",
    icon: Droplets,
    color: "#10B981"
  },
  {
    title: "Improving Organ Efficiency",
    desc: "Learn how proper hydration helps organs function more efficiently and reduces internal stress on the body.",
    icon: Activity,
    color: "#6366F1"
  },
  {
    title: "Healing Without Disrupting Life",
    desc: "Discover how healing can begin without changing your daily routine or adding extra pressure.",
    icon: ShieldCheck,
    color: "#059669"
  }
];

export default function ConsultationRoadmap() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">

      {/* Subtle grid */}
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

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            A 20-Minute Session That Can{" "}
            <span className="text-blue-600">
              Change Your Health Roadmap
            </span>
          </h2>

          <div className="mt-4 w-24 h-1 bg-blue-600 rounded-full mx-auto" />

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            This is not a sales call and no medicines are prescribed.
            <br />
            We simply help you understand what your body needs to begin healing naturally.
          </p>
        </motion.div>

        {/* ================= ROADMAP GRID ================= */}
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
                className="
                  relative
                  rounded-3xl
                  bg-white
                  border border-slate-200
                  p-8
                  shadow-lg
                "
              >
                {/* animated border glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-[2px] rounded-3xl blur-lg pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}33, transparent)`
                  }}
                />

                <div className="relative z-10 flex gap-6 items-start">

                  {/* ICON */}
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="shrink-0"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>
                  </motion.div>

                  {/* TEXT */}
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

        {/* ================= TRUST STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="mt-24 max-w-3xl mx-auto text-center">
  <p className="
    relative
    text-slate-700
    text-lg
    leading-relaxed
    bg-white
    border border-slate-200
    rounded-2xl
    px-8 py-6
    shadow-sm
  ">
    If you’ve tried multiple solutions and still don’t feel better,
    this call helps you understand{" "}
    <span className="font-semibold text-slate-900">
      why your body hasn’t responded yet
    </span>{" "}
    and what can be done next.
  </p>
</div>

        </motion.div>

        {/* ================= CTA ================= */}
        <div className="mt-16 flex justify-center">
          <motion.a href="/book-call" whileTap={{ scale: 0.95 }}>
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0 18px 40px rgba(16,185,129,0.35)"
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
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

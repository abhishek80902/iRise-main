import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function ChoiceSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">

      {/* soft medical grid */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Right Now, You’re Standing at{" "}
            <span className="text-blue-600">a Crossroad</span>
          </h2>

          <div className="mt-4 w-24 h-1 bg-blue-600 rounded-full mx-auto" />

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            One direction continues what you already know.
            <br />
            The other gives your body the chance to restore balance naturally.
          </p>
        </motion.div>

        {/* ================= PATHS ================= */}
        <div className="grid gap-14 md:grid-cols-2">

          {/* ---------- OLD PATH ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              rounded-3xl
              bg-white
              border border-slate-200
              p-10
              shadow-md
            "
          >
            <div className="flex items-center gap-3 mb-8 text-slate-400">
              <XCircle />
              <h3 className="text-xl font-semibold text-slate-600">
                The Familiar Path
              </h3>
            </div>

            <ul className="space-y-5 text-slate-600 leading-relaxed">
              <li>• Repeated doctor visits and constant tests</li>
              <li>• Long-term dependency on medicines</li>
              <li>• Temporary relief followed by recurrence</li>
              <li>• Feeling stuck despite sincere effort</li>
            </ul>

            <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-500">
              This approach focuses on controlling symptoms not restoring balance.
            </div>
          </motion.div>

          {/* ---------- NEW PATH ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
              relative
              rounded-3xl
              bg-white
              border border-emerald-200
              p-10
              shadow-xl
            "
          >
            {/* gentle glow */}
            <motion.div
              animate={{ opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-[3px] rounded-3xl blur-xl pointer-events-none bg-gradient-to-br from-emerald-200/40 to-blue-200/40"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 text-emerald-600">
                <CheckCircle />
                <h3 className="text-xl font-semibold text-slate-900">
                  The Healing Path
                </h3>
              </div>

              <ul className="space-y-5 text-slate-700 leading-relaxed">
                <li>• Understanding how your body truly functions</li>
                <li>• Supporting healing through Water Therapy</li>
                <li>• Improving internal balance and organ efficiency</li>
                <li>• Healing without disrupting daily life</li>
              </ul>

              <div className="mt-8 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-700">
                This approach helps the body relearn how to heal itself.
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= TRANSITION MESSAGE ================= */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 max-w-3xl mx-auto text-center text-lg text-slate-600 leading-relaxed"
        >
          This choice isn’t about rejecting doctors or medicine.
          <br />
          It’s about exploring a path where your body is{" "}
          <span className="font-semibold text-slate-900">
            supported instead of suppressed
          </span>.
        </motion.p>

        {/* ================= CTA ================= */}
        <div className="mt-16 flex justify-center">
          <motion.a href="/book-call" whileTap={{ scale: 0.96 }}>
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0 20px 44px rgba(16,185,129,0.35)"
              }}
              className="
                inline-flex items-center gap-3
                px-16 py-6
                rounded-full
                font-semibold
                text-white
                bg-gradient-to-r from-emerald-500 to-blue-600
                shadow-xl
              "
            >
              Book Your 1:1 Session Now
              <ArrowRight size={18} />
            </motion.button>
          </motion.a>
        </div>

      </div>
    </section>
  );
}

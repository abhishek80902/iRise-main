import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import guidePhoto from "../assets/1753246082030.jpg";

/* HEALTH-FOCUSED POINTS */
const points = [
  "Helped people improve digestion, energy, and overall balance by understanding how hydration affects the body",
  "Looks at the real cause of health problems instead of just covering up symptoms",
  "Uses simple Water Therapy principles to help organs work better naturally",
  "No medicines, no procedures just guidance that works with the body",
  "Trusted by people who want long term improvement, not temporary relief"
];



export default function AuthoritySection() {
  return (
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

        {/* CARD (UNCHANGED STYLE) */}
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
              {/* glow ring */}
              <div className="
                absolute inset-0
                rounded-full
                border-2 border-blue-500/40
                blur-sm
              " />

              <img
                src={guidePhoto}
                alt="Health Guide"
                className="
                  relative
                  w-[280px] h-[280px]
                  object-cover
                  rounded-full
                  shadow-2xl
                "
              />

              {/* NAME + DESIGNATION */}
              <div className="mt-6 text-center relative">

  {/* subtle quote icon */}
  <span className="
    absolute -top-4 left-1/2 -translate-x-1/2
    text-white
    text-4xl
    font-serif
    select-none
  ">
    “
  </span>

  <p className="text-xl font-semibold text-white">
    Shubh
  </p>

  <div className="mt-1 inline-flex items-center gap-2 text-sm text-white/60">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
    Founder VitalSync Health
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
              Who Will Guide Your{" "}
              <span className="text-blue-400">
                Healing Journey
              </span>
              ?
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
                  <span className="text-lg leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* TRUST LINE */}
            <p className="mt-8 text-white/60 text-sm max-w-xl">
              Guidance focused on helping the body heal naturally
              without dependency on long-term medication.
            </p>
          </motion.div>

        </div>
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

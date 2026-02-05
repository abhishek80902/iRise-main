import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Clock,
  TrendingDown,
  EyeOff
} from "lucide-react";

const pains = [
  {
    text: "Persistent acidity, gas, bloating, or constipation that doesn’t improve despite repeated treatments.",
    icon: AlertCircle,
    color: "#3B82F6"
  },
  {
    text: "Waking up tired every morning and feeling low on energy throughout the day.",
    icon: Clock,
    color: "#10B981"
  },
  {
    text: "Joint pain, stiffness, or a constant heaviness in the body affecting daily movement.",
    icon: TrendingDown,
    color: "#F59E0B"
  },
  {
    text: "Depending on multiple medicines every day while still not feeling truly healthy.",
    icon: EyeOff,
    color: "#6366F1"
  },
  {
    text: "Being told there is no permanent solution and that you must only ‘manage it for life’.",
    icon: AlertCircle,
    color: "#0EA5E9"
  }
];

const AUTO_DURATION = 3200;

export default function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30%" });

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!isInView || paused) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % pains.length);
    }, AUTO_DURATION);
    return () => clearInterval(interval);
  }, [isInView, paused]);

  return (
    <section ref={ref} className="relative py-24 bg-[#F5F6FA] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB 1px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-14">
          Are You Dealing With These Health Problems{" "}
          <span className="text-blue-600">Every Day?</span>
          <span className="block mt-4 text-lg sm:text-xl font-normal text-slate-600">
            And still not finding{" "}
            <span className="font-semibold text-emerald-600">
              real, lasting relief
            </span>
            ?
          </span>
        </h2>

        {/* Progress */}
        <div className="relative h-1 w-full max-w-md mx-auto mb-16 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            key={active}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: AUTO_DURATION / 1000,
              ease: "linear"
            }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-500"
          />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                animate={{
                  y: isActive ? -6 : 0,
                  scale: isActive ? 1.04 : 1
                }}
                transition={{ duration: 0.35 }}
                className="relative cursor-pointer rounded-3xl p-6 text-left border"
                style={{
                  backgroundColor: isActive
                    ? `${item.color}08`
                    : "#FFFFFF",
                  borderColor: isActive
                    ? `${item.color}44`
                    : "#E5E7EB"
                }}
              >
                {/* Active ring */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: `0 12px 28px ${item.color}22`
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}22` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition text */}
        <p className="mt-20 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          If you answered{" "}
          <span className="font-semibold text-slate-900">“Yes”</span> to any of
          these, a{" "}
          <span className="font-semibold text-emerald-600">
            free 20-minute consultation
          </span>{" "}
          could help you understand what your body has been trying to tell you.
        </p>

        {/* CTA */}
        <motion.a href="/book-call" whileTap={{ scale: 0.95 }}>
          <motion.button
            whileHover={{
              y: -3,
              scale: 1.05,
              boxShadow: "0 16px 36px rgba(16,185,129,0.35)"
            }}
            className="
              mt-12
              px-14 py-5
              rounded-full
              font-semibold
              text-white
              bg-gradient-to-r from-emerald-500 to-blue-600
              shadow-xl
            "
          >
            Book Your 1:1 Session Now
          </motion.button>
        </motion.a>

        {/* Trust */}
        <p className="mt-5 text-sm text-slate-500">
          Trusted by{" "}
          <span className="font-semibold text-slate-800">
            1,200+ individuals
          </span>{" "}
          on their health recovery journey
        </p>
      </div>
    </section>
  );
}

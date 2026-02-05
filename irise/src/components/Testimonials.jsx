import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";

/* =======================
   TESTIMONIAL DATA
======================= */

const testimonials = [
  {
    name: "Rohit Mehta",
    condition: "Digestive Issues",
    rating: 5,
    text:
      "I stopped masking symptoms and finally understood what my body needed. Digestion feels lighter now."
  },
  {
    name: "Neha Sharma",
    condition: "Low Energy & Fatigue",
    rating: 5,
    text:
      "Mornings used to feel heavy. Now I wake up feeling naturally energized."
  },
  {
    name: "Ankit Verma",
    condition: "Joint Stiffness",
    rating: 4,
    text:
      "The guidance was calm and logical. Movement slowly became easier."
  },
  {
    name: "Pooja Singh",
    condition: "Constipation",
    rating: 5,
    text:
      "Simple hydration changes made a real difference without medicines."
  },
  {
    name: "Suresh Patel",
    condition: "Overall Wellness",
    rating: 4,
    text:
      "For the first time, I feel aligned with my body instead of guessing."
  }
];

const looped = [...testimonials, ...testimonials];

/* =======================
   INITIAL AVATAR
======================= */

function Avatar({ name }) {
  const initials =
    name.split(" ")[0][0] + name.split(" ").slice(-1)[0][0];

  return (
    <div className="
      w-14 h-14
      rounded-full
      bg-gradient-to-br from-blue-500 to-emerald-400
      flex items-center justify-center
      text-white font-semibold text-lg
      shadow-sm
    ">
      {initials}
    </div>
  );
}

/* =======================
   CARD
======================= */

function TestimonialCard({
  name,
  condition,
  text,
  rating,
  active
}) {
  return (
    <motion.div
      animate={{
        y: active ? -4 : 0,
        boxShadow: active
          ? "0 28px 48px rgba(15,23,42,0.15)"
          : "0 14px 30px rgba(15,23,42,0.08)"
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        w-[360px]
        shrink-0
        rounded-3xl
        bg-white
        border border-slate-200
        p-7
      "
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <Avatar name={name} />

        <div>
          <p className="font-semibold text-slate-900">
            {name}
          </p>
          <span className="block mt-1 w-10 h-0.5 bg-blue-600 rounded-full" />
          <p className="text-sm text-slate-500 mt-1">
            {condition}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300"
            }
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-slate-700 text-sm leading-relaxed mb-6">
        “{text}”
      </p>

      {/* Trust */}
      <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium">
        <ShieldCheck size={14} />
        Verified wellness guidance
      </div>
    </motion.div>
  );
}

/* =======================
   SECTION
======================= */

export default function HealthTestimonials() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const CARD_WIDTH = 360 + 32;
  const INTERVAL = 3200;

  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  /* AUTO LOOP (RIGHT → LEFT) */
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setIndex(i => (i + 1) % total);
    }, INTERVAL);

    controls.start({
      x: -(index * CARD_WIDTH),
      transition: { duration: 0.9, ease: "easeInOut" }
    });

    return () => clearInterval(interval);
  }, [index, inView]);

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F6]"
    >
      {/* Subtle grid */}
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

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Real Health{" "}
            <span className="text-blue-600">Transformations</span>
          </h2>

          <div className="mt-4 w-24 h-1 bg-blue-600 rounded-full mx-auto" />

          <p className="mt-8 text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from people who stopped fighting their body
            and started supporting it.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
            <ShieldCheck size={16} />
            No medication push • No aggressive protocols • Only body-aligned guidance
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div animate={controls} className="flex gap-8">
            {looped.map((t, i) => (
              <TestimonialCard
                key={i}
                {...t}
                active={i % total === index}
              />
            ))}
          </motion.div>

          {/* Controls */}
          <button
            onClick={() =>
              setIndex(i => (i - 1 + total) % total)
            }
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              bg-white border border-slate-300
              text-blue-600
              rounded-full p-3 shadow-lg
              hover:bg-blue-50
            "
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() =>
              setIndex(i => (i + 1) % total)
            }
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              bg-white border border-slate-300
              text-emerald-600
              rounded-full p-3 shadow-lg
              hover:bg-emerald-50
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Progress */}
        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index
                  ? "bg-emerald-500 scale-110"
                  : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

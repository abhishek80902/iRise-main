import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Clock,
  TrendingDown,
  EyeOff,
  MessageCircle
} from "lucide-react";
import ContactFormModal from "../components/Modal"; // ✅ import form

const pains = [
  {
    text: "Acidity, Gas, Bloating ya Constipation jo peecha nahi chhod rahi.",
    icon: AlertCircle,
    color: "#3B82F6"
  },
  {
    text: "Subah uthte hi thakann mehsoos hona aur din bhar sust rehna.",
    icon: Clock,
    color: "#10B981"
  },
  {
    text: "Joints mein dard ya sharir mein bhari pan rehna.",
    icon: TrendingDown,
    color: "#F59E0B"
  },
  {
    text: "Rozana ki mutthi bhar dawaiyan jinse aap peecha chhudana chahte hain.",
    icon: EyeOff,
    color: "#6366F1"
  },
  {
    text: "Doctors ne giveup kar diya hai and koi rasta nazar nahi aa rha hai.",
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

  /* ✅ FORM STATE */
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("call"); // call | whatsapp

  useEffect(() => {
    if (!isInView || paused) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % pains.length);
    }, AUTO_DURATION);
    return () => clearInterval(interval);
  }, [isInView, paused]);

  return (
    <>
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
            Kya Aap In Pareshaniyon Se Ladte Hain?{" "}
            <span className="text-blue-600">Roz?</span>
            <span className="block mt-4 text-lg sm:text-xl italic text-slate-600">
              And still not finding{" "}
              <span className="font-semibold text-emerald-600 not-italic">
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
                    y: isActive ? -4 : 0,
                    scale: isActive ? 1.03 : 0.98
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative cursor-pointer rounded-3xl p-7 border bg-white overflow-hidden"
                  style={{
                    borderColor: isActive
                      ? `${item.color}55`
                      : "#E5E7EB"
                  }}
                >
                  {/* Accent bar */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{
                      background: `linear-gradient(to bottom, ${item.color}, transparent)`
                    }}
                  />

                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top left, ${item.color}12, transparent 60%)`
                      }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col gap-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>

                    <p className="text-base text-slate-700 leading-relaxed">
                      <span className="font-medium text-slate-900">
                        {item.text.split(" ").slice(0, 2).join(" ")}
                      </span>{" "}
                      {item.text.split(" ").slice(2).join(" ")}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Transition text */}
          <p className="mt-20 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed italic">
            Agar aapka jawab{" "}
            <span className="font-semibold text-slate-900 not-italic">
              'Haan' hai,
            </span>{" "}
            <span className="font-semibold text-emerald-600 not-italic">
              toh yeh 20-minutes ka session
            </span>{" "}
            ki call aapki life ka turning point ho sakti hai.
          </p>

          {/* CTA + WHATSAPP */}
          <div className="mt-16 flex justify-center gap-4 px-3">

  {/* CALL */}
  <motion.button
    onClick={() => {
      setMode("call");
      setModalOpen(true);
    }}
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-full sm:w-auto
      max-w-[260px]
      px-6 sm:px-12
      py-4
      rounded-full
      font-semibold
      text-white
      bg-gradient-to-r from-emerald-500 to-blue-600
      shadow-xl
      whitespace-nowrap
      text-sm sm:text-base
    "
  >
    Call Now
  </motion.button>

  {/* WHATSAPP */}
  <motion.button
    onClick={() => {
      setMode("whatsapp");
      setModalOpen(true);
    }}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-full sm:w-auto
      max-w-[260px]
      px-6 sm:px-10
      py-4
      rounded-full
      font-semibold
      text-emerald-700
      bg-emerald-50
      border border-emerald-200
      shadow-sm
      flex items-center justify-center gap-2
      whitespace-nowrap
      text-sm sm:text-base
    "
  >
    <MessageCircle size={18} />
    WhatsApp
  </motion.button>

</div>


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

      {/* FORM MODAL */}
      <ContactFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={mode}
      />
    </>
  );
}

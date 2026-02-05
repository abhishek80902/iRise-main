import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/Screen Recording 2026-01-30 142247.mp4";

export default function Hero() {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);
  const ctaRef = useRef(null);
  const showCTA = useInView(ctaRef, { margin: "-120px" });

  const [soundOn, setSoundOn] = useState(false);
  const [playing, setPlaying] = useState(true);

  /* PARALLAX */
  const videoY = useTransform(scrollY, [0, 300], [0, -30]);
  const videoScale = useTransform(scrollY, [0, 300], [1, 1.04]);

  /* STABLE TYPING */
  const phrases = [
    "It’s Time to Eliminate the Root",
    "Heal Your Body From Within",
    "Fix the Cause, Not the Symptoms"
  ];

  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let char = 0;
    const text = phrases[index % phrases.length];

    const type = setInterval(() => {
      if (char <= text.length) {
        setTyped(text.slice(0, char));
        char++;
      } else {
        clearInterval(type);
        setTimeout(() => {
          const erase = setInterval(() => {
            if (char >= 0) {
              setTyped(text.slice(0, char));
              char--;
            } else {
              clearInterval(erase);
              setIndex(i => i + 1);
            }
          }, 26);
        }, 1400);
      }
    }, 42);

    return () => clearInterval(type);
  }, [index]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#F5F6FA]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #DADDE5 1px, transparent 1px),
              linear-gradient(to bottom, #DADDE5 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px"
          }}
        />

        <div className="relative z-10 max-w-6xl px-5 pt-28 text-center">

          {/* HEADLINE */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B1C39]">
            How Long Will You Only Manage{" "}
            <span className="relative inline-block">
              Diseases
              <span className="block mx-auto mt-2 w-16 h-1 bg-blue-600 rounded-full" />
            </span>
            ,
            <br />

            {/* FIXED TYPING LINE */}
            <span
              className="
                relative
                inline-flex
                items-center
                justify-center
                mt-4
                text-blue-600
                whitespace-nowrap
                min-h-[1.2em]
                sm:min-h-[1.3em]
                md:min-h-[1.4em]
              "
            >
              <span className="absolute opacity-0 pointer-events-none">
                Fix the Cause, Not the Symptoms
              </span>

              <span className="relative flex items-center gap-2">
                {typed}
                <span className="w-[3px] h-[1em] bg-blue-600 animate-pulse" />
              </span>
            </span>
          </h1>

          {/* SUBHEAD */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg sm:text-lg leading-relaxed">
            If you’re tired of taking medicines every day and want your old life back,
            discover the science of{" "}
            <span className="relative inline-block font-semibold text-emerald-700">
              Water Therapy
              <span className="block mx-auto mt-1 w-14 h-0.5 bg-emerald-500 rounded-full" />
            </span>{" "}
            that helps your body heal itself from the inside.
          </p>

          {/* HEALTH BLOCKS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { label: "Root-Cause Healing", icon: "🧠" },
              { label: "Drug-Free Approach", icon: "💊" },
              { label: "Natural Detox", icon: "💧" },
              { label: "Self Healing", icon: "🫀" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="
                  px-5 py-3
                  rounded-xl
                  bg-white
                  border border-gray-200
                  shadow-sm
                  text-sm font-medium text-gray-700
                  flex items-center gap-2
                "
              >
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {item.icon}
                </motion.span>
                {item.label}
              </motion.div>
            ))}
          </div>

          {/* ✅ TRUSTED BY (RESTORED) */}
          <div className="mt-12 text-center">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">
              Trusted by
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
              <span>HealthLine</span>
              <span>Times Wellness</span>
              <span>Medical Journal</span>
              <span>Ayush Network</span>
            </div>
          </div>

          {/* VIDEO */}
          <motion.div
            style={{ y: videoY, scale: videoScale }}
            className="
              relative mt-14 mx-auto w-full max-w-5xl
              min-h-[260px] sm:min-h-[420px] md:min-h-[520px]
              rounded-[28px] overflow-hidden
              border border-black/10 shadow-2xl
            "
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={!soundOn}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="absolute bottom-4 left-4 flex gap-3">
              <button
                onClick={togglePlay}
                className="px-3 py-2 rounded-full bg-black/70 text-white text-xs"
              >
                {playing ? "⏸ Pause" : "▶ Play"}
              </button>

              {!soundOn && (
                <button
                  onClick={() => setSoundOn(true)}
                  className="px-3 py-2 rounded-full bg-black/70 text-white text-xs"
                >
                  🔊 Sound
                </button>
              )}
            </div>
          </motion.div>

          {/* CTA */}
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

          <div ref={ctaRef} className="h-10" />
        </div>
      </section>

    </>
  );
}

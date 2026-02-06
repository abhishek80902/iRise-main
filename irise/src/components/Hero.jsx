import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Leaf,
  Droplets,
  HeartPulse,
  Volume2,
  Pause,
  Play,
  MessageCircle
} from "lucide-react";
import heroVideo from "../assets/water therapy hr ad 04 f.mp4";
import ContactFormModal from "../components/Modal"; // ✅ import form

export default function Hero() {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);

  const [soundOn, setSoundOn] = useState(false);
  const [playing, setPlaying] = useState(true);

  /* ✅ FORM STATE */
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("call"); // call | whatsapp

  /* PARALLAX */
  const videoY = useTransform(scrollY, [0, 300], [0, -30]);
  const videoScale = useTransform(scrollY, [0, 300], [1, 1.04]);

  /* TYPING EFFECT */
  const phrases = [
    "Ab Waqt Hai Unhe ‘Jadh’ Se Khatam Karne Ka",
    "Ab Samay Hai Root Cause Ko Eliminate Karne Ka",
    "Cause Ko Fix Karo, Sirf Symptoms Ko Nahi"
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

  const features = [
    {
      label: "Root-Cause Healing",
      Icon: Brain,
      bg: "from-blue-50 to-blue-100/60",
      color: "text-blue-600"
    },
    {
      label: "Drug-Free Approach",
      Icon: Leaf,
      bg: "from-emerald-50 to-emerald-100/60",
      color: "text-emerald-600"
    },
    {
      label: "Natural Detox",
      Icon: Droplets,
      bg: "from-sky-50 to-sky-100/60",
      color: "text-sky-600"
    },
    {
      label: "Self Healing",
      Icon: HeartPulse,
      bg: "from-indigo-50 to-indigo-100/60",
      color: "text-indigo-600"
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F6FA]">
        {/* GRID */}
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
            Kab Tak Sirf{" "}
            <span className="relative inline-block">
              Bimariyon
              <span className="block mx-auto mt-2 w-16 h-1 bg-blue-600 rounded-full" />
            </span>{" "}
            ko Manage Karenge?
            <br />
            <span className="relative inline-flex justify-center mt-4 text-blue-600 min-h-[2.6em]">
              <span className="absolute opacity-0">
                Ab Waqt Hai Unhe ‘Jadh’ Se Khatam Karne Ka
              </span>
              <span className="inline-flex items-center gap-2">
                {typed}
                <span className="w-[3px] h-[1em] bg-blue-600 animate-pulse" />
              </span>
            </span>
          </h1>

          {/* SUBHEAD */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed italic">
            Agar aap dawaiyan kha-kha kar thak chuke hain aur apni purani zindagi
            wapas chahte hain, toh discover kijiye{" "}
            <span className="relative inline-block font-bold text-emerald-700 not-italic">
              <em>Water Therapy</em>
              <span className="block mx-auto mt-1 w-14 h-0.5 bg-emerald-500 rounded-full" />
            </span>{" "}
            ki science jo body ko andar se heal karti hai.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`w-full max-w-[220px] px-5 py-4 rounded-xl bg-gradient-to-br ${item.bg} border border-white/60 shadow-sm flex items-center gap-3`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="w-9 h-9 rounded-lg bg-white/70 flex items-center justify-center shadow-inner"
                >
                  <item.Icon className={`w-5 h-5 ${item.color}`} />
                </motion.div>
                <span className="text-sm font-medium text-gray-800">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* VIDEO */}
          <motion.div
            style={{ y: videoY, scale: videoScale }}
            className="
              relative mt-16 mx-auto
              w-full max-w-sm sm:max-w-md md:max-w-lg
              aspect-[9/16]
              rounded-[28px]
              overflow-hidden
              border border-black/10
              shadow-2xl
              bg-black
            "
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={!soundOn}
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="absolute bottom-4 left-4 flex gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-black/70 text-white"
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>

              {!soundOn && (
                <button
                  onClick={() => setSoundOn(true)}
                  className="p-2 rounded-full bg-black/70 text-white"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </motion.div>

          {/* CTA + WHATSAPP */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-5">
            {/* CALL */}
            <motion.button
              onClick={() => {
                setMode("call");
                setModalOpen(true);
              }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                setModalOpen(true);
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
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
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={mode}
      />
    </>
  );
}

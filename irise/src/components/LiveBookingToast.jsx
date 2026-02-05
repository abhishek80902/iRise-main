import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const USERS = [
  "Abhishek", "Rahul", "Neha", "Aman", "Priya",
  "Rohit", "Karan", "Sneha", "Arjun", "Ananya",
  "Vikram", "Pooja"
];

const LOCATIONS = [
  "Delhi", "Mumbai", "Bengaluru", "Pune",
  "Hyderabad", "Chennai", "Jaipur", "Noida"
];

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function LiveBookingToast() {
  const [toast, setToast] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const soundRef = useRef(null);

  /* preload sound */
  useEffect(() => {
    soundRef.current = new Audio("/sounds/success.mp3");
    soundRef.current.volume = 0.18;
  }, []);

  /* show only after small scroll */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setEnabled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* toast loop */
  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => {
      const name = random(USERS);
      const location = random(LOCATIONS);

      setToast({ name, location });
      soundRef.current?.play().catch(() => {});

      setTimeout(() => setToast(null), 3200);
    }, 12000);

    return () => clearInterval(interval);
  }, [enabled]);

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative
              flex items-center gap-4
              px-5 py-4
              rounded-2xl
              bg-gradient-to-br from-[#0B0F2A] via-[#0F172A] to-[#020617]
              border border-white/10
              shadow-2xl shadow-black/60
              backdrop-blur-xl
              max-w-sm
            "
          >
            {/* subtle glow */}
            <div
              className="
                absolute -inset-px
                rounded-2xl
                bg-gradient-to-r
                from-[#7C7CFF]/25
                to-[#5EEAD4]/20
                blur-lg
                opacity-40
              "
            />

            {/* avatar */}
            <div
              className="
                relative z-10
                w-10 h-10
                rounded-full
                bg-gradient-to-br from-[#7C7CFF] to-[#5EEAD4]
                flex items-center justify-center
                font-semibold
                text-black
              "
            >
              {toast.name.charAt(0)}
            </div>

            {/* text */}
            <div className="relative z-10 leading-tight">
              <p className="font-semibold text-white text-lg">
                {toast.name}
                <span className="ml-2 text-xs text-white/50">
                  • 2 min ago
                </span>
              </p>
              <p className="text-[#A5B4FC] text-xs font-medium mt-0.5">
                Booked a free call ({toast.location})
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

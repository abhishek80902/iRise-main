import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent
} from "framer-motion";
import { useState } from "react";
import Logo from "../assets/react.svg";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  /* Hide on scroll down, show on scroll up */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 80) setHidden(true);
    else setHidden(false);
  });

  /* Morph on scroll */
  const radius = useTransform(scrollY, [0, 120], ["999px", "28px"]);
  const paddingX = useTransform(scrollY, [0, 120], ["28px", "20px"]);
  const scale = useTransform(scrollY, [0, 120], [1, 0.97]);

  return (
    <>
      {/* TOP FLOATING HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? -20 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <motion.div
          style={{
            borderRadius: radius,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            scale
          }}
          className="
            pointer-events-auto
            w-[95%] sm:w-[640px]
            bg-white/85
            backdrop-blur-xl
            border border-slate-200
            shadow-lg
            py-3
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ opacity: 0.9 }}
          >
            <img
              src={Logo}
              alt="Water Therapy"
              className="w-8 h-8 sm:w-9 sm:h-9"
            />
            <span className="font-semibold text-slate-900 text-base sm:text-lg">
              VitalSync Health
            </span>
          </motion.a>

          {/* CTA */}
          <motion.a
            href="/book-call"
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="pointer-events-auto"
          >
            <motion.button
              whileHover={{
                y: -1,
                boxShadow: "0 8px 20px rgba(37,99,235,0.25)"
              }}
              className="
                px-5 py-2.5
                rounded-full
                bg-gradient-to-r from-blue-600 to-emerald-500
                text-white
                text-sm font-semibold
                shadow-md
                whitespace-nowrap
              "
            >
              Book Free 1:1 Session
            </motion.button>
          </motion.a>
        </motion.div>
      </motion.header>

      {/* BOTTOM FLOATING CTA — MOBILE */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed bottom-4 left-0 right-0 z-40 flex justify-center sm:hidden"
      >
        <motion.a
          href="/book-call"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <motion.button
            className="
              px-7 py-3
              rounded-full
              bg-gradient-to-r from-blue-600 to-emerald-500
              text-white
              font-semibold text-sm
              shadow-xl
            "
          >
            Book Free 1:1 Session
          </motion.button>
        </motion.a>
      </motion.div>
    </>
  );
}

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ContactFormModal from "../components/Modal";

export default function WhatsAppChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING WHATSAPP BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="
          fixed
          bottom-6 right-6
          z-50
          w-14 h-14
          rounded-full
          flex items-center justify-center
          bg-gradient-to-br from-[#25D366] to-[#128C7E]
          shadow-2xl shadow-[#25D366]/40
        "
        aria-label="WhatsApp Chat"
      >
        {/* Pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-[#25D366]/40"
        />

        <MessageCircle size={24} className="relative z-10 text-white" />
      </motion.button>

      {/* CONTACT MODAL — WHATSAPP MODE */}
      <ContactFormModal
        open={open}
        onClose={() => setOpen(false)}
        mode="whatsapp"
      />
    </>
  );
}

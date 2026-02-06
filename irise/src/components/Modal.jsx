import { motion } from "framer-motion";
import { useState } from "react";
import { X, User, Phone, MapPin, HeartPulse } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ✅ Indian Mobile Validation */
const isValidIndianNumber = (number) => /^[6-9]\d{9}$/.test(number);

/* 🔐 EMAILJS CONFIG — INSERT YOUR KEYS HERE */
const EMAILJS_SERVICE_ID = "service_06bevom";
const EMAILJS_TEMPLATE_ID = "template_cx5ngpv";
const EMAILJS_PUBLIC_KEY = "NYOdCSNy4TrHzWrK6";

export default function ContactFormModal({ open, onClose, mode }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidIndianNumber(form.phone)) return;

    setSubmitted(true);

    /* 📧 EMAIL PAYLOAD */
    const templateParams = {
      name: form.name,
      phone: form.phone,
      city: form.city
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error("EmailJS Error:", error);
    }

    /* ⏳ Short pause for trust & warmth */
    setTimeout(() => {
      if (mode === "call") {
        window.location.href = `tel:+918920218804`; // 👈 YOUR CALL NUMBER
      }

      if (mode === "whatsapp") {
        const message = `Namaste, mera naam ${form.name} hai.
City: ${form.city}
Phone: ${form.phone}
Mujhe Water Therapy ke baare mein baat karni hai.`;

        window.location.href =
          `https://wa.me/918920218804?text=${encodeURIComponent(message)}`; // 👈 YOUR WHATSAPP NUMBER
      }

      onClose();
      setSubmitted(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-7 relative"
      >
        {!submitted && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X />
          </button>
        )}

        {!submitted ? (
          <>
            {/* HEADER */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                <HeartPulse className="text-emerald-600" />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                Let’s Take the First Step
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Aaj liya gaya ek sahi decision  
                aapki body ke healing process ko direction deta hai.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value.replace(/[^a-zA-Z\s]/g, "") })
                  }
                  className="w-full pl-11 pr-4 py-3
    rounded-xl border border-slate-300
    text-slate-800 placeholder-slate-400"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit Mobile Number"
                  value={form.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) setForm({ ...form, phone: value });
                  }}
                  className="w-full pl-11 pr-4 py-3
    rounded-xl border border-slate-300
    text-slate-800 placeholder-slate-400"
                />
                {form.phone && !isValidIndianNumber(form.phone) && (
                  <p className="mt-1 text-xs text-red-500">
                    Enter a valid 10-digit Indian number
                  </p>
                )}
              </div>

              {/* CITY */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  required
                  placeholder="City"
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value.replace(/[^a-zA-Z\s]/g, "") })
                  }
                  className="w-full pl-11 pr-4 py-3
    rounded-xl border border-slate-300
    text-slate-800 placeholder-slate-400"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={!isValidIndianNumber(form.phone)}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-blue-600"
              >
                Continue
              </button>
            </form>

            <p className="mt-4 text-xs text-slate-500 text-center">
              Aapki details secure hain. Yeh sirf guidance ke liye hai.
            </p>
          </>
        ) : (
          /* THANK YOU */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HeartPulse className="mx-auto text-emerald-600 mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-slate-900">
              Thank You 🙏
            </h3>
            <p className="mt-3 text-slate-600">
              Aap kabhi bhi connect kar skte ho …
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

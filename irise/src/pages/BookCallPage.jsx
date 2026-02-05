import { motion } from "framer-motion";
import {
  Clock,
  PhoneCall,
  CalendarCheck,
  ShieldCheck,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";

export default function BookCallPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2F7]">

      {/* SUBTLE GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB 1px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* BACK BUTTON */}
      <motion.button
        onClick={() => (window.location.href = "/")}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="
          absolute top-8 left-8 z-20
          flex items-center gap-2
          px-4 py-2
          rounded-full
          bg-white
          border border-slate-200
          text-sm text-slate-700
          shadow-sm
        "
      >
        <ArrowLeft size={16} />
        Back
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Apni{" "}
            <span className="text-blue-600">
              Free 20-Minute Health Consultation
            </span>{" "}
            Book Karein
          </h1>

          <div className="mt-4 w-24 h-1 bg-blue-600 rounded-full mx-auto" />

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed italic">
            Ek focused aur relaxed conversation, jisme hum samajhne ki
            koshish karte hain ki aapki body abhi kaise function kar rahi hai
            aur kaise simple hydration-based changes better balance,
            energy aur recovery ko support kar sakte hain.
          </p>

          {/* TRUST BADGE */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
            <ShieldCheck size={16} />
            Calm • Personal • Body-aligned guidance
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — WHAT YOU GAIN */}
          <div className="space-y-8">

            {[
              {
                icon: Clock,
                title: "Clear Samajh",
                desc: "Yeh samajhne mein madad milegi ki digestion, energy ya internal balance ko kya affect kar raha ho sakta hai."
              },
              {
                icon: PhoneCall,
                title: "Personal Perspective",
                desc: "Aap apni lifestyle, hydration habits aur health history ek relaxed environment mein discuss kar sakte hain."
              },
              {
                icon: CalendarCheck,
                title: "Practical Direction",
                desc: "Is clarity ke saath call end hoti hai ki Water Therapy aapki body aur routine ke liye fit ho sakti hai ya nahi."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="
                    rounded-3xl
                    bg-white
                    border border-slate-200
                    p-7
                    shadow-lg
                  "
                >
                  <div className="flex gap-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* HUMAN REASSURANCE */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-600 text-lg leading-relaxed max-w-xl italic"
            >
              Kaafi log is call tak tab pahuchte hain jab unhone multiple
              solutions try kar liye hote hain.  
              Yeh session body ko ek system ke roop mein
              calmly, logically aur bina kisi pressure ke
              samajhne mein madad karta hai.
            </motion.p>
          </div>

          {/* RIGHT — CALENDLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="
              relative rounded-3xl
              bg-white
              border border-slate-200
              shadow-2xl
              overflow-hidden
            "
          >
            {/* HEADER BAR */}
            <div className="
              px-6 py-4
              border-b border-slate-200
              bg-slate-50
              flex justify-between items-center
            ">
              <p className="font-semibold text-slate-900">
                Apne liye convenient time choose karein
              </p>
              <span className="text-xs text-slate-500">
                Secure & private
              </span>
            </div>

            {!calendlyLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                Availability load ho rahi hai…
              </div>
            )}

            <iframe
              src="https://calendly.com/kumarabhishek80902/free-strategy-call?hide_event_type_details=1&hide_gdpr_banner=1"
              loading="lazy"
              onLoad={() => setCalendlyLoaded(true)}
              className="w-full h-[640px] border-0"
              title="Book Health Consultation"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

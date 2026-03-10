import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Dr. Elena Vasquez", role: "Astrophysicist & Passenger", quote: "ASTRALIS didn't just take me to space — they transformed how I see our place in the universe. The level of care is unlike anything on Earth." },
  { name: "James Chen-Nakamura", role: "CEO, Helix Dynamics", quote: "From pre-flight training to re-entry, every moment was orchestrated with precision and elegance. This is the future of travel." },
  { name: "Amara Osei", role: "Documentary Filmmaker", quote: "The overview effect is real. Seeing Earth from orbit changes you fundamentally. ASTRALIS made that possible with unmatched luxury." },
];

const PassengerExpectations = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Voices from Orbit</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Elite Passengers</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed font-body mb-8 flex-1 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassengerExpectations;

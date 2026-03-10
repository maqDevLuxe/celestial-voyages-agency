import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Globe, Orbit, ArrowDown } from "lucide-react";

const steps = [
  { icon: Rocket, title: "Launch", subtitle: "Day 1", desc: "Depart from Spaceport Alpha at Mach 25. Experience 3G acceleration as you break free from Earth's atmosphere." },
  { icon: Globe, title: "Orbit Insertion", subtitle: "Day 1-2", desc: "Enter Low Earth Orbit at 400km altitude. Witness 16 sunrises in a single day from the observation deck." },
  { icon: Orbit, title: "Zero-G Living", subtitle: "Day 2-5", desc: "Float freely in the luxury habitation module. Enjoy gourmet meals and panoramic Earth views." },
  { icon: ArrowDown, title: "Re-entry & Return", subtitle: "Day 6", desc: "Controlled deceleration and precision landing. Welcome reception with mission completion ceremony." },
];

const MissionItinerary = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">The Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Mission Itinerary</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">{step.subtitle}</p>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md font-body">{step.desc}</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full glass-card border-primary/30 z-10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionItinerary;

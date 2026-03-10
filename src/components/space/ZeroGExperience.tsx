import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  { title: "Weightless Dining", desc: "Savor Michelin-starred cuisine as it floats before you. Our chefs have reimagined gastronomy for zero gravity." },
  { title: "Orbital Yoga", desc: "Find inner peace 400km above Earth. Stretch and float in our panoramic observation module." },
  { title: "Spacewalk Experience", desc: "Step outside the station in a custom-fitted suit. Touch the void with Earth as your backdrop." },
  { title: "Earth Photography", desc: "Capture stunning images with professional-grade equipment and guidance from space photographers." },
];

const ZeroGExperience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Weightlessness Redefined</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">The Zero-G Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 md:p-10 group"
            >
              <div className="w-2 h-2 rounded-full bg-primary mb-6 group-hover:shadow-[0_0_15px_3px_hsl(217_91%_60%/0.5)] transition-all duration-500" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZeroGExperience;

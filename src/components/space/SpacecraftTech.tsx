import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import spacecraftImg from "@/assets/spacecraft.jpg";

const specs = [
  { label: "Passenger Capacity", value: "6 Elite" },
  { label: "Life Support", value: "30 Days" },
  { label: "Hull Material", value: "Carbon-Ti Alloy" },
  { label: "Propulsion", value: "Hybrid Ion-Chemical" },
  { label: "Radiation Shield", value: "Active Magnetic" },
  { label: "AI Navigation", value: "Quantum-Enhanced" },
];

const SpacecraftTech = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Engineering Excellence</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Spacecraft Technology</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-card overflow-hidden rounded-2xl"
          >
            <img
              src={spacecraftImg}
              alt="ASTRALIS spacecraft in orbit"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <p className="text-xs text-muted-foreground tracking-wider uppercase mb-2 font-body">{spec.label}</p>
                <p className="font-display text-lg font-semibold text-foreground">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacecraftTech;

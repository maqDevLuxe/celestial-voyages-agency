import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Wind, Zap, Eye, Radio } from "lucide-react";

const systems = [
  { icon: Wind, title: "Atmospheric Control", desc: "Dual-redundant ECLSS maintaining Earth-like pressure, temperature, and humidity." },
  { icon: Shield, title: "Radiation Protection", desc: "Active magnetic shielding combined with multi-layer physical barriers." },
  { icon: Heart, title: "Medical Bay", desc: "Fully equipped autonomous medical station with AI-assisted diagnostics." },
  { icon: Zap, title: "Power Systems", desc: "Solar array with battery backup providing 100kW continuous power." },
  { icon: Eye, title: "Collision Avoidance", desc: "360° LIDAR tracking with autonomous debris avoidance capability." },
  { icon: Radio, title: "Communications", desc: "Continuous Earth link via satellite relay with <200ms latency." },
];

const SafetySystems = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="safety" className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Your Safety, Our Obsession</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Life Support & Safety</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((sys, i) => {
            const Icon = sys.icon;
            return (
              <motion.div
                key={sys.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-8 group"
              >
                <Icon className="w-8 h-8 text-primary mb-5 group-hover:drop-shadow-[0_0_10px_hsl(217_91%_60%/0.5)] transition-all duration-500" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{sys.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{sys.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SafetySystems;

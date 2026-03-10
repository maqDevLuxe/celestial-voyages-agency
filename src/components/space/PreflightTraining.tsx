import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Activity, Brain, Dumbbell } from "lucide-react";

const phases = [
  { icon: Activity, title: "Medical Clearance", duration: "Week 1-2", desc: "Comprehensive health assessment and space-readiness evaluation." },
  { icon: Dumbbell, title: "Physical Training", duration: "Week 3-8", desc: "G-force tolerance, underwater EVA simulation, and endurance conditioning." },
  { icon: Brain, title: "Systems Training", duration: "Week 9-12", desc: "Spacecraft systems familiarization, emergency protocols, and mission simulation." },
  { icon: Shield, title: "Final Qualification", duration: "Week 13-14", desc: "Full mission dress rehearsal and official astronaut certification." },
];

const PreflightTraining = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Prepare for Launch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Pre-flight Training</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card-hover p-8 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 font-body">{phase.duration}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{phase.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreflightTraining;

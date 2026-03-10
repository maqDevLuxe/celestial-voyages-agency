import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { label: "Seats Reserved", target: 2847, suffix: "+" },
  { label: "Countries", target: 94, suffix: "" },
  { label: "Missions Planned", target: 12, suffix: "" },
  { label: "Waitlist", target: 18500, suffix: "+" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2500;
    const steps = 80;
    const inc = target / steps;
    let c = 0;
    const iv = setInterval(() => {
      c += inc;
      if (c >= target) { setCount(target); clearInterval(iv); }
      else setCount(Math.floor(c));
    }, duration / steps);
    return () => clearInterval(iv);
  }, [inView, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const AstronautCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Join the Movement</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Future Astronauts</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-blue mb-3">
                <AnimatedCounter target={c.target} suffix={c.suffix} inView={inView} />
              </p>
              <p className="text-muted-foreground text-sm font-body">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AstronautCounters;

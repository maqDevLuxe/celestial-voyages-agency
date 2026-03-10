import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Max Speed", value: 28000, suffix: " km/h", prefix: "Mach 23" },
  { label: "Orbital Altitude", value: 408, suffix: " km", prefix: "ISS Level" },
  { label: "Orbits per Day", value: 16, suffix: "", prefix: "Complete" },
  { label: "G-Force at Launch", value: 3.2, suffix: " G", prefix: "Controlled" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span>
      {Number.isInteger(target) ? Math.floor(count).toLocaleString() : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const SpeedMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="space-container">
        <div className="glow-line mb-20" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3 font-body">{m.prefix}</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                <Counter target={m.value} suffix={m.suffix} inView={inView} />
              </p>
              <p className="text-muted-foreground text-sm font-body">{m.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="glow-line mt-20" />
      </div>
    </section>
  );
};

export default SpeedMetrics;

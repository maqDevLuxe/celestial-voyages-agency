import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "SpaceX", abbr: "SX" },
  { name: "Blue Origin", abbr: "BO" },
  { name: "Virgin Galactic", abbr: "VG" },
  { name: "NASA", abbr: "NA" },
  { name: "ESA", abbr: "ES" },
  { name: "JAXA", abbr: "JX" },
];

const SpaceportPartners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border/30" ref={ref}>
      <div className="space-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-xs tracking-[0.4em] uppercase mb-12 font-body"
        >
          Trusted Spaceport Partners
        </motion.p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover flex flex-col items-center justify-center py-8 px-4"
            >
              <span className="text-2xl font-display font-bold text-primary mb-2">{p.abbr}</span>
              <span className="text-xs text-muted-foreground tracking-wider">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceportPartners;

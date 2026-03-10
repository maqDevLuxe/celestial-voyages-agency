import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import nebulaImg from "@/assets/nebula-panorama.jpg";

const GalacticImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
      >
        <img
          src={nebulaImg}
          alt="Breathtaking nebula in deep space"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl px-6"
          >
            The cosmos is within us.
            <br />
            <span className="text-gradient-blue">We are made of star stuff.</span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default GalacticImage;

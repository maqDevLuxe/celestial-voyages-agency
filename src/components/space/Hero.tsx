import { motion } from "framer-motion";
import heroImg from "@/assets/hero-earth.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Earth viewed from space station window"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 space-container text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-primary tracking-[0.5em] text-xs md:text-sm font-body uppercase mb-6"
        >
          Beyond Luxury Travel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          <span className="text-foreground">Your Journey to</span>
          <br />
          <span className="text-gradient">the Stars</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body"
        >
          Experience Earth from 400km above. The first ultra-premium space tourism
          program designed for the world's most discerning travelers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#reserve"
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wider text-sm hover:shadow-[0_0_40px_-5px_hsl(217_91%_60%/0.5)] transition-all duration-500"
          >
            Book Your Flight
          </a>
          <a
            href="#mission"
            className="px-10 py-4 rounded-full border border-border text-foreground font-display font-semibold tracking-wider text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Explore Mission
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

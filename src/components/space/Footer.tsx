import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section id="reserve" className="section-padding" ref={ref}>
        <div className="space-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-nebula/5 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10"
            >
              <Rocket className="w-12 h-12 text-primary mx-auto mb-8" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 relative z-10">
              Reserve Your Seat
              <br />
              <span className="text-gradient">Among the Stars</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 font-body relative z-10">
              Only 6 seats per mission. Join the most exclusive journey humankind has ever undertaken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-12 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wider text-sm hover:shadow-[0_0_50px_-5px_hsl(217_91%_60%/0.5)] transition-all duration-500 animate-pulse-glow">
                Apply for Mission
              </button>
              <button className="px-12 py-4 rounded-full border border-border text-foreground font-display font-semibold tracking-wider text-sm hover:border-primary/50 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16 px-6 md:px-12 lg:px-20">
        <div className="space-container">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="font-display text-xl font-bold tracking-[0.2em] text-foreground mb-4">ASTRALIS</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                The pinnacle of space tourism. Beyond luxury, beyond Earth.
              </p>
            </div>
            {[
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Program", links: ["Missions", "Training", "Technology", "Safety"] },
              { title: "Legal", links: ["Privacy", "Terms", "Compliance", "Insurance"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors font-body">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glow-line mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-body">
              © 2026 ASTRALIS Space Tourism. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs font-body tracking-wider">
              Ad Astra Per Aspera
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Mission", "Experience", "Technology", "Training", "Blog", "Safety"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-b border-border/30" : "bg-transparent"
      }`}
    >
      <div className="space-container flex items-center justify-between h-20 px-6 md:px-12 lg:px-20">
        <a href="#" className="font-display text-2xl font-bold tracking-[0.3em] text-foreground">
          ASTRALIS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-body tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="#reserve"
            className="ml-4 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium tracking-wider hover:bg-primary/20 transition-all duration-300 animate-pulse-glow"
          >
            Reserve Seat
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card mx-4 mb-4 rounded-xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link}
            </a>
          ))}
          <a href="#reserve" className="mt-2 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium tracking-wider text-center">
            Reserve Seat
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

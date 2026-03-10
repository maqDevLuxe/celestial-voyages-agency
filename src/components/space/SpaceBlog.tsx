import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "Mission Update", title: "First Commercial Crew Successfully Completes Orbital Training", date: "Mar 2, 2026", read: "5 min" },
  { tag: "Technology", title: "Next-Gen Heat Shield Passes Critical Re-entry Test at Mach 25", date: "Feb 18, 2026", read: "4 min" },
  { tag: "Experience", title: "What Zero-Gravity Cuisine Actually Tastes Like — A Chef's Perspective", date: "Feb 5, 2026", read: "7 min" },
];

const SpaceBlog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="space-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16"
        >
          <div>
            <p className="text-primary text-xs tracking-[0.5em] uppercase mb-4 font-body">Dispatches from the Frontier</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Space Exploration Blog</h2>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-primary text-sm flex items-center gap-2 hover:gap-3 transition-all font-body">
            View all posts <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 group cursor-pointer flex flex-col"
            >
              <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-body">{post.tag}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors leading-snug flex-1">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-muted-foreground text-xs font-body">
                <span>{post.date}</span>
                <span>{post.read} read</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceBlog;

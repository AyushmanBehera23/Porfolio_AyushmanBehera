import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, GitFork, Star } from "lucide-react";

const GitHubSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="github" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="gradient-text">GitHub</span> Profile
          </h2>
          <p className="text-muted-foreground text-center mb-12">My open source contributions</p>

          <div className="glass-card p-8 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Github size={40} className="text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-1">AyushmanBehera23</h3>
            <p className="text-muted-foreground text-sm mb-6">Aspiring Cloud Engineer | Python Developer</p>

            <div className="flex justify-center gap-8 mb-6">
              {[
                { icon: GitFork, label: "Repos", val: "10+" },
                { icon: Star, label: "Stars", val: "⭐" },
                { icon: Github, label: "Contributions", val: "Active" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon size={20} className="mx-auto mb-1 text-primary" />
                  <p className="font-bold text-lg">{s.val}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/AyushmanBehera23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
            >
              <Github size={18} /> Visit GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;

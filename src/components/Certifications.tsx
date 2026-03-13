import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Cloud Computing Fundamentals", org: "Coursera / AWS" },
  { name: "Linux Fundamentals", org: "Linux Foundation" },
  { name: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services" },
  { name: "Python Programming", org: "HackerRank" },
];

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">ACHIEVEMENTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">CERTIFICATIONS</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                className="glass-card p-6 text-center hover-lift group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{cert.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{cert.org}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate <ExternalLink size={12} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

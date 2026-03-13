import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cloud, Code, Database, Layout, Server, Search } from "lucide-react";

const services = [
  { icon: Code, title: "Python Development", desc: "Building robust applications and scripts with Python, FastAPI, and automation tools.", num: "01" },
  { icon: Cloud, title: "Cloud Architecture", desc: "Designing and deploying scalable cloud solutions on AWS with best practices.", num: "02" },
  { icon: Database, title: "Data Structures & Algorithms", desc: "Solving complex algorithmic problems with efficient data structure implementations.", num: "03" },
  { icon: Layout, title: "Web Development", desc: "Creating responsive, modern web applications using HTML, CSS, and JavaScript.", num: "04" },
  { icon: Server, title: "Linux Administration", desc: "Managing Linux systems, LVM configuration, and server administration.", num: "05" },
  { icon: Search, title: "AI & Automation", desc: "Building AI-powered applications using Gemini API and YouTube API integrations.", num: "06" },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">WHAT I OFFER</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Bringing ideas to life with cloud engineering and development solutions tailored to your needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="glass-card p-6 hover-lift group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <s.icon size={24} className="text-primary" />
                  <span className="text-4xl font-display font-bold text-border/30 group-hover:text-primary/20 transition-colors">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

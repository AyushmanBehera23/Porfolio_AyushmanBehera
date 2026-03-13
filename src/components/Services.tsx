import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cloud, Code, Database, Layout, Server, Search } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Linux Fundamentals | LPU Skill Development",
    desc: [
      "Gained practical experience with core Linux commands for file management, user permissions, networking, and system administration tasks.",
      "Performed Logical Volume Management (LVM) operations including volume creation, resizing, expansion, and storage monitoring.",
      "Configured Access Control Lists (ACLs) to implement fine-grained permission control in multi-user environments.",
      "Strengthened terminal proficiency through hands-on troubleshooting, system diagnostics, and performance checks."
    ],
    num: "01"
  }
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
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Training</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Learned core Linux concepts including file systems, process management, and shell command usage.
          </p>

          <div className="max-w-3xl">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="glass-card p-8 hover-lift group relative overflow-hidden border-l-4 border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
  <s.icon size={20} className="text-primary" />
</div>
                  <span className="text-4xl font-display font-bold text-border/30 group-hover:text-primary/20 transition-colors">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-50 mt-30">
  {s.desc.map((point, index) => (
    <li key={index} className="flex items-start gap-2">
  <span className="text-primary mt-1">▹</span>
  <span>{point}</span>
</li>
  ))}
</ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

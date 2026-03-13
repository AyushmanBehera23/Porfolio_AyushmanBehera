import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Academic journey</p>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow" />
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <GraduationCap size={20} />
                  <span className="text-sm font-medium">2022 – Present</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1">Bachelor of Technology (B.Tech)</h3>
                <p className="text-foreground font-medium mb-1">Computer Science Engineering</p>
                <p className="text-primary text-sm font-medium mb-3">Minor: Cloud Computing</p>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <GraduationCap size={14} /> Lovely Professional University
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> Punjab, India
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

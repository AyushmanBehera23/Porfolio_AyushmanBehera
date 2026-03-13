import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Python", level: 90, icon: "🐍" },
  { name: "Java", level: 70, icon: "☕" },
  { name: "DSA", level: 75, icon: "🧮" },
  { name: "AWS", level: 80, icon: "☁️" },
  { name: "Cloud Computing", level: 85, icon: "🌐" },
  { name: "Linux", level: 75, icon: "🐧" },
  { name: "HTML", level: 90, icon: "📄" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "Git & GitHub", level: 85, icon: "🔀" },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 gradient-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Technologies I work with</p>

          <div className="max-w-3xl mx-auto grid gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="glass-card p-4 hover-lift group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

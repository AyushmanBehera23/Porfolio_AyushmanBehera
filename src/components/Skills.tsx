import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 70 },
  { name: "HTML, CSS & JavaScript", level: 85 },
  { name: "Data Structures & Algorithms", level: 75 },
  { name: "AWS / Cloud Computing", level: 80 },
  { name: "Linux", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">MY EXPERTISE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Attitude is more important than the past, than education, than money, than circumstances, than what people do or say.
          </p>

          <div className="max-w-2xl space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 1, ease: "easeOut" }}
                    className="skill-bar-fill"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education sub-section */}
          <div className="mt-16" id="education">
            <h3 className="font-display text-xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="glass-card p-6"
              >
                <h4 className="font-display font-bold text-lg">Bachelor of Technology - Computer Science Engineering</h4>
                <p className="text-muted-foreground text-sm mt-1">Lovely Professional University, Punjab</p>
                <p className="text-muted-foreground text-sm">Minor: Cloud Computing</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

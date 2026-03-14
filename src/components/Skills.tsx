import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Web Dev" },
  { name: "HTML", category: "Web Dev" },
  { name: "CSS", category: "Web Dev" },
  { name: "React", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "AWS", category: "Cloud & OS" },
  { name: "Docker", category: "Cloud & OS" },
  { name: "Linux", category: "Cloud & OS" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "AZURE", category: "Cloud & OS" },
];

const categories = ["All", "Web Dev", "Languages", "Frameworks", "Cloud & OS", "Tools"];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="section-label">MY EXPERTISE</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
                SKILLS
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Attitude is more important than the past, than education, than money,
              than circumstances, than what people do or say.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, i) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 flex flex-col justify-center items-center text-center hover-lift group border border-border/50 hover:border-primary/50 transition-colors h-32"
                >
                  <div className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-semibold">
                    {skill.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

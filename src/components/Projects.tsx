import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Truth Seeker – AI News Fact Checker",
    desc: "AI chatbot that verifies news credibility using Gemini API.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI", "Gemini API"],
    github: "https://github.com/AyushmanBehera23",
  },
  {
    title: "YouTube AI Chatbot",
    desc: "A chatbot that interacts with YouTube content using the YouTube API.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/AyushmanBehera23",
  },
  {
    title: "AWS Architecture Design",
    desc: "Designed a scalable AWS cloud architecture for web deployment.",
    tech: ["AWS", "Cloud Architecture", "EC2", "S3"],
    github: "https://github.com/AyushmanBehera23",
  },
  {
    title: "Linux LVM Configuration",
    desc: "Configured LVM with disk expansion and ACL permissions in Linux.",
    tech: ["Linux", "LVM", "System Admin"],
    github: "https://github.com/AyushmanBehera23",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">What I've been building</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                className="glass-card p-6 hover-lift group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-lg leading-tight pr-4">{p.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <button className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
  title: "Pocket Planner",
  type: "Full-Stack Web App",
  date: "2025",
  bullets: [
    "Designed and developed a productivity web application that helps users organize daily tasks, schedules, and goals efficiently.",
    "Built a scalable backend using Python and FastAPI to handle task creation, updates, and data management with optimized API performance.",
    "Implemented a responsive frontend using JavaScript to provide a smooth user experience with dynamic task tracking and real-time updates."
  ],
  tech: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "Uvicorn"],
  github: "https://ayushmanbehera23.github.io/pocket-planner/"
},
  {
    title: "YouTube AI Chatbot",
    type: "Web Application",
    date: "2025",
    bullets: [
      "Interactive chatbot that engages with YouTube content using the YouTube API.",
      "Built with Python backend and web frontend for intuitive content interaction.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://ayushmanbehera23.github.io/TUBECHAT/",
  },
  {
    title: "AWS Architecture Design",
    type: "Cloud Project",
    date: "2024",
    bullets: [
      "Designed a scalable AWS cloud architecture for web deployment using EC2, S3, and VPC.",
      "Implemented security best practices and auto-scaling for production-ready infrastructure.",
    ],
    tech: ["AWS", "EC2", "S3", "Cloud Architecture"],
    github: "https://github.com/AyushmanBehera23/Aws-Architecture",
  },
  {
    title: "Linux Logical Volume Management",
    type: "System Administration",
    date: "2025",
    bullets: [
      "Configured LVM with disk expansion and ACL permissions in Linux environments.",
      "Implemented advanced storage management with automated backup solutions.",
    ],
    tech: ["Linux", "LVM", "System Admin", "Shell"],
    github: "https://github.com/AyushmanBehera23/LInux-LVM-And-Acl.git",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">MY PORTFOLIO</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            A curated selection of my best development projects that showcase my skills and expertise.
          </p>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="glass-card p-6 md:p-8 hover-lift group flex flex-col lg:flex-row gap-8"
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-bold text-xl hover:text-primary transition-colors inline-flex items-center gap-2"
                      >
                        {p.title}
                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        {p.type} • {p.date}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {p.github.includes("github.io") && (
                  <div className="lg:w-2/5 w-full rounded-xl overflow-hidden border border-border/50 bg-background/50 relative shadow-inner h-48 lg:h-auto min-h-[240px]">
                    <div className="absolute inset-0 group-hover:bg-transparent bg-background/10 transition-colors z-10 pointer-events-none"></div>
                    <iframe 
                      src={p.github} 
                      title={`${p.title} Preview`}
                      className="w-full h-full border-0 absolute top-0 left-0"
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

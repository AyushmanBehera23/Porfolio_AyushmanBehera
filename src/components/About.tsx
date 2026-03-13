import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Code, Cloud } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 gradient-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Get to know me better</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: User, title: "Student", desc: "CS Engineering at Lovely Professional University with Cloud Computing minor." },
              { icon: Code, title: "Developer", desc: "Building real-world projects with Python, web technologies, and modern tools." },
              { icon: Cloud, title: "Cloud Enthusiast", desc: "Passionate about AWS, cloud architecture, and scalable solutions." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-card p-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              I am a Computer Science Engineering student at Lovely Professional University with a minor in Cloud Computing.
              I enjoy building real-world projects using Python, web technologies, and cloud platforms.
              I am passionate about solving algorithmic problems and developing intelligent applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

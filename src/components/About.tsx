import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Download } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">ABOUT ME</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Passionate about creating meaningful{" "}
            <span className="gradient-text">digital experiences</span>
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-md">
            {[
              { val: "B.Tech", label: "CSE Degree" },
              { val: "Cloud", label: "Minor" },
              { val: "LPU", label: "University" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="glass-card p-4 text-center"
              >
                <p className="font-display text-2xl font-bold gradient-text">{s.val}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Computer Science Engineering student at Lovely Professional University with a minor in Cloud Computing. I enjoy building real-world projects using Python, web technologies, and cloud platforms. I am passionate about solving algorithmic problems and developing intelligent applications.
              </p>
              <blockquote className="border-l-2 border-primary/40 pl-4 text-muted-foreground italic text-sm mb-8">
                "Cloud computing isn't about where the code runs; it's about how the system behaves when the network partitions. My job is to minimize the blast radius of inevitable failures."
              </blockquote>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </a>
                <a
  href="/AyushmanBehera_Resume_2026.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-outline inline-flex items-center gap-2"
>
  <Download size={16} /> Download Resume
</a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold mb-4">Personal Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="text-foreground">Ayushman0426@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-foreground">Punjab, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">University</span>
                    <span className="text-foreground">LPU</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold mb-4">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["💻 Coding", "☁️ Cloud", "📚 Reading", "🎮 Gaming", "🎧 Music", "✈️ Traveling"].map((h) => (
                    <span key={h} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                <p className="text-muted-foreground text-sm">CGPA : 7.01</p>
              </motion.div>

              {/* 12th */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="glass-card p-6"
    >
      <h4 className="font-display font-bold text-lg">
        Kendriya Vidyalaya Berhampur (Class XII)
      </h4>
      <p className="text-muted-foreground text-sm">
        PCM
      </p>
      <p className="text-muted-foreground text-sm mt-1">
        2021 - 2023
      </p>
    </motion.div>

    {/* 10th */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5 }}
      className="glass-card p-6"
    >
      <h4 className="font-display font-bold text-lg">
        Kendriya Vidyalaya Chhawla New Delhi (Class X)
      </h4>
      <p className="text-muted-foreground text-sm mt-1">
        Completed in 2021
      </p>
    </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

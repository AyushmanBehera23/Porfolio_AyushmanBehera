import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const roles = ["CLOUD", "PYTHON"];
const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-medium">
            Aspiring Cloud Engineer & Python Developer
          </span>
        </motion.div>

        {/* Main heading - huge bold text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <h1 className="font-display font-bold leading-[0.95] tracking-tight">
            <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground">
              HI THERE
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground">
              I'M AYUSHMAN
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="gradient-text"
              >
                {roles[roleIndex]}
              </motion.span>
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground">
              DEVELOPER
            </span>
          </h1>
        </motion.div>

        {/* Bottom section - split layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border/50 pt-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-6">
                DISCOVER THE<br />
                PROFESSIONAL<br />
                JOURNEY OF A<br />
                <span className="gradient-text">DEVELOPER.</span>
              </h2>
              <a href="#about" className="btn-outline inline-flex items-center gap-2">
                About me <ArrowRight size={16} />
              </a>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A passionate Computer Science Engineering student at Lovely Professional University with a minor in Cloud Computing, committed to building intelligent applications and staying current with cloud technologies & industry trends.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/AyushmanBehera23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="mailto:Ayushman0426@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

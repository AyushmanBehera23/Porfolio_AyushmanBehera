import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "AWS Academy Graduate - Cloud Architecting",
    org: "Amazon Web Services",
    link: "https://www.credly.com/badges/f2d48d00-90b2-481e-b500-bfdcff50ce42/public_url"
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations ",
    org: "Amazon Web Services",
    link: "https://www.credly.com/badges/0312911d-feef-476a-8da0-023577380c35/public_url"
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    org: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=08671C2C831D731A10233513EF25FB09CA6E6EA46B5A4ED2FB38CD0B5EA5DC3B"
  },
  {
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    org: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=08671C2C831D731A10233513EF25FB09CA6E6EA46B5A4ED2FB38CD0B5EA5DC3B"
  },
  {
    name: "Linux Fundamentals",
    org: "Linux Foundation",
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12303722_877_20_08_2025.pdf"
  },
  {
    name: "Operating Systems Certification",
    org: "Scaler",
    link: "https://moonshot.scaler.com/s/sl/YQN1AJ8D-8"
  },
  {
    name: "Java Programming",
    org: "HackerRank",
    link: "https://www.hackerrank.com/certificates/6d9a00a82a95"
  },
  {
    name: "Computer Network and Internet Protocol",
    org: "Nptel",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs19/Course/NPTEL24CS19S45790012330424968.pdf"
  },
  {
    name: "Fundamentals of Network Engineering",
    org: "Udemy",
    link: "https://www.udemy.com/certificate/UC-d90af192-cb20-4210-92e4-5dee0cfa60fd/"
  },
  {
    name: "Learn C++",
    org: "CodeChef",
    link: "https://www.codechef.com/certificates/public/c795f94"
  },
  {
    name: "Computer Communications",
    org: "Coursera",
    link: "https://coursera.org/share/61ef28f4e600bf51eeae9343525db75d"
  }
];

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">ACHIEVEMENTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">CERTIFICATIONS</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certs.map((cert, i) => (
              <motion.a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  key={cert.name}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={inView ? { opacity: 1, scale: 1 } : {}}
  transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
  className="glass-card p-6 text-center hover-lift group cursor-pointer"
>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{cert.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{cert.org}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate <ExternalLink size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

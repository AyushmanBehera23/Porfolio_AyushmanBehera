import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">GET IN TOUCH</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">CONTACT ME</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Have a project in mind? Feel free to reach out and let's create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-lg mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Mail, label: "Email", value: "Ayushman0426@gmail.com", href: "mailto:Ayushman0426@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Punjab, India", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="font-display font-semibold text-sm mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a href="https://github.com/AyushmanBehera23" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="mailto:Ayushman0426@gmail.com" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <h3 className="font-display font-bold text-lg mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  maxLength={100}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  maxLength={255}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  maxLength={200}
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  maxLength={1000}
                />
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

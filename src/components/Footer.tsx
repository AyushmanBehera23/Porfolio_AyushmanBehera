import { Github, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          © 2026 Ayushman Behera — Built with <Heart size={14} className="text-primary" /> for cloud computing.
        </p>
        
        {/* Live Server Status Component */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-muted-foreground">Systems Operational</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <a href="https://github.com/AyushmanBehera23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="mailto:Ayushman0426@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

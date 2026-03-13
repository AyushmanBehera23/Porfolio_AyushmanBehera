import { Github, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        © 2026 Ayushman Behera — Built with <Heart size={14} className="text-destructive" /> for cloud computing.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/AyushmanBehera23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="mailto:Ayushman0426@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

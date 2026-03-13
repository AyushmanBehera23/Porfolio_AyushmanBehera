import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full pointer-events-none z-0 blur-[100px] mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
      />
      {/* Background Grid that gets revealed */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15) 0%, transparent 400px), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />
    </>
  );
};

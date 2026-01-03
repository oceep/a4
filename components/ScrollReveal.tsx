import React, { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getVariants = (): { hidden: Variant; visible: Variant } => {
    const distance = 50;
    const duration = 0.8;
    
    let initialOffset = { x: 0, y: 0 };
    
    switch(direction) {
      case "up": initialOffset = { x: 0, y: distance }; break;
      case "down": initialOffset = { x: 0, y: -distance }; break;
      case "left": initialOffset = { x: distance, y: 0 }; break;
      case "right": initialOffset = { x: -distance, y: 0 }; break;
      case "none": initialOffset = { x: 0, y: 0 }; break;
    }

    return {
      hidden: { opacity: 0, ...initialOffset },
      visible: { 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { duration, delay, ease: "easeOut" } 
      }
    };
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// 15 High-quality placeholder images
const images = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", // Classroom
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", // Writing
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", // Library
    "https://images.unsplash.com/photo-1427504746696-ea5abc71a380?q=80&w=2073&auto=format&fit=crop", // Chalkboard
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop", // Group friends
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", // Gathering
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop", // Laughing
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop", // Meeting
    "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2070&auto=format&fit=crop", // Graduation hat
    "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?q=80&w=2070&auto=format&fit=crop", // Diploma
    "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop", // Confetti
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop", // Group back
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop", // Friends sunset
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", // Discussion
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", // Girl laughing
];

const ScrollSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  // Map scroll progress (0 to 1) to image index (0 to 14)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine which image to show based on scroll percentage
    const index = Math.min(
        Math.floor(latest * images.length), 
        images.length - 1
    );
    setCurrentImg(index);
  });

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Overlay Text */}
        <div className="absolute z-20 text-center pointer-events-none mix-blend-difference">
            <h2 className="text-[10vw] font-bold text-white leading-none tracking-tighter opacity-80">
                KHOẢNH KHẮC
            </h2>
            <p className="text-white text-xl tracking-[0.5em] mt-4 uppercase">
                {currentImg + 1} / {images.length}
            </p>
        </div>

        {/* Images */}
        <div className="relative w-full h-full">
            {images.map((img, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out ${index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <img 
                        src={img} 
                        alt={`Sequence ${index}`} 
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-10 left-10 right-10 h-[2px] bg-white/20 z-30">
            <motion.div 
                className="h-full bg-purple-500"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />
        </div>

      </div>
    </section>
  );
};

export default ScrollSequence;
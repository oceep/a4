import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"]
  });

  const words = [
    "Thanh", "xuân", "như", "một", "cơn", "mưa", "rào.",
    "Cho", "dù", "bạn", "từng", "bị", "cảm", "lạnh",
    "vì", "tắm", "mưa,", "bạn", "vẫn", "muốn",
    "được", "đắm", "mình", "trong", "cơn", "mưa", "ấy", "lần", "nữa."
  ];

  return (
    <section id="manifesto" ref={containerRef} className="min-h-screen bg-black flex items-center justify-center py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-serif font-bold leading-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            const color = useTransform(scrollYProgress, [start, end], ["#333", "#fff"]);
            
            return (
              <motion.span 
                key={i}
                style={{ opacity, color }}
                className="transition-colors duration-200"
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]) }}
            className="mt-12"
        >
            <p className="text-purple-500 uppercase tracking-[0.3em] text-sm">Gửi thời niên thiếu tươi đẹp của chúng ta</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
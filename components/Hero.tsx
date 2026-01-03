import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
            <img 
                src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                alt="A4 Class Background" 
                className="w-full h-full object-cover opacity-60"
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-black"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center w-full">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-4 mb-6"
        >
            <div className="h-[1px] w-12 bg-purple-500"></div>
            <h2 className="text-purple-400 tracking-[0.4em] text-xs md:text-sm uppercase font-semibold">
                Since 2021 • K21-24
            </h2>
            <div className="h-[1px] w-12 bg-purple-500"></div>
        </motion.div>

        <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-7xl md:text-[10rem] font-bold text-white leading-[0.9] tracking-tighter mix-blend-difference"
            >
              CLASS A4
            </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="text-gray-300 text-lg md:text-2xl font-light italic max-w-2xl mx-auto mt-8 tracking-wide"
        >
          "Không chỉ là lớp học, chúng ta là một <span className="text-purple-400 font-semibold">huyền thoại</span>."
        </motion.p>
      </div>

      {/* Scroll Indicator - Fixed Centering */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-auto cursor-pointer mix-blend-difference"
        onClick={() => {
            document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 opacity-70">Scroll</span>
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
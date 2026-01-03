import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1000));
      setStep(1); // "A4 PRODUCTIONS"
      await new Promise(r => setTimeout(r, 2000));
      setStep(2); // "PRESENTS"
      await new Promise(r => setTimeout(r, 2000));
      setStep(3); // Fade out
      await new Promise(r => setTimeout(r, 1000));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
      animate={step === 3 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white font-serif text-4xl md:text-6xl tracking-[0.2em] font-bold">
              A4 PRODUCTION
            </h1>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-purple-500 font-mono text-xl md:text-2xl tracking-widest uppercase">
              Trân trọng giới thiệu
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Loading bar at bottom */}
      <div className="absolute bottom-10 left-10 right-10 h-[2px] bg-gray-900 overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
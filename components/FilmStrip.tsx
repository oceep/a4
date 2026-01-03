import React from 'react';
import { motion } from 'framer-motion';

const imagesRow1 = [
  "https://picsum.photos/400/300?random=101",
  "https://picsum.photos/400/300?random=102",
  "https://picsum.photos/400/300?random=103",
  "https://picsum.photos/400/300?random=104",
  "https://picsum.photos/400/300?random=105",
  "https://picsum.photos/400/300?random=106",
];

const imagesRow2 = [
  "https://picsum.photos/400/300?random=107",
  "https://picsum.photos/400/300?random=108",
  "https://picsum.photos/400/300?random=109",
  "https://picsum.photos/400/300?random=110",
  "https://picsum.photos/400/300?random=111",
  "https://picsum.photos/400/300?random=112",
];

const FilmStrip: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden flex flex-col gap-8 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none"></div>
      
      {/* Row 1 - Left */}
      <div className="flex relative overflow-hidden -rotate-2 scale-105">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {[...imagesRow1, ...imagesRow1].map((src, idx) => (
            <div key={idx} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 rounded-lg overflow-hidden border border-gray-800">
              <img src={src} alt="memory" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right */}
      <div className="flex relative overflow-hidden rotate-1 scale-105">
        <motion.div
          className="flex gap-4"
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {[...imagesRow2, ...imagesRow2].map((src, idx) => (
            <div key={idx} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 rounded-lg overflow-hidden border border-gray-800">
              <img src={src} alt="memory" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FilmStrip;
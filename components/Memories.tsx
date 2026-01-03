import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Memory } from '../types';

const memories: Memory[] = [
    { id: 1, title: "Khai Giảng", date: "05/09/2021", description: "Ngày đầu tiên chúng mình gặp nhau, nắng vàng rực rỡ trên sân trường. Ánh mắt còn ngại ngùng, nhưng nụ cười đã bắt đầu nở.", image: "https://picsum.photos/800/1000?random=20" },
    { id: 2, title: "Hội Trại 26/3", date: "26/03/2022", description: "Lửa trại bùng lên, tay trong tay nối thành vòng tròn lớn. Đêm không ngủ, chỉ có tiếng cười và tiếng đàn guitar vang vọng.", image: "https://picsum.photos/800/600?random=21" },
    { id: 3, title: "Đà Lạt Mộng Mơ", date: "15/07/2023", description: "Thanh xuân không phải là đích đến, mà là những chuyến đi. Đà Lạt lạnh, nhưng tim mình ấm vì có nhau.", image: "https://picsum.photos/800/800?random=22" },
    { id: 4, title: "Ngày Trưởng Thành", date: "20/05/2024", description: "Những giọt nước mắt lăn dài, những cái ôm thật chặt. Tạm biệt nhé, hẹn ngày gặp lại ở đỉnh vinh quang.", image: "https://picsum.photos/800/600?random=23" },
];

const MemoryItem: React.FC<{ memory: Memory; index: number }> = ({ memory, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const isEven = index % 2 === 0;
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-40 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <motion.div 
                style={{ y, opacity }}
                className="flex-1 w-full"
            >
                <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-purple-900/10 group h-[500px]">
                    <img src={memory.image} alt={memory.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 border-[10px] border-black/20 pointer-events-none"></div>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full text-center md:text-left px-6"
            >
                <div className="inline-block mb-4 overflow-hidden">
                    <span className="text-purple-500 font-mono text-sm tracking-widest uppercase border-b border-purple-500 pb-1">{memory.date}</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-none">{memory.title}</h3>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0">{memory.description}</p>
            </motion.div>
        </div>
    );
};

const Memories: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-[#030303] relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-white/5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-32"
            >
                <h2 className="text-sm font-bold tracking-[0.5em] text-white uppercase mb-2">Hành trình</h2>
                <div className="h-[2px] w-20 bg-purple-500 mx-auto"></div>
            </motion.div>

            {memories.map((memory, index) => (
                <MemoryItem key={memory.id} memory={memory} index={index} />
            ))}
        </div>
    </section>
  );
};

export default Memories;
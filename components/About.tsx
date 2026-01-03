import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-16 bg-black text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex-1 w-full max-w-xl">
        <ScrollReveal direction="right">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group">
            <img 
              src="https://picsum.photos/600/800?random=1" 
              alt="Class activities" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex-1 max-w-xl">
        <ScrollReveal direction="left" delay={0.2}>
          <h3 className="text-purple-500 font-bold tracking-widest uppercase mb-4 text-sm">Về chúng tôi</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Nơi Khởi Nguồn <br/> <span className="text-gray-500">Của Những Ước Mơ</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Tập thể 12A4 được thành lập với 40 thành viên ưu tú. Mỗi cá nhân là một mảnh ghép độc đáo, tạo nên một bức tranh thanh xuân rực rỡ và đầy màu sắc.
            </p>
            <p>
              Chúng mình không chỉ cùng nhau chinh phục tri thức mà còn sát cánh bên nhau trong mọi hoạt động, từ những buổi ngoại khóa sôi động đến những giây phút lắng đọng của tuổi học trò.
            </p>
          </div>
          
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">40</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Thành viên</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Đoàn kết</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Kỷ niệm</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
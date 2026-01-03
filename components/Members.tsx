import React from 'react';
import { Member } from '../types';
import ScrollReveal from './ScrollReveal';

const members: Member[] = [
  { id: 1, name: "Nguyễn Văn A", role: "Lớp Trưởng", image: "https://picsum.photos/300/300?random=10", quote: "Dẫn đầu bằng sự gương mẫu." },
  { id: 2, name: "Trần Thị B", role: "Bí Thư", image: "https://picsum.photos/300/300?random=11", quote: "Nhiệt huyết là chìa khóa." },
  { id: 3, name: "Lê Văn C", role: "Cây Hài", image: "https://picsum.photos/300/300?random=12", quote: "Cười lên đi chờ chi." },
  { id: 4, name: "Phạm Thị D", role: "Học Bá", image: "https://picsum.photos/300/300?random=13", quote: "Tri thức là sức mạnh." },
  { id: 5, name: "Hoàng Văn E", role: "Ca Sĩ", image: "https://picsum.photos/300/300?random=14", quote: "Âm nhạc kết nối tâm hồn." },
  { id: 6, name: "Đỗ Thị F", role: "Thủ Quỹ", image: "https://picsum.photos/300/300?random=15", quote: "Tiền nong phân minh." },
  { id: 7, name: "Vũ Văn G", role: "Vận Động Viên", image: "https://picsum.photos/300/300?random=16", quote: "Khỏe để học tập." },
  { id: 8, name: "Ngô Thị H", role: "Thành Viên", image: "https://picsum.photos/300/300?random=17", quote: "Yêu A4 vô cùng." },
];

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-purple-500/50">
    <div className="aspect-square overflow-hidden">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
    </div>
    <div className="p-6 relative z-10 bg-gray-900/90 backdrop-blur-sm -mt-12 mx-4 rounded-lg border border-gray-800 shadow-xl">
      <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
      <p className="text-purple-400 text-sm font-medium uppercase tracking-wide mb-3">{member.role}</p>
      <p className="text-gray-400 text-sm italic">"{member.quote}"</p>
    </div>
  </div>
);

const Members: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
       <div className="max-w-7xl mx-auto">
        <ScrollReveal width="100%" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Gương Mặt A4</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Những cá nhân xuất sắc tạo nên một tập thể vững mạnh. Cùng điểm qua những gương mặt tiêu biểu của gia đình A4 nhé.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.1} direction="up" width="100%">
              <MemberCard member={member} />
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-8 py-3 border border-gray-700 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
                Xem tất cả thành viên
             </button>
        </div>
      </div>
    </section>
  );
};

export default Members;
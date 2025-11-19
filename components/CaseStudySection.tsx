import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "DVL Lab Control",
    category: "IoT & AI System",
    desc: "Hệ thống quản lý phòng Lab thông minh với điều khiển từ xa và giám sát cảm biến.",
    image: "/images/smartlab.png"
  },
  {
    title: "BookingAI Chatbot",
    category: "RAG & AgentAI",
    desc: "Chatbot đặt lịch thông minh, xử lý ngôn ngữ tự nhiên và tích hợp Calendar API.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
  },
  {
    title: "UAV Drone Platform",
    category: "Embedded & AI",
    desc: "Nền tảng điều khiển và phân tích dữ liệu hình ảnh từ Drone phục vụ khảo sát.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Laios Coach",
    category: "Learning Assistant",
    desc: "Trợ lý ảo hỗ trợ học tập cá nhân hóa dựa trên lộ trình người dùng.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  }
];

const CaseStudySection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Dự án nổi bật</h2>
            <p className="text-gray-400">Những dự án tiêu biểu chúng tôi đã triển khai thành công.</p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm">
            Xem tất cả dự án
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-90 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.desc}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm w-full">
            Xem tất cả dự án
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
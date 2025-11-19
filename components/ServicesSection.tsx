import React from 'react';
import { MessageSquare, BrainCircuit, Layers, Radio, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "AI Chatbot Đa Kênh",
    desc: "Tích hợp Zalo OA, Web, App. Tự động chăm sóc khách hàng 24/7 với NLP tiếng Việt tự nhiên.",
    icon: <MessageSquare className="w-10 h-10" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "LLM Automation",
    desc: "Triển khai RAG, AI Agents, MoE pipelines tối ưu hóa quy trình xử lý dữ liệu doanh nghiệp.",
    icon: <BrainCircuit className="w-10 h-10" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Custom AI Platform",
    desc: "Xây dựng nền tảng AI riêng biệt, huấn luyện model trên dữ liệu nội bộ, bảo mật tuyệt đối.",
    icon: <Layers className="w-10 h-10" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "IoT + AI Systems",
    desc: "Hệ thống cảm biến thông minh, Lab Management, tích hợp MQTT xử lý dữ liệu thời gian thực.",
    icon: <Radio className="w-10 h-10" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Software Development",
    desc: "Outsource Web/App trọn gói với NextJS, NestJS, Python, React Native chất lượng cao.",
    icon: <Code2 className="w-10 h-10" />,
    color: "from-indigo-500 to-blue-600"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Dịch vụ cốt lõi</span>
          <h2 className="text-4xl font-display font-bold mt-2 mb-6">Giải pháp công nghệ toàn diện</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative p-1 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 hover:from-blue-500/20 hover:to-purple-500/20 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-dark-900 m-[1px] rounded-2xl z-0"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 shadow-lg`}>
                   <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-300 transition-all">
                      {service.icon}
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                  Khám phá ngay <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
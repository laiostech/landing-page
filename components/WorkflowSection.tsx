import React from 'react';
import { Search, PenTool, Code, TestTube, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Phân tích yêu cầu",
    desc: "Lắng nghe, thu thập yêu cầu và tư vấn giải pháp phù hợp nhất với bài toán doanh nghiệp.",
    icon: <Search className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Thiết kế hệ thống",
    desc: "Xây dựng kiến trúc AI, Database, API và wireframe giao diện chi tiết.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Phát triển (Sprint)",
    desc: "Coding và huấn luyện mô hình AI theo từng giai đoạn ngắn (Sprint) để đảm bảo tiến độ.",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Kiểm thử & Triển khai",
    desc: "Test kỹ lưỡng (UAT) và deploy hệ thống lên môi trường production.",
    icon: <TestTube className="w-6 h-6" />
  },
  {
    id: "05",
    title: "Bàn giao & Bảo trì",
    desc: "Chuyển giao mã nguồn, tài liệu và hỗ trợ vận hành trọn đời.",
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      {/* Background decorative line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Quy trình làm việc</h2>
          <p className="text-gray-400">Tinh gọn, minh bạch và hiệu quả.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 50 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6 border border-blue-500/30 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative z-20 bg-dark-900">
                  <span className="text-blue-400 group-hover:text-white transition-colors">{step.icon}</span>
                </div>

                <div className="lg:absolute top-8 left-1/2 w-full h-[2px] bg-blue-500/20 -z-10 hidden lg:block"
                  style={{ display: index === steps.length - 1 ? 'none' : 'block' }}></div>

                <span className="text-4xl font-display font-bold text-white/50 absolute -top-10 select-none group-hover:text-blue-400 transition-colors">
                  {step.id}
                </span>

                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
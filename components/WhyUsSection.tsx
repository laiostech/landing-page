import React from 'react';
import { Rocket, Users, Coins, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: "Triển khai siêu tốc",
    desc: "MVP AI hoàn thiện chỉ trong 2–4 tuần. Quy trình Agile giúp sản phẩm ra thị trường nhanh nhất."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Đội ngũ chuyên sâu",
    desc: "Tập hợp các kỹ sư AI, Backend, FE và IoT giàu kinh nghiệm từ các trường đại học top đầu."
  },
  {
    icon: <Coins className="w-8 h-8 text-green-400" />,
    title: "Chi phí tối ưu",
    desc: "Mô hình Project-based hoặc Dedicated team linh hoạt, phù hợp ngân sách startup & SME."
  },
  {
    icon: <Headset className="w-8 h-8 text-red-400" />,
    title: "Support 24/7",
    desc: "Hỗ trợ kỹ thuật trọn đời. Cam kết bảo trì và nâng cấp hệ thống liên tục."
  }
];

const WhyUsSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tại sao chọn <span className="text-blue-500">Laios?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chúng tôi không chỉ viết code, chúng tôi kiến tạo giải pháp công nghệ mang lại giá trị thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass glass-hover p-6 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
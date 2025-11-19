import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 40 : 80;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(100, 150, 255, 0.5)';
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-300 text-xs font-medium uppercase tracking-wide">Giải pháp AI hàng đầu Việt Nam</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Giải pháp AI cho <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                Tương lai của Doanh nghiệp
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Laios Technology – Dịch vụ cung cấp giải pháp AI giúp doanh nghiệp tăng tốc số hóa với chi phí tối ưu và tốc độ vượt trội.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-medium text-white transition-all duration-300 flex items-center justify-center overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Nhận tư vấn miễn phí <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#portfolio" className="px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Xem Case Studies
              </a>
            </div>
          </motion.div>

          {/* 3D Visual / Hologram representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center h-[400px] md:h-[600px]"
          >
            <div className="relative w-full h-full max-w-[500px] flex items-center justify-center animate-float">
              {/* Abstract 3D Hologram Structure */}
              <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

              {/* Center Core */}
              <div className="relative w-48 h-48 bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl transform rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] z-20">
                <Cpu className="w-20 h-20 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                {/* Scanner line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent w-full h-[20%] top-0 animate-[scan_3s_ease-in-out_infinite]"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-24 h-24 glass rounded-xl flex items-center justify-center animate-[bounce_4s_infinite] z-10">
                <Network className="text-purple-400 w-10 h-10" />
              </div>

              <div className="absolute bottom-20 left-0 w-32 h-16 glass rounded-lg flex items-center justify-center animate-[bounce_5s_infinite_reverse] z-30 border-l-4 border-l-cyan-400">
                <div className="text-xs font-mono text-cyan-300">
                  <div>STATUS: ACTIVE</div>
                  <div>AI: TRAINING...</div>
                </div>
              </div>

              {/* Orbital Rings */}
              <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
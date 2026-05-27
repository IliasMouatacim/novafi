"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-50 rounded-full opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-sky-50 rounded-full opacity-40"
        />
        {/* Floating dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Powerful Tools for{" "}
            <span className="text-gradient">Smarter Finance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-lg leading-relaxed mb-8"
          >
            From budgeting and analytics to security and investments — discover
            the comprehensive suite of tools designed to give you complete
            financial control.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: "📊", label: "Smart Analytics" },
              { icon: "🔒", label: "Bank-Grade Security" },
              { icon: "⚡", label: "Real-time Insights" },
              { icon: "🌍", label: "Global Access" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-card border border-gray-100 cursor-default"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

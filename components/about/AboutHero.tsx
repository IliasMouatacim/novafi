"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2016", label: "Founded" },
  { value: "150M+", label: "Active Users" },
  { value: "50+", label: "Countries" },
  { value: "4.9★", label: "App Rating" },
];

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-sky-50 rounded-full opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary">Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Building the Future of{" "}
            <span className="text-gradient">Finance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Since 2016, we&apos;ve been on a mission to democratize financial
            management. We believe everyone deserves access to powerful,
            intuitive tools that make managing money simple and even enjoyable.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 15px 40px -5px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 text-center cursor-default"
            >
              <div className="text-3xl font-extrabold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              A world where financial wellness is accessible to everyone, regardless
              of background or expertise. We envision tools so intuitive that
              managing money feels natural and empowering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed">
              To build the most trusted and innovative financial platform that
              empowers individuals and businesses to take control of their
              financial future through technology and design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function TestimonialsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      {/* Background */}
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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary">
              Client Reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Loved by{" "}
            <span className="text-gradient">Millions</span> Worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-lg leading-relaxed mb-8"
          >
            Don&apos;t just take our word for it. Here&apos;s what real users
            have to say about how NovaFi transformed their financial
            management experience.
          </motion.p>

          {/* Rating overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-5 shadow-card border border-gray-100"
          >
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gradient">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">150M+</div>
              <div className="text-xs text-gray-500">Happy Users</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">50K+</div>
              <div className="text-xs text-gray-500">5-Star Reviews</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

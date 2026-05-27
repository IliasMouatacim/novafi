"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const [topCard, setTopCard] = useState<number | null>(null);
  const [dragging, setDragging] = useState<number | null>(null);

  const dragProps = (cardIndex: number) => ({
    drag: true as const,
    dragMomentum: false,
    dragElastic: 0.15,
    onDragStart: () => {
      setTopCard(cardIndex);
      setDragging(cardIndex);
    },
    onDragEnd: () => {
      setDragging(null);
    },
    whileDrag: { scale: 1.05, cursor: "grabbing" as const },
    style: {
      zIndex: topCard === cardIndex ? 50 : 10 + cardIndex,
      cursor: "grab",
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient"
    >
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
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-sky-50 rounded-full opacity-40"
        />
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 14}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-medium text-primary">
                  #1 Finance Platform in 2026
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  Where Comfort
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block"
                >
                  Meets{" "}
                  <span className="text-gradient">Finance</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
              >
                We are dedicated to providing you with a seamless and
                user-friendly experience that makes managing your finances a
                breeze.
              </motion.p>

              {/* App Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <MagneticButton>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] opacity-80 leading-none">
                        Download on the
                      </div>
                      <div className="text-sm font-semibold leading-tight">
                        App Store
                      </div>
                    </div>
                  </motion.button>
                </MagneticButton>

                <MagneticButton>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3 rounded-xl hover:border-gray-300 transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] opacity-60 leading-none">
                        GET IT ON
                      </div>
                      <div className="text-sm font-semibold leading-tight">
                        Play Store
                      </div>
                    </div>
                  </motion.button>
                </MagneticButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: "10+", label: "Years of\nexperience" },
                  { value: "150M+", label: "Total Users" },
                  { value: "10M+", label: "Transactions/day" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-default"
                  >
                    <span className="text-2xl font-extrabold text-gradient">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400 whitespace-pre-line leading-tight">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Main card / Dashboard */}
              <motion.div
                {...dragProps(0)}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="absolute top-8 right-0 w-[380px]"
              >
                <div className={`bg-white rounded-3xl shadow-card p-6 ${dragging === 0 ? '' : 'card-float-3'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Balance
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-300 rounded-full" />
                      <span className="w-2 h-2 bg-gray-300 rounded-full" />
                      <span className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">
                      Expenses This Week
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-extrabold text-gray-900">
                        $38,622
                      </span>
                      <span className="text-sm font-medium text-green-500 mb-1">
                        +12.5%
                      </span>
                    </div>
                  </div>
                  {/* Mini chart */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 45, 80, 55, 90, 70, 60, 85, 75, 95, 65].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                          className={`flex-1 rounded-md ${
                            i === 10
                              ? "bg-gradient-primary"
                              : "bg-blue-100"
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Visa Card */}
              <motion.div
                {...dragProps(1)}
                initial={{ opacity: 0, x: 60, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                className="absolute top-2 right-[-20px] w-64"
              >
                <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-5 text-white shadow-xl ${dragging === 1 ? '' : 'card-float-1'}`}>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-7 bg-yellow-400/80 rounded-md" />
                    <svg className="w-12 h-4" viewBox="0 0 48 16" fill="white">
                      <text
                        x="0"
                        y="14"
                        fontSize="16"
                        fontWeight="bold"
                        fontStyle="italic"
                      >
                        VISA
                      </text>
                    </svg>
                  </div>
                  <div className="text-sm tracking-[0.25em] mb-4 font-mono opacity-90">
                    •••• 7891 1533
                  </div>
                  <div className="flex justify-between text-xs opacity-70">
                    <span>Holmes</span>
                    <span>09/28</span>
                  </div>
                </div>
              </motion.div>

              {/* Business Card */}
              <motion.div
                {...dragProps(2)}
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                className="absolute top-44 left-0 w-56"
              >
                <div className={`bg-white rounded-2xl shadow-card p-4 border border-gray-100 ${dragging === 2 ? '' : 'card-float-2'}`}>
                  <div className="text-xs text-gray-400 mb-1">
                    Business Card
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-2">
                    Iman Gadzhi
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500">CEO & Founder</div>
                  </div>
                </div>
              </motion.div>

              {/* Income/Spending toggle */}
              <motion.div
                {...dragProps(3)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, type: "spring" }}
                className="absolute top-20 left-24"
              >
                <div className={`flex items-center gap-2 bg-white rounded-full px-1 py-1 shadow-card ${dragging === 3 ? '' : 'card-float-1'}`}>
                  <span className="bg-gradient-primary text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    Income
                  </span>
                  <span className="text-xs font-medium text-gray-500 px-4 py-2 flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    Spending
                  </span>
                </div>
              </motion.div>

              {/* Amount badge */}
              <motion.div
                {...dragProps(4)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                className="absolute bottom-32 right-12"
              >
                <div className={`bg-primary text-white rounded-2xl px-5 py-3 shadow-glow ${dragging === 4 ? '' : 'card-float-3'}`}>
                  <div className="text-xs opacity-80 mb-0.5">Total Saved</div>
                  <div className="text-xl font-bold">$24,320</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

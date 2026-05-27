"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AppShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [positions, setPositions] = useState(["left", "center", "right"]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      setPositions((prev) => [prev[2], prev[0], prev[1]]);
    } else if (info.offset.x < -swipeThreshold) {
      setPositions((prev) => [prev[1], prev[2], prev[0]]);
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 100 },
    left: { x: "-110%", y: 0, scale: 0.85, rotate: -8, zIndex: 10, opacity: 0.6 },
    center: { x: "0%", y: 0, scale: 1.05, rotate: 0, zIndex: 30, opacity: 1 },
    right: { x: "110%", y: 0, scale: 0.85, rotate: 8, zIndex: 10, opacity: 0.6 },
  };

  return (
    <section className="py-24 bg-gradient-dark text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Improve your financial control with a variety of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              innovative tools
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            that provide user-friendly solutions to maximise financial
            management efficiency
          </p>
        </motion.div>

        {/* Phone Mockups Row */}
        <div className="relative h-[650px] flex justify-center items-center mt-12 w-full max-w-4xl mx-auto perspective-1000">
          {/* Left Phone - Transactions */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? positions[0] : "hidden"}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute w-64 md:w-[280px] cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-gray-800 rounded-[2rem] p-2.5 shadow-2xl border border-gray-700">
                <div className="bg-white rounded-[1.5rem] overflow-hidden text-gray-900">
                  <div className="p-4">
                    <div className="text-sm font-bold mb-4">Recent Transactions</div>
                    {[
                      { name: "Receive from Armin", date: "November 10, 2023", amount: "-$190.00", color: "text-red-500" },
                      { name: "Transfer to Mikasa", date: "November 12, 2023", amount: "$400.00", color: "text-green-500" },
                    ].map((tx, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.2 }}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 0 ? "bg-red-50" : "bg-green-50"}`}>
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-red-400" : "bg-green-400"}`} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold">{tx.name}</div>
                            <div className="text-[10px] text-gray-400">{tx.date}</div>
                          </div>
                        </div>
                        <span className={`text-xs font-bold ${tx.color}`}>{tx.amount}</span>
                      </motion.div>
                    ))}

                    {/* More transactions */}
                    {[
                      { name: "Netflix Subscription", amount: "-$15.99", color: "text-red-500" },
                      { name: "Salary Deposit", amount: "$3,200.00", color: "text-green-500" },
                      { name: "Grocery Store", amount: "-$87.50", color: "text-red-500" },
                    ].map((tx, i) => (
                      <motion.div
                        key={i + 2}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + i * 0.15 }}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.color.includes("red") ? "bg-red-50" : "bg-green-50"}`}>
                            <div className={`w-2 h-2 rounded-full ${tx.color.includes("red") ? "bg-red-400" : "bg-green-400"}`} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold">{tx.name}</div>
                            <div className="text-[10px] text-gray-400">Recent</div>
                          </div>
                        </div>
                        <span className={`text-xs font-bold ${tx.color}`}>{tx.amount}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Phone - Main Dashboard (bigger) */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? positions[1] : "hidden"}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute w-64 md:w-[280px] cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-gray-800 rounded-[2.5rem] p-3 shadow-2xl border border-gray-700 ring-1 ring-blue-500/20">
                <div className="bg-white rounded-[2rem] overflow-hidden text-gray-900">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-3 pb-1">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="w-20 h-5 bg-gray-900 rounded-full" />
                    <div className="flex gap-0.5">
                      <div className="w-3.5 h-2 bg-gray-900 rounded-sm" />
                    </div>
                  </div>

                  <div className="px-5 pb-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">NY</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Welcome back</div>
                        <div className="text-sm font-bold">Noland Yeager</div>
                      </div>
                      <div className="ml-auto">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                      <div className="text-xs text-gray-400 mb-1">Total Balance</div>
                      <div className="text-2xl font-extrabold">$38,622.00</div>
                      <div className="text-[10px] text-green-500 font-medium mt-1">↑ +12.5% from last month</div>
                    </div>

                    <div className="text-xs text-gray-400 mb-2">View statistics</div>

                    <div className="flex gap-2 mb-5">
                      {["Tips", "Transfer", "Connect"].map((item, i) => (
                        <div key={item} className="flex-1 bg-gray-50 rounded-xl p-2.5 text-center">
                          <div className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center mb-1 ${
                            i === 0 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                          }`}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                          </div>
                          <span className="text-[9px] text-gray-500 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-3 text-white mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">✨</span>
                        <div>
                          <div className="text-[10px] font-bold">Get 26% Special Discount</div>
                          <div className="text-[8px] opacity-80">Use NovaFi Card at any online shops!</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold">My cards</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[10px] font-semibold">NovaFi</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 italic">VISA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Phone - Cards */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? positions[2] : "hidden"}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute w-64 md:w-[280px] cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="bg-gray-800 rounded-[2rem] p-2.5 shadow-2xl border border-gray-700">
                <div className="bg-white rounded-[1.5rem] overflow-hidden text-gray-900">
                  <div className="p-4">
                    <div className="text-sm font-bold mb-4">My Cards</div>
                    
                    {/* NovaFi branded card */}
                    <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl p-4 text-white mb-4 shadow-lg">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          </svg>
                          <span className="text-[10px] font-medium opacity-80">NovaFi</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold italic">VISA</span>
                        </div>
                      </div>
                      <div className="text-xs tracking-[0.2em] font-mono mb-3 opacity-90">
                        •••• •••• •••• 4521
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-[8px] opacity-60">NAME</div>
                          <div className="text-[10px] font-semibold">James Moriarty</div>
                        </div>
                        <div>
                          <div className="text-[8px] opacity-60">EXP</div>
                          <div className="text-[10px] font-semibold">12/27</div>
                        </div>
                      </div>
                    </div>

                    {/* Second card */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white shadow-lg">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-8 h-5 bg-yellow-400/80 rounded" />
                        <span className="text-xs font-bold italic">VISA</span>
                      </div>
                      <div className="text-xs tracking-[0.2em] font-mono mb-3 opacity-90">
                        •••• •••• •••• 7891
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-[8px] opacity-60">NAME</div>
                          <div className="text-[10px] font-semibold">Noland Yeager</div>
                        </div>
                        <div>
                          <div className="text-[8px] opacity-60">BALANCE</div>
                          <div className="text-[10px] font-semibold">$2,735.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Logo below phones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">NovaFi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

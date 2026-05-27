"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const impactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Providing the best service possible",
    description: "to enhance your experience and provide optimal security for your account",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: "Bank with Confidence",
    description: "Security measures that ensure your financial assets are protected by the most advanced security technologies and protocols.",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[100px] opacity-10" />
              
              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-[280px] mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 pt-4 pb-2">
                      <span className="text-xs font-medium text-gray-900">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm" />
                        <div className="w-1.5 h-2 bg-gray-900 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="px-5 pb-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">NY</span>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Welcome back</div>
                          <div className="text-sm font-bold text-gray-900">Noland Yeager</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                        <div className="text-xs text-gray-400 mb-1">Total Balance</div>
                        <div className="text-2xl font-extrabold text-gray-900">$38,622.00</div>
                      </div>

                      <div className="flex gap-2 mb-5">
                        {["Tips", "Transfer", "Connect"].map((item, i) => (
                          <motion.div
                            key={item}
                            whileHover={{ scale: 1.05 }}
                            className="flex-1 bg-gray-50 rounded-xl p-3 text-center cursor-pointer"
                          >
                            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${
                              i === 0 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                            }`}>
                              {i === 0 && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                              )}
                              {i === 1 && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                              )}
                              {i === 2 && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.058a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
                                </svg>
                              )}
                            </div>
                            <span className="text-[10px] text-gray-500 font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="bg-gradient-primary rounded-xl p-3 text-white mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🎉</span>
                          <div>
                            <div className="text-xs font-bold">Get 26% Special Discount</div>
                            <div className="text-[10px] opacity-80">Use NovaFi Card at any online shops!</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-gray-700">My Cards</span>
                          <span className="text-[10px] text-primary font-medium cursor-pointer">See all</span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-gray-900">NovaFi</div>
                              <div className="text-[10px] text-gray-400">Primary</div>
                            </div>
                          </div>
                          <svg className="w-10 h-4" viewBox="0 0 48 16" fill="#1a1f71">
                            <text x="0" y="14" fontSize="14" fontWeight="bold" fontStyle="italic">VISA</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className="absolute top-16 -right-4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-2xl shadow-card p-3 border border-gray-100 w-52"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400">Transfer Successful</div>
                      <div className="text-xs font-bold text-gray-900">+ $1,250.00</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-primary bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Impact for{" "}
                <span className="text-gradient">Users</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Our platform provides users with in-depth analysis, intelligent
                planning, and solutions for users.
              </p>
            </motion.div>

            <div className="space-y-6">
              {impactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                  whileHover={{ x: 8, boxShadow: "0 10px 40px -5px rgba(0,0,0,0.08)" }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card transition-all duration-300 cursor-default"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4 group"
              >
                See all benefits
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

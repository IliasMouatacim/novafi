"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 md:p-16"
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"
            />
            {/* Dot grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
              >
                Subscribe to our newsletter for a wealth of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  financial insights
                </span>{" "}
                delivered straight to your inbox
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-sm leading-relaxed"
              >
                Join 50,000+ subscribers who receive weekly tips on budgeting,
                investing, and maximizing their financial potential.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 40px rgba(37, 99, 235, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:shadow-xl transition-shadow cursor-pointer whitespace-nowrap"
                  >
                    {submitted ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Subscribed!
                      </motion.span>
                    ) : (
                      "Subscribe →"
                    )}
                  </motion.button>
                </div>
              </form>

              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {["AK", "BL", "CM", "DN"].map((initials, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[9px] font-bold"
                    >
                      {initials}
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs text-gray-400">
                  Join <span className="text-white font-semibold">50,000+</span>{" "}
                  subscribers
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

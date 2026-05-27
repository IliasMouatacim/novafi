"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "This app is excellent! With an intuitive interface for advanced reporting, robust data security, and efficient and secure financial management. I need for a fast and reliable solution.",
    name: "Christopher Bennett",
    role: "Finance Manager at CityGo",
    avatar: "CB",
    rating: 5,
  },
  {
    text: "NovaFi transformed how I manage my business finances. The real-time analytics and smart budgeting features have saved me hours every week. Absolutely game-changing!",
    name: "Sarah Mitchell",
    role: "CEO at TechVenture",
    avatar: "SM",
    rating: 5,
  },
  {
    text: "The security features alone make NovaFi worth it. Bank-grade encryption with the simplicity of a consumer app. My team loves the collaborative budgeting tools.",
    name: "David Park",
    role: "CTO at FinanceFlow",
    avatar: "DP",
    rating: 5,
  },
  {
    text: "I've tried dozens of financial apps, and nothing comes close to NovaFi. The AI-powered insights have helped me reduce unnecessary spending by 34% in just two months.",
    name: "Elena Rodriguez",
    role: "Freelance Consultant",
    avatar: "ER",
    rating: 5,
  },
  {
    text: "Outstanding customer support and constantly improving features. NovaFi listens to its users and delivers updates that actually matter. Best fintech platform of 2026.",
    name: "Michael Chen",
    role: "Product Lead at NexaPay",
    avatar: "MC",
    rating: 5,
  },
];

export default function Testimonials() {
  const [cards, setCards] = useState(testimonials);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        if (topCard) newCards.push(topCard);
        return newCards;
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
              What our{" "}
              <span className="text-gradient">clients</span> say
            </h2>

            <div className="relative h-[350px] w-full mt-8">
              {cards.map((card, index) => {
                const isTop = index === 0;
                return (
                  <motion.div
                    key={card.name}
                    className={`absolute inset-0 bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl ${
                      isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                    }`}
                    initial={false}
                    animate={{
                      scale: 1 - index * 0.05,
                      y: index * 15,
                      zIndex: testimonials.length - index,
                      opacity: 1 - index * 0.2,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    whileDrag={{ scale: 1.05, rotateZ: isTop ? (Math.random() > 0.5 ? 2 : -2) : 0 }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      &ldquo;{card.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {card.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {card.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {card.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Floating Reviews Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:block relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {testimonials.slice(0, 4).map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 40px -5px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card cursor-default"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-3.5 h-3.5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">
                    &ldquo;{t.text.slice(0, 100)}...&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">
                        {t.name}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

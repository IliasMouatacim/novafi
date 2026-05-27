"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tabs = [
  { id: "planning", label: "Planning", icon: "📊" },
  { id: "management", label: "Management", icon: "⚙️" },
  { id: "analysis", label: "Analysis", icon: "📈" },
  { id: "accessibility", label: "Accessibility", icon: "♿" },
  { id: "security", label: "Security", icon: "🔒" },
  { id: "monitoring", label: "Monitoring", icon: "📡" },
  { id: "analytics", label: "Analytics", icon: "📉" },
];

const features: Record<
  string,
  { title: string; description: string; icon: string }[]
> = {
  planning: [
    {
      title: "Smart Budgeting",
      description:
        "AI-powered budget recommendations based on your spending patterns and financial goals.",
      icon: "💡",
    },
    {
      title: "Goal Setting",
      description:
        "Set and track financial goals with visual progress indicators and milestone alerts.",
      icon: "🎯",
    },
    {
      title: "Investment Planning",
      description:
        "Personalized investment strategies aligned with your risk tolerance and timeline.",
      icon: "📊",
    },
  ],
  management: [
    {
      title: "Account Overview",
      description:
        "Unified dashboard showing all your accounts, cards, and investments in one place.",
      icon: "🏦",
    },
    {
      title: "Card Management",
      description:
        "Freeze, unfreeze, and manage spending limits on all your cards instantly.",
      icon: "💳",
    },
    {
      title: "Bill Management",
      description:
        "Automate bill payments and never miss a due date with smart reminders.",
      icon: "📋",
    },
  ],
  analysis: [
    {
      title: "Spending Analysis",
      description:
        "Detailed breakdown of your spending habits with category-wise insights.",
      icon: "🔍",
    },
    {
      title: "Trend Detection",
      description:
        "Identify spending trends early and get proactive alerts on unusual activity.",
      icon: "📈",
    },
    {
      title: "Predictive Insights",
      description:
        "ML-powered predictions for future expenses based on historical data.",
      icon: "🤖",
    },
  ],
  accessibility: [
    {
      title: "Multi-language",
      description:
        "Available in 40+ languages with full localization support.",
      icon: "🌍",
    },
    {
      title: "Voice Control",
      description:
        "Navigate and manage your finances entirely through voice commands.",
      icon: "🎤",
    },
    {
      title: "Screen Reader",
      description:
        "Full WCAG 2.1 compliance with optimized screen reader support.",
      icon: "👁️",
    },
  ],
  security: [
    {
      title: "Biometric Auth",
      description:
        "Face ID, fingerprint, and multi-factor authentication for maximum security.",
      icon: "🛡️",
    },
    {
      title: "Encryption",
      description:
        "Bank-grade 256-bit AES encryption for all data at rest and in transit.",
      icon: "🔐",
    },
    {
      title: "Fraud Detection",
      description:
        "Real-time AI-powered fraud detection with instant transaction blocking.",
      icon: "🚨",
    },
  ],
  monitoring: [
    {
      title: "Real-time Alerts",
      description:
        "Instant push notifications for every transaction and account change.",
      icon: "🔔",
    },
    {
      title: "Credit Monitoring",
      description:
        "Track your credit score with weekly updates and improvement tips.",
      icon: "📊",
    },
    {
      title: "Market Watch",
      description:
        "Live market data and price alerts for your investment portfolio.",
      icon: "📡",
    },
  ],
  analytics: [
    {
      title: "Custom Reports",
      description:
        "Generate detailed financial reports for any time period with export options.",
      icon: "📄",
    },
    {
      title: "Tax Insights",
      description:
        "Automatic categorization of tax-deductible expenses and year-end summaries.",
      icon: "🧾",
    },
    {
      title: "Peer Comparison",
      description:
        "Anonymous benchmarking against users in similar demographics.",
      icon: "👥",
    },
  ],
};

export default function WhyChoose() {
  const [activeTab, setActiveTab] = useState("planning");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-medium text-primary bg-blue-50 px-4 py-1.5 rounded-full mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-gradient">NovaFi</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive financial tools designed to give you complete control
            and visibility over your finances.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-gradient-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features[activeTab].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 60px -10px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(37, 99, 235, 0.08)",
              }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card transition-all duration-500 group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-0.5 bg-gradient-primary mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

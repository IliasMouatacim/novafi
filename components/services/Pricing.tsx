"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals getting started with smart finance.",
    features: [
      "1 bank account connection",
      "Basic spending analytics",
      "Monthly reports",
      "Email support",
      "Mobile app access",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: "",
  },
  {
    name: "Professional",
    price: "$12",
    period: "/month",
    description:
      "For power users who want complete financial control and insights.",
    features: [
      "Unlimited bank connections",
      "AI-powered analytics",
      "Real-time notifications",
      "Investment tracking",
      "Priority support",
      "Custom reports & exports",
      "Tax categorization",
    ],
    cta: "Start 14-day Free Trial",
    popular: true,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description:
      "For businesses and teams that need advanced features and security.",
    features: [
      "Everything in Professional",
      "Team collaboration",
      "API access",
      "SSO & advanced security",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Audit logs",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-primary bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium transition-colors ${
                !annual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <motion.button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
                annual ? "bg-primary" : "bg-gray-300"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: annual ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span
              className={`text-sm font-medium transition-colors ${
                annual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Annual
            </span>
            {annual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start" style={{ perspective: 1500 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: annual ? 0 : -360 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, type: "spring", bounce: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                y: -8,
                boxShadow: plan.popular
                  ? "0 25px 60px -10px rgba(37, 99, 235, 0.25)"
                  : "0 20px 60px -10px rgba(0, 0, 0, 0.1)",
              }}
              className={`relative rounded-3xl p-8 transition-all duration-500 cursor-default ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow scale-105"
                  : "bg-white border border-gray-100 shadow-card"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                >
                  Most Popular
                </motion.div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price === "Free"
                    ? "Free"
                    : annual
                    ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                    : plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-blue-200" : "text-gray-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular
                          ? "bg-white/20"
                          : "bg-blue-50"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 ${
                          plan.popular ? "text-white" : "text-primary"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-blue-50" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              NovaFi
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 block ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-50 rounded-full border border-blue-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 40px rgba(37, 99, 235, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-gradient-primary text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          Get started
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-gray-700 block transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-700 block transition-colors"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-gray-700 block transition-colors"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all block ${
                      isActive(link.href)
                        ? "bg-blue-50 text-primary"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2 bg-gradient-primary text-white px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer"
              >
                Get started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

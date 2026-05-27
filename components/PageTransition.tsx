"use client";

import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        y: -16,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

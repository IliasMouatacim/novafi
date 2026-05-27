"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

const team = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    initials: "AC",
    gradient: "from-blue-500 to-cyan-500",
    bio: "Former VP at Goldman Sachs. 15+ years in fintech.",
  },
  {
    name: "Sarah Williams",
    role: "Co-Founder & CTO",
    initials: "SW",
    gradient: "from-violet-500 to-purple-500",
    bio: "Ex-Google engineer. Built systems serving 1B+ users.",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Design",
    initials: "MJ",
    gradient: "from-amber-500 to-orange-500",
    bio: "Award-winning designer. Previously at Apple & Stripe.",
  },
  {
    name: "Priya Patel",
    role: "VP of Engineering",
    initials: "PP",
    gradient: "from-emerald-500 to-teal-500",
    bio: "Scaled engineering teams from 5 to 200+ at three startups.",
  },
  {
    name: "James Liu",
    role: "Head of Security",
    initials: "JL",
    gradient: "from-red-500 to-rose-500",
    bio: "Cybersecurity expert. Former NSA & Palantir.",
  },
  {
    name: "Emma Davis",
    role: "VP of Product",
    initials: "ED",
    gradient: "from-sky-500 to-indigo-500",
    bio: "Product leader who shipped features to 100M+ users at Meta.",
  },
];

function TeamCard({ member, index, isInView }: any) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.4]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.9) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates to -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-card group cursor-default transition-shadow hover:shadow-2xl"
      >
        {/* Glare effect */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none rounded-3xl mix-blend-overlay"
          style={{
            opacity: glareOpacity,
            background,
          }}
        />

        {/* Content with translateZ for depth */}
        <div style={{ transform: "translateZ(30px)" }}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-5 shadow-lg`}
          >
            {member.initials}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">
            {member.role}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            {member.bio}
          </p>

          {/* Social links */}
          <div className="flex gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-20">
            {["twitter", "linkedin"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-blue-50 transition-colors pointer-events-auto"
              >
                {social === "twitter" ? (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Meet the <span className="text-gradient">People</span> Behind
            NovaFi
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A world-class team of engineers, designers, and financial experts
            united by a shared passion for innovation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

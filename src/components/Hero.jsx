import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import pic from "../assets/abuzarPic.jpeg";

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Specialist",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      {/* Animated background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, #4ade80, transparent)"
                : "radial-gradient(circle, #3b82f6, transparent)",
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile image */}
        <motion.div
          variants={itemVariants}
          className="relative inline-block mb-8"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, #4ade80, #3b82f6)",
              padding: "3px",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src={pic}
            className="relative mx-auto w-48  h-48  rounded-full object-cover border-4 border-black"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500  rounded-full border-2 border-black"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Muhammad Abuzar Ali
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl font-semibold mb-4 h-10"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {displayed}
          </span>
          <motion.span
            className="inline-block w-0.5 h-6 bg-green-400 ml-1 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm md:text-lg text-gray-300 max-w-xl mx-auto"
        >
          I specialize in building modern and responsive web applications
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-green-500/25">
              Contact with me
            </button>
          </motion.a>
          <motion.a
            href="/Resume(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-pink-500/25">
              Resume
            </button>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-16 md:mt-24">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 text-sm gap-1"
          >
            <span>Scroll down</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;

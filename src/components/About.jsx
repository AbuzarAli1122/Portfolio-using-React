import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "../assets/abuzarPic.jpeg";

const skills = [
  { label: "Html & CSS", percent: 92 },
  { label: "JavaScript", percent: 85 },
  { label: "React JS", percent: 88 },
  { label: "Node JS", percent: 78 },
];

function SkillBar({ label, percent, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(percent), delay * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, percent, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: delay * 0.15, duration: 0.5 }}
    >
      <label className="w-24 text-sm text-gray-300 shrink-0">{label}</label>
      <div className="flex-1 bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-green-500 to-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-sm text-green-400 w-10 text-right">{percent}%</span>
    </motion.div>
  );
}

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { title: "Full Time Employee", sub: "From Connect Solution" },
    { title: "3+", sub: "Projects Completed" },
    { title: "∞", sub: "Passion to Learn" },
  ];

  return (
    <div className="bg-black text-white py-20 min-h-screen" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24" ref={ref}>
        <motion.h2
          className="text-4xl  font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Me
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image */}
          <motion.div
            className="relative mb-8 md:mb-0"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-60"
              style={{
                background: "linear-gradient(135deg, #4ade80, #3b82f6)",
              }}
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <img
              src={Image}
              className="relative w-60 md:w-72 h-60 md:h-80 rounded-lg object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm md:text-lg mb-6 md:mb-8 text-gray-300 leading-relaxed">
              I am a Passionate Developer with a Focus on Building Modern and
              Responsive Web Applications. With a Strong Foundation in Both
              Frontend and Backend Technologies, I strive to Create Seamless and
              Efficient User Experiences.
            </p>

            <div className="space-y-5 mb-10">
              {skills.map((skill, i) => (
                <SkillBar key={skill.label} {...skill} delay={i} />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  whileHover={{ scale: 1.05, borderColor: "#4ade80" }}
                >
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;

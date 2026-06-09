import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaDesktop,
  FaServer,
  FaLayerGroup,
  FaPython,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "Strong knowledge of JavaScript for building complex, dynamic projects.",
    icon: FaCode,
  },
  {
    id: 2,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    icon: FaPaintBrush,
  },
  {
    id: 3,
    title: "Frontend Dev",
    description: "Building responsive and interactive user interfaces.",
    icon: FaDesktop,
  },
  {
    id: 4,
    title: "Backend Dev",
    description: "Developing robust server-side logic and databases.",
    icon: FaServer,
  },
  {
    id: 5,
    title: "Full Stack Dev",
    description: "Combining both frontend and backend development skills.",
    icon: FaLayerGroup,
  },
  {
    id: 6,
    title: "Python",
    description: "Knowledge of Python for scripting and automation tasks.",
    icon: FaPython,
  },
];

function Service() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Services
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="bg-gray-900 border border-gray-700 px-8 py-6 rounded-xl cursor-pointer group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, borderColor: "#4ade80" }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, #4ade80, transparent 70%)",
                  }}
                />

                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-400 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="text-white text-xl" />
                </motion.div>

                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <motion.span
                  className="inline-block mt-4 text-green-400 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;

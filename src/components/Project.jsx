import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import pic from "../assets/Disney-clone.jpg";
import shoe from "../assets/nike-shoe.png";
import organic from "../assets/organic.jpg";
import iphone from "../assets/iphone.png";
import AiImage from "../assets/Ai.jfif";
import weather from "../assets/weatherapp.webp";

const projects = [
  {
    id: 2,
    name: "Shoe Website",
    Technology: "React + Node.js",
    image: shoe,
    github: "https://github.com/AbuzarAli1122/EcommerceSneakers.git",
  },
  {
    id: 1,
    name: "Disney Clone",
    Technology: "React + TailwindCSS",
    image: pic,
    github: "https://github.com/AbuzarAli1122/Disney-Clone.git",
  },
  {
    id: 3,
    name: "Organic Store",
    Technology: "React + Node.js",
    image: organic,
    github: "https://github.com/AbuzarAli1122/Ecommerce-Store-.git",
  },
  {
    id: 4,
    name: "Apple Store",
    Technology: "React + GSAP",
    image: iphone,
    github: "https://github.com/AbuzarAli1122/3dweb",
  },
  {
    id: 5,
    name: "Ai-Powered Learning Assistant",
    Technology: "React + TailwindCSS + Framer Motion + Google Api + Node ",
    image: AiImage,
    github: "https://github.com/AbuzarAli1122/Mern-AiStudy",
  },
  {
    id: 6,
    name: "Weather App",
    Technology: "React + TailwindCSS",
    image: weather,
    github: "https://github.com/AbuzarAli1122/weather-app-react",
  },
];

function ProjectCard({ item, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, borderColor: "#4ade80" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={item.image}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            <FaGithub /> GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-1">{item.name}</h2>
        <p className="text-gray-400 text-sm mb-4">{item.Technology}</p>
        <motion.a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View on GitHub <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
}

function Project() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <ProjectCard key={item.id} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

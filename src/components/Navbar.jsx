import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "service", "projects", "contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-3 sm:top-4 
          left-0 right-0 mx-auto z-50 
          text-white
          px-4 sm:px-6 md:px-8 lg:px-12
          rounded-full 
          transition-all duration-300 
          w-[92%] sm:w-[95%] 
          max-w-6xl ${
            scrolled ? "backdrop-blur-md shadow-lg shadow-green-900/20" : ""
          }`}
      >
        <div className="w-full py-3  flex justify-between items-center">
          <motion.div
            className="text-sm md:text-xl lg:text-2xl font-bold truncate bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            ABUZAR ALI
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                onClick={() => setActiveLink(link)}
                className={`relative capitalize transition-colors duration-200 ${
                  activeLink === link
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                {link === "home"
                  ? "Home"
                  : link === "about"
                    ? "About Me"
                    : link.charAt(0).toUpperCase() + link.slice(1)}
                {activeLink === link && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Desktop Button */}
          <motion.a
            href="#contact"
            className="hidden md:inline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
            >
              Connect Me
            </motion.button>
          </motion.a>

          {/* Mobile Menu Icon */}
          <motion.div
            className="md:hidden text-lg   cursor-pointer"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-center space-y-4 pb-4 pt-2 overflow-hidden bg-black rounded-b-3xl"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  onClick={toggleMenu}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="capitalize hover:text-green-400 transition-colors"
                >
                  {link === "home"
                    ? "Home"
                    : link === "about"
                      ? "About Me"
                      : link.charAt(0).toUpperCase() + link.slice(1)}
                </motion.a>
              ))}
              <motion.a href="#contact" whileTap={{ scale: 0.95 }}>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 md:px-4 py-2 rounded-full text-sm">
                  Connect Me
                </button>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="h-16" />
    </>
  );
}

export default Navbar;

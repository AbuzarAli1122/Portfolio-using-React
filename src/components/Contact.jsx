import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "abuzar03034698819@gmail.com",
    href: "mailto:abuzar03034698819@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "0312437579",
    href: "tel:0312437579",
  },
  {
    icon: FaMapMarkedAlt,
    label: "Location",
    value: "L-31 Wahdat Colony, Lahore, Punjab",
    href: null,
  },
];

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className=" bg-black text-white py-40" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Me
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-12 gap-10">
          {/* Left side */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am open to discussing web development projects or partnership
              opportunities. Feel free to reach out!
            </p>

            <div className="space-y-5">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-700"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    whileHover={{ borderColor: "#4ade80", x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-400 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-gray-200 hover:text-green-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-200">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Enter Your Name",
                },
                {
                  id: "email",
                  label: "Your Email",
                  type: "email",
                  placeholder: "Enter Your Email",
                },
              ].map((field) => (
                <motion.div key={field.id} whileFocus={{ scale: 1.01 }}>
                  <label className="block mb-2 text-sm text-gray-400">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400 transition-colors text-sm"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400 transition-colors text-sm resize-none"
                  placeholder="Enter your message..."
                  rows="5"
                />
              </div>

              <motion.button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sent ? (
                  "✓ Sent!"
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const socials = [
  { icon: FaFacebook, href: 'https://www.facebook.com/abuzar.ali.35513800', label: 'Facebook' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-abuzar-ali-04b9a121b/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/AbuzarAli1122', label: 'GitHub' },
];

function Footer() {
  return (
    <motion.footer
      className='bg-black text-white py-10 border-t border-gray-800'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-8 gap-6'>
          <div className='flex-1 mb-4 md:mb-0 text-center md:text-left'>
            <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
              Abuzar
            </h3>
            <p className='text-gray-400 text-sm'>MERN Stack Developer · Web & Software Developer</p>
          </div>

          <div className='flex-1 w-full'>
            <form className='flex items-center justify-center' onSubmit={(e) => e.preventDefault()}>
              <input
                type='email'
                placeholder='Enter Email for updates'
                className='w-full p-2 rounded-l-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400 text-sm transition-colors'
              />
              <motion.button
                type='submit'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg text-sm'
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-sm flex items-center gap-1'>
            &copy; {new Date().getFullYear()} Abuzar · Made with <FaHeart className='text-red-500' /> in Lahore
          </p>

          {/* Social Icons */}
          <div className='flex space-x-4'>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='text-gray-500 hover:text-white transition-colors text-lg'
                  whileHover={{ scale: 1.3, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          <div className='flex space-x-4 text-sm'>
            <a href='#' className='text-gray-500 hover:text-white transition-colors'>Privacy</a>
            <a href='#' className='text-gray-500 hover:text-white transition-colors'>Terms</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

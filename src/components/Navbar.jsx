import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for menu

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className='bg-black text-white px-8 md:px-16'>
        <div className='container py-4 flex justify-between items-center'>
          <div className='text-2xl font-bold   '>Muhammad Abuzar Ali</div>

          {/* Desktop Nav Links */}
          <div className='hidden md:flex space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Service</a>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
          </div>

          {/* Desktop Button */}
          <a href="#contact" className='hidden md:inline'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full'>
              Connect Me
            </button>
          </a>

          {/* Mobile Menu Icon */}
          <div className='md:hidden text-2xl cursor-pointer' onClick={toggleMenu}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className='md:hidden flex flex-col items-center space-y-4 pb-4'>
            <a href="#home" onClick={toggleMenu} className='hover:text-gray-400'>Home</a>
            <a href="#about" onClick={toggleMenu} className='hover:text-gray-400'>About Me</a>
            <a href="#service" onClick={toggleMenu} className='hover:text-gray-400'>Service</a>
            <a href="#projects" onClick={toggleMenu} className='hover:text-gray-400'>Projects</a>
            <a href="#contact" onClick={toggleMenu} className='hover:text-gray-400'>Contact</a>
            <a href="#contact">
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
              transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full'>
                Connect Me
              </button>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

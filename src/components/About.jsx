import Image from '../assets/abuzar.png'
function About() {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
         <h2 className=' text-4xl font-bold text-center mb-12'>About me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={Image} className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
           
            <div className='flex-1'>
            <p className='text-lg mb-8'>
                I am a Passionate Developer With a Focus on Building 
                Modern and Responsive Web Application. With a Strong Foundation 
                in Both Frontend and Backend Technologies, I strive to Create 
                Seamless and Efficient User Experiences. 
            </p>
            <div className='space-y-4'>
             <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>Html & Css</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-500 to-blue-400 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-110 w-11/12'>

                    </div>
                </div>
             </div>
             <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-500 to-blue-400 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-110 w-11/12'>

                    </div>
                </div>
             </div>
             <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>React Js</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-500 to-blue-400 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-110 w-10/12'>

                    </div>
                </div>
             </div>

             <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>Node Js</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-500 to-blue-400 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-110 w-9/12'>

                    </div>
                </div>
             </div>
            </div>
            {/* Work Part  */}
           <div className="mt-12 flex flex-col sm:flex-row justify-between text-center space-y-6 sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Full Time Employee
                </h3>
                <p className="text-sm sm:text-base">From Connect Solution</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p className="text-sm sm:text-base">Projects Completed</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Happy to Learn More
                </h3>
                <p className="text-sm sm:text-base">In the Field of Web</p>
              </div>
            </div>
            </div>
        </div>
         </div>
    </div>
  )
}

export default About

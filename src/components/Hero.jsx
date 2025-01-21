import pic from '../assets/abuzar.png'

function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={pic} className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
      transition-transform duration-300 hover:scale-110 ease-in-out' />
      <h1 className='text-4xl font-bold'>
        I am { " " }
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Muhammad Abuzar Ali</span>
        ,Mern-Stack-Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 '>
        I specialized in building modern and responsive web application  
      </p>
      <div className='mt-8 space-x-4'>
       <a href="#contact"> <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
        transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full '>Contact with me</button></a>
         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline 
        transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full '>Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Hero

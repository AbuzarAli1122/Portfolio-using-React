import React from 'react'

const services=[
    
    {
        id: 1,
        title:"Javascript",
        description:"Having a good Knowledge of Java For complex project"
    },
    {
        id: 2,
        title:"Web Design",
        description:"Creating visually appealing and User-Friendly Web Designs"
    },
    {
        id: 3,
        title:"Frontend Development",
        description:"Building responsive and interactive user interfaces"
    },
    {
        id: 4,
        title:"Backend Development",
        description:"Developing robust server-side logic and database"
    },
    {
        id: 5,
        title:"Full Stack Development",
        description:"Combing both frontend and backend development skill"
    },
    {
        id: 6,
        title:"Python",
        description:"Also have a Knowledge of Python"
    },
    
]
function Service() {
  return (
    <div className='bg-black text-white py-20 ' id='service'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
         <h2 className=' text-4xl font-bold text-center mb-12'>Services</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map(item=>(
                <div
                className='bg-gray-800 px-8 pb-6 rounded-lg hover:shadow-lg transform
                transition-transform  duration-300 hover:scale-105'>
                    <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-500 to-blue-400'>
                        
                    </div>
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-500 to-blue-400'>{item.title}</h3>
                    <p className='mt-2 text-gray-300'>{item.description}</p>
                    <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                </div>
            ))}
         </div>
    </div>
    </div>
  )
}

export default Service

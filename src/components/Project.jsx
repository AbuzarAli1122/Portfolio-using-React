import pic from '../assets/Disney-clone.jpg'
import shoe from '../assets/nike-shoe.png'
import organic from '../assets/organic.jpg'
const projects=[
    {
        id:1,
        name:"Disney-Clone",
        Technology:"Reactjs",
        image:pic,
        github:"https://github.com/AbuzarAli1122/Disney-Clone.git"
    },
    {
        id:2,
        name:"Shoe-Website ",
        Technology:"React-js + Node-Js",
        image:shoe,
        github:"https://github.com/AbuzarAli1122/EcommerceSneakers.git"
    },

    {
        id:3,
        name:"Organic Store",
        Technology:"React-js",
        image:organic,
        github:"https://github.com/AbuzarAli1122/Ecommerce-Store-.git"
    },
]
function Project() {
  return (
    <div className='bg-black text-white py-20 ' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
         <h2 className=' text-4xl font-bold text-center mb-12'> My Projects</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(item=>(
                <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-110 ease-in-out'>
                    <img src={item.image} className='rounded-lg mb-4  w-full h-48 object-cover' />
                    <h2 className='text-2xl font-bold mb-2'>{item.name}</h2>
                    <p className='text-gray-400 mb-4'>{item.Technology}</p>
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className='inline-block bg-gradient-to-r
                    from-green-400 to-blue-500 text-white  px-4 py-2 rounded-full'>View on GitHub</a>
                </div>
            ))}

         </div>
         </div>
         </div>
  )
}

export default Project;

import React from 'react'
import Image from 'next/image'


function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" >
        <Image src='https://www.afrik21.africa/wp-content/uploads/2018/05/smart-city-casablanca.jpg'
                layout='fill'
                objectFit='cover'
                alt='/'
        />

        <div className='absolute top-1/2 w-full text-center' >
           <button className="text-white  bg-black bg-opacity-70 px-10
            py-3 rounded-full font-bold shadow-md hover:shadow-xl
            active:scale-90 transition duration-200">

            Not sure where to go ?
           </button>
        </div>
    
    </div>
  )
}

export default Banner

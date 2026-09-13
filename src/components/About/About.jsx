import React from 'react'
import Carpng from '../../assets/carpng.png'
import CarpngLight from '../../assets/CarpngLight.png'

const About = ({ theme }) => {
  return (
    <div className={`w-full py-14 duration-300 ${
      theme === "dark" 
      ? "bg-black text-white" 
      : "bg-white text-black"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8'>
          <div data-aos="slide-right" data-aos-duration="1500">
            <img 
              src={theme === "dark" ? Carpng : CarpngLight}  
              alt="" 
              className='w-full max-w-[400px] h-auto object-contain' 
            />
          </div>
          <div>
            <div className='space-y-5'>
              <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-serif'>About Us</h1>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore atque ut doloremque est.</p>
              <p data-aos="fade-up">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione.</p>
              <button data-aos="fade-up" className='button-outline rounded-md border-2 border-primary hover:bg-yellow-500 hover:text-black duration-500 py-2 px-6 text-yellow-500 tracking-wider'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'

import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
    {
        name: "Best Price",
        icon: <FaCameraRetro className="text-5xl text-yellow-500 group-hover:text-black duration-300" />,
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay: "100",
    },
    {
        name: "Fast and Safe",
        icon: <GiNotebook className="text-5xl text-yellow-500 group-hover:text-black duration-300" />,
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay: "500",
    },
    {
        name: "Experience Drivers",
        icon: <SlNote className="text-5xl text-yellow-500 group-hover:text-black duration-500" />,
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay: "1000",
    },
];

const Services = ({theme}) => {
  return (
    <div className={`w-full py-14 sm:min-h-[600px] sm:grid sm:place-items-center ${
      theme === "dark" 
      ? "bg-black text-white" 
      : "bg-white text-black"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className='pb-12'>
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Why Choose Us</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {skillsData.map((skill) => (
            <div key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay} className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black hover:bg-yellow-500 duration-300 text-white hover:text-black rounded-lg'>
              <div className='grid place-items-center'>  {skill.icon} </div>
              <h1>{skill.name}</h1>
              <p> {skill.description} </p>
              <a href={skill.link} className='text-yellow-500 group-hover:text-white duration-300'>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
import React from 'react'

const testimonialData = [
    {
      name: "Dilshad",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "0",
    },
    {
      name: "Satya",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "300",
    },
    {
      name: "Sabir",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "1000",
    },
];

const Testimonal = ({theme}) => {
  return (
    <div className={`w-full py-14 sm:pb-24 ${
      theme === "dark" 
      ? "bg-black text-white" 
      : "bg-white text-black"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className='space-y-4 pb-12'>
          <p data-aos="fade-up" className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What Our Clients Say About Us</p>
          <p data-aos="fade-up" className='text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8'>
          {testimonialData.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.name} className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg'>
              <div className='grid place-items-center'>
                <img src="https://picsum.photos/seed/1/200/200" alt="" className='h-20 w-20 rounded-full' />
              </div>
              <div className='text-4xl'>⭐⭐⭐⭐⭐</div>
              <p>{data.description}</p>
              <p className='font-semibold text-center'>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonal
import React from 'react';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';

const CarList = ({ theme, showAll = false }) => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const displayedCars = showAll ? products : products.slice(0, 3);

  return (
    <div className={`w-full pb-24 pt-12 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Our Premium Cars</h1>
        <p className='text-sm pb-10'>Choose from our wide range of luxury vehicles</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {displayedCars.map((car) => (
            <div key={car.id} data-aos="fade-up" className='space-y-3 border-2 border-gray-300 hover:border-yellow-500 p-3 rounded-xl relative group'>
              <div className='w-full h-[120px]'>
                <img 
                  className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700' 
                  src={theme === "dark" ? car.imageDark : car.image} 
                  alt={car.name}
                />
              </div>
              <div className='space-y-2'>
                <h1 className='text-yellow-500 font-semibold'>{car.name}</h1>
                <div className='flex justify-between items-center text-xl font-semibold'>
                  <p>${car.price}/Day</p>
                  <button 
                    onClick={() => addToCart(car)}
                    className='bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600 text-sm transition duration-300'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <p className='text-xl font-semibold absolute top-0 left-3'>{car.mileage || '12km'}</p>
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className='grid place-content-center mt-8'>
            <button className='btn bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-600 duration-200'>
              View All Cars
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
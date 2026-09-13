// ProductContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';

// Yahan apni images ko import karein
import bmwUxLight from '../assets/bmw ux.jpeg'; // Aapki actual file ka naam daalein
import bmwUxDark from '../assets/bmw ux black ground.png';
import kiaUxLight from '../assets/kia ux.jpeg';
import kiaUxDark from '../assets/kia ux black background.png';
import bmwUxPremiumLight from '../assets/gray bmw ux.jpeg';
import bmwUxPremiumDark from '../assets/grey bmw black back ground.png';

const ProductContext = createContext();

const defaultCars = [
  {
    id: 1,
    name: "BMW UX",
    price: 100,
    image: bmwUxLight, // Imported variable use karein
    imageDark: bmwUxDark,
    mileage: "12km",
    category: "Luxury"
  },
  {
    id: 2,
    name: "KIA UX",
    price: 140,
    image: kiaUxLight,
    imageDark: kiaUxDark,
    mileage: "15km",
    category: "SUV"
  },
  {
    id: 3,
    name: "BMW UX Premium",
    price: 100,
    image: bmwUxPremiumLight,
    imageDark: bmwUxPremiumDark,
    mileage: "10km",
    category: "Luxury"
  },
];

// ... baaki code same rahega

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : defaultCars;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedData) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{
      products, addProduct, updateProduct, deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
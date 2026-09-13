import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ theme }) => {
  const { cart, getTotal, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '', email: '', phone: '', address: ''
  });

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      customerAddress: customer.address,
      items: cart,
      total: getTotal(),
    };
    placeOrder(order);
    clearCart();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center py-8">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span>{item.name} x{item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between text-xl font-bold mt-4">
              <span>Total:</span>
              <span className="text-yellow-500">${getTotal()}</span>
            </div>
          </div>
          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
            <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})} required
                className={`w-full p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
              <input type="email" placeholder="Email" value={customer.email} onChange={(e) => setCustomer({...customer, email: e.target.value})} required
                className={`w-full p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
              <input type="tel" placeholder="Phone" value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})} required
                className={`w-full p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
              <textarea placeholder="Address" value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})} required
                className={`w-full p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} rows="2" />
              <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
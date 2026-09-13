import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { useOrders } from '../../context/OrderContext';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const AdminPanel = ({ theme }) => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { orders, updateOrderStatus } = useOrders();
  const [activeTab, setActiveTab] = useState('products');
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '', price: '', image: '', imageDark: '', mileage: '', category: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...formData,
      price: Number(formData.price),
    };
    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      setEditingProduct(null);
    } else {
      addProduct(productData);
    }
    setFormData({ name: '', price: '', image: '', imageDark: '', mileage: '', category: '' });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
      <div className="container">
        <h1 className="text-4xl font-bold text-center py-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300 dark:border-gray-700">
          <button 
            onClick={() => setActiveTab('products')}
            className={`py-2 px-6 text-lg font-semibold ${activeTab === 'products' ? 'border-b-2 border-yellow-500 text-yellow-500' : ''}`}
          >
            Products ({products.length})
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`py-2 px-6 text-lg font-semibold ${activeTab === 'orders' ? 'border-b-2 border-yellow-500 text-yellow-500' : ''}`}
          >
            Orders ({orders.length})
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <>
            {/* Add/Edit Form */}
            <div className={`p-6 rounded-lg mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
              <h2 className="text-2xl font-semibold mb-4">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Car Name" value={formData.name} onChange={handleFormChange} required
                  className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
                <input type="number" name="price" placeholder="Price per day" value={formData.price} onChange={handleFormChange} required
                  className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleFormChange}
                  className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
                <input type="text" name="imageDark" placeholder="Dark Image URL" value={formData.imageDark} onChange={handleFormChange}
                  className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
                <input type="text" name="mileage" placeholder="Mileage (e.g. 12km)" value={formData.mileage} onChange={handleFormChange}
                  className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
                <input type="text" name="category" placeholder="Category (e.g. Luxury)" value={formData.category} onChange={handleFormChange}
                  className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`} />
                <div className="md:col-span-2 flex gap-4">
                  <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </button>
                  {editingProduct && (
                    <button type="button" onClick={() => { setEditingProduct(null); setFormData({ name: '', price: '', image: '', imageDark: '', mileage: '', category: '' }); }}
                      className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                  <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
                  <p className="text-yellow-500">${product.price}/day</p>
                  <p className="text-sm text-gray-500">{product.mileage} • {product.category}</p>
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => handleEdit(product)} className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center gap-2">
                      <FaEdit /> Edit
                    </button>
                    <button onClick={() => deleteProduct(product.id)} className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center gap-2">
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-center text-gray-500 py-10">No orders yet</p>
            ) : (
              orders.map(order => (
                <div key={order.id} className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <p className="font-semibold">Order #{order.id}</p>
                      <p>{order.customerName}</p>
                      <p className="text-sm text-gray-500">{order.customerEmail}</p>
                      <p className="text-sm">Items: {order.items?.length || 0}</p>
                      <p className="text-yellow-500 font-bold">Total: ${order.total || 0}</p>
                    </div>
                    <div className="text-right">
                      <select 
                        value={order.status} 
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`p-2 rounded border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <p className="text-xs text-gray-500 mt-1">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
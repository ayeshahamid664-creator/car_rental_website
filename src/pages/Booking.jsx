import React, { useState } from 'react'

const Booking = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    pickupDate: '',
    dropoffDate: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Booking request submitted! We will contact you shortly.')
  }

  return (
    <div className={`min-h-screen pt-20 ${
      theme === "dark" 
      ? "bg-black text-white" 
      : "bg-white text-black"
    }`}>
      <div className="container">
        <div className="text-center py-10">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif">Book Your Car</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4">Fill in the details to book your dream car</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-10 border-2 border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors ${
                    theme === "dark" 
                    ? "bg-gray-800 border-gray-700 text-white" 
                    : "bg-white border-gray-300 text-black"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors ${
                    theme === "dark" 
                    ? "bg-gray-800 border-gray-700 text-white" 
                    : "bg-white border-gray-300 text-black"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors ${
                    theme === "dark" 
                    ? "bg-gray-800 border-gray-700 text-white" 
                    : "bg-white border-gray-300 text-black"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Car Model</label>
                <select
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors ${
                    theme === "dark" 
                    ? "bg-gray-800 border-gray-700 text-white" 
                    : "bg-white border-gray-300 text-black"
                  }`}
                >
                  <option value="">Select a car model</option>
                  <option value="BMW UX">BMW UX</option>
                  <option value="KIA UX">KIA UX</option>
                  <option value="BMW UX Premium">BMW UX Premium</option>
                  <option value="Mercedes C-Class">Mercedes C-Class</option>
                  <option value="Audi A4">Audi A4</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors ${
                    theme === "dark" 
                    ? "bg-gray-800 border-gray-700 text-white" 
                    : "bg-white border-gray-300 text-black"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Dropoff Date</label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors ${
                    theme === "dark" 
                    ? "bg-gray-800 border-gray-700 text-white" 
                    : "bg-white border-gray-300 text-black"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Special Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 rounded-lg border-2 focus:border-yellow-500 outline-none transition-colors resize-none ${
                  theme === "dark" 
                  ? "bg-gray-800 border-gray-700 text-white" 
                  : "bg-white border-gray-300 text-black"
                }`}
                placeholder="Any special requests or requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 text-lg"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
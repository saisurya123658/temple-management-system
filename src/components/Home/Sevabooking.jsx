import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    transactionId: '',
    sevaname: '',  // lowercase 'n' to match backend
    date: ''
  });

  const [receipt, setReceipt] = useState(null); // Store receipt data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6000/api/seva/add-seva', formData);

      const savedData = response.data.data;

      setReceipt({
        transactionId: savedData.transactionId,
        name: savedData.name,
        sevaname: savedData.sevaname,
        date: savedData.date
      });

      alert('🙏 Booking successful! Jai Guru Raghavendra!');

      setFormData({
        name: '',
        email: '',
        mobileNumber: '',
        transactionId: '',
        sevaname: '',
        date: ''
      });
    } catch (error) {
      console.error('Error response:', error.response?.data || error.message);
      alert(`❌ Booking failed: ${error.response?.data?.message || 'Please try again.'}`);
    }
  };

  const sevaOptions = [
    "Dinaika Sampoorna Seva",
    "Vastra Samarpana Seva",
    "Navaratna Rathotsavam",
    "Bangaru Pallaki Seva",
    "Suvarna Rathotsavam",
    "Rajatha Rathotsavam",
    "Rathotsavam",
    "Gajatha Rathotsavam",
    "Unjala Seva",
    "Kanaka Mahapooja"
  ];

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-2xl border border-yellow-500">
      <h2 className="text-2xl font-bold text-center mb-6 text-yellow-800">🙏 Seva Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Mobile Number</label>
          <input
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Transaction ID</label>
          <input
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            placeholder="Payment Transaction ID"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Seva Name</label>
          <select
            name="sevaname"  
            value={formData.sevaname}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Seva</option>
            {sevaOptions.map((seva, index) => (
              <option key={index} value={seva}>{seva}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Seva Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          📿 Book Seva
        </button>
      </form>

      {receipt && (
        <div className="mt-8 p-4 border border-green-400 bg-green-50 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-green-700 mb-3">🎉 Receipt</h3>
          <p><strong>Transaction ID:</strong> {receipt.transactionId}</p>
          <p><strong>Name:</strong> {receipt.name}</p>
          <p><strong>Seva:</strong> {receipt.sevaname}</p>
          <p><strong>Date:</strong> {new Date(receipt.date).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;

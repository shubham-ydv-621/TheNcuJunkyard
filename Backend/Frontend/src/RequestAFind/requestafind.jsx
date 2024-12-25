// Requestafind.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Requestafind() {
  const [userName, setUserName] = useState('');
  const [itemRequired, setItemRequired] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userEmail, setUserEmail] = useState(''); // New state for user email
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4001/request', {
        userName,
        itemRequired,
        mobileNumber,
        userEmail // Send user email along with other details
      });
      setShowPopup(true);
    } catch (error) {
      console.log('Error during request submission:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl">
            Can't find the item you're looking for?
            <span className="text-pink-500"> Request it now! </span>
          </h1>
          <p className="mt-6">
            "Enter 'sell' in front of your request to sell your items. Please provide a clear description of the item and the price you are asking for."
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label htmlFor="item" className="block text-gray-700 font-medium">
                Item Required
              </label>
              <input
                type="text"
                id="item"
                value={itemRequired}
                onChange={(e) => setItemRequired(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg text-center max-w-sm w-full">
              <h3 className="text-2xl font-semibold text-pink-500">Request Received!</h3>
              <p className="mt-4 text-gray-700">
                Thank you for submitting your request. We'll notify you once the item is available through call or you will receive a mail from shubham22csu444@ncuindia.edu.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Requestafind;

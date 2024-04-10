import React, { useState } from 'react';

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOTPChange = (e) => {
    const { value } = e.target;
    // Validate input to allow only digits and limit to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setOTP(value);
      setError('');
    } else {
      setError('Please enter only digits (0-9) and limit to 4 characters.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if OTP is exactly 4 digits
    if (otp.length === 4) {
      // Here you can perform OTP verification logic
      console.log('Verifying OTP:', otp);
    } else {
      setError('Please enter a 4-digit OTP.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={otp}
              onChange={handleOTPChange}
              placeholder="Enter OTP"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Verify
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default OTPVerification;
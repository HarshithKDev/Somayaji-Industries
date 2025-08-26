import React, { useState } from 'react';
import Button from '../ui/Button';

// OTP Form Component
const OTPForm = ({ userData, onSuccess }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  
  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };
  
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      onSuccess(userData);
    }, 1000);
  };
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Verify OTP</h2>
      <p className="text-gray-600 text-center mb-6">
        Enter the 6-digit code sent to {userData.phone}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        
        <Button type="submit" className="w-full" disabled={loading || otp.some(digit => !digit)}>
          {loading ? 'Verifying...' : 'Verify OTP'}
        </Button>
      </form>
      
      <p className="mt-4 text-center text-sm text-gray-600">
        Didn't receive the code?{' '}
        <button className="font-medium text-blue-600 hover:text-blue-500">
          Resend OTP
        </button>
      </p>
    </div>
  );
};

export default OTPForm;
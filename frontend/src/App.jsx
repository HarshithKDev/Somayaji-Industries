import React, { useState } from 'react';
import { X } from 'lucide-react';

import Modal from './components/ui/Modal';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import OTPForm from './components/auth/OTPForm';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [authStep, setAuthStep] = useState('signup'); // 'signup' | 'otp'
  const [signupData, setSignupData] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginModalOpen(false);
  };

  const handleSignupOTPRequired = (userData) => {
    setSignupData(userData);
    setAuthStep('otp');
  };

  const handleOTPSuccess = (userData) => {
    setUser(userData);
    setIsSignupModalOpen(false);
    setAuthStep('signup');
    setSignupData(null);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const openLogin = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
  };

  const openSignup = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
    setAuthStep('signup');
  };

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
    setAuthStep('signup');
  };

  const switchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar
        user={user}
        onLogin={openLogin}
        onSignup={openSignup}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="pt-16">
        <HomePage />
        <AboutPage />
      </main>

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <div className="relative">
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
          <LoginForm
            onSuccess={handleLoginSuccess}
            onSwitchToSignup={switchToSignup}
          />
        </div>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)}>
        <div className="relative">
          <button
            onClick={() => setIsSignupModalOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
          {authStep === 'signup' ? (
            <SignupForm
              onOTPRequired={handleSignupOTPRequired}
              onSwitchToLogin={switchToLogin}
            />
          ) : (
            <OTPForm
              userData={signupData}
              onSuccess={handleOTPSuccess}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default App;
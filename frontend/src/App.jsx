import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HomePage />
        <AboutPage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
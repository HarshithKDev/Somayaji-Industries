import React from 'react';

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Somayaji Industries</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to deliver exceptional craftsmanship, Somayaji Industries has been a trusted name in custom fabrication for over 15 years. We specialize in creating high-quality metal and wooden products that combine functionality with aesthetic appeal.
              </p>
              <p>
                Our team of skilled craftsmen and modern equipment enables us to handle projects of all sizes, from individual custom pieces to large-scale industrial installations. We take pride in our attention to detail and commitment to using only the finest materials.
              </p>
              <p>
                Whether you need durable iron gates, elegant wooden furniture, or industrial storage solutions, we work closely with our clients to bring their vision to life. Quality, reliability, and customer satisfaction are at the heart of everything we do.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold text-white mb-2">Our Mission</h4>
                <p className="text-sm text-gray-400">To provide exceptional fabrication services that exceed customer expectations through quality craftsmanship and innovative solutions.</p>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold text-white mb-2">Our Values</h4>
                <p className="text-sm text-gray-400">Quality, integrity, innovation, and customer satisfaction guide every decision we make and every product we create.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">15+ Years of Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Custom Design Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Premium Quality Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Timely Project Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Competitive Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
    return <AboutSection />;
}


export default AboutPage;
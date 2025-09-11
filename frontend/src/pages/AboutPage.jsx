import React from 'react';

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - About, Mission, Values */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About Somayaji Industries - Ill
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Somayaji Industries - Ill is a reputed manufacturer, supplier and
                service provider offering a wide range of sleek, ergonomic and user
                friendly furniture. Our product range spans steel and wood furniture,
                powder coated educational/institutional furniture and hospital
                furniture. Our furnishings are available in various sizes and designs
                to match customer requirements. As a furniture manufacturing company,
                we strive to come up with unique designs and serve our customers in
                the best manner possible.
              </p>
              <p>
                With a track record of 30 years in the market to our credit, our brand
                name 'Somayaji Industries - Ill' is synonymous with contemporary
                design and affordable pricing. Our motto is to provide 'Good Products,
                Better Prices - Total Value for Money!' We are the perfect choice for
                the middle class and the ideal alternative for cheap and unreliable
                Chinese imports.
              </p>
            </div>

            {/* Mission and Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold text-white mb-2">Our Mission</h4>
                <p className="text-sm text-gray-400">
                  To deliver sleek, ergonomic and affordable furniture that meets the
                  needs of educational, institutional, and household customers while
                  ensuring quality, reliability and total value for money.
                </p>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold text-white mb-2">Our Values</h4>
                <p className="text-sm text-gray-400">
                  Contemporary design, affordability, reliability, and
                  customer-centric service form the core of everything we deliver.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <div className="space-y-4 text-left">
                <div className="flex flex-wrap items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span aria-hidden="true" className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 flex-1 text-sm sm:text-base">
                    30+ Years of Market Presence
                  </span>
                </div>
                <div className="flex flex-wrap items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span aria-hidden="true" className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 flex-1 text-sm sm:text-base">
                    Wide Range of Steel, Wood & Institutional Furniture
                  </span>
                </div>
                <div className="flex flex-wrap items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span aria-hidden="true" className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 flex-1 text-sm sm:text-base">
                    Contemporary Designs at Affordable Pricing
                  </span>
                </div>
                <div className="flex flex-wrap items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span aria-hidden="true" className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 flex-1 text-sm sm:text-base">
                    Reliable Alternative to Cheap Imports
                  </span>
                </div>
                <div className="flex flex-wrap items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span aria-hidden="true" className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 flex-1 text-sm sm:text-base">
                    Value for Money
                  </span>
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
};

export default AboutPage;
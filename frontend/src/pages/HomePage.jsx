import React from 'react';
import { Phone, Mail, MapPin, Award, Users, Settings } from 'lucide-react';
import Button from '../components/ui/Button';
import heroBackground from '../assets/hero-bg.webp';
import gateImage from '../assets/gate.webp';
import deskImage from '../assets/table.webp'; 
import railingsImage from '../assets/railing.webp'; 
import shelvesImage from '../assets/shelf.webp';
import decorImage from '../assets/decor.webp'; 
import cupImage from '../assets/cup.webp'; 

// Hero Section Component
const HeroSection = () => {
  return (
   <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* This overlay makes the text readable on the background image */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div> 
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Quality Craftsmanship in <span className="text-blue-400">Every Piece</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Custom fabrication solutions for your industrial and residential needs. From iron gates to wooden furniture, we craft excellence.
        </p>
        <div className="space-x-4">
          <Button size="lg" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
            Explore Our Products
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ title, description, category, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        {/* The background image is now displayed here */}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      title: 'Iron Benches & Gates',
      description: 'Durable and elegant iron benches and gates crafted with precision. Perfect for gardens, parks, and residential entrances.',
      category: 'Metalwork',
      image: gateImage,
    },
    {
      title: 'Metal Cupboards',
      description: 'Heavy-duty storage solutions with modern designs. Ideal for offices, warehouses, and industrial applications.',
      category: 'Storage',
      image: cupImage, // Replace with your image
    },
    {
      title: 'Wooden Tables & Desks',
      description: 'Handcrafted wooden furniture combining functionality with aesthetic appeal. Custom designs available.',
      category: 'Furniture',
      image: deskImage, // Replace with your image
    },
    {
      title: 'Custom Railings',
      description: 'Safety railings for stairs, balconies, and terraces. Available in various materials and finishes.',
      category: 'Safety',
      image: railingsImage, // Replace with your image
    },
    {
      title: 'Industrial Shelving',
      description: 'Heavy-duty shelving systems for warehouses and industrial spaces. Modular and scalable solutions.',
      category: 'Industrial',
      image: shelvesImage, // Replace with your image
    },
    {
      title: 'Decorative Items',
      description: 'Custom decorative pieces for homes and offices. Unique designs tailored to your preferences.',
      category: 'Decor',
      image: decorImage, // Replace with your image
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of custom-fabricated products, each crafted with attention to detail and built to last.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Component
const StatsSection = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '20+' },
    { icon: Users, label: 'Happy Customers', value: '500+' },
    { icon: Settings, label: 'Projects Completed', value: '1000+' }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <stat.icon size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Ready to start your project? Contact us today for a consultation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Phone size={48} className="mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">+91 7619223511</p>
            <p className="text-gray-300">+91 9448623511</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Mail size={48} className="mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">Somayajiindustries3@gmail.com</p>
          </div>
          
         <div className="flex flex-col items-center">
            <a
              href="https://maps.app.goo.gl/zP7KRz5yNwxSuYUZ9?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-opacity hover:opacity-80"
            >
              <MapPin size={48} className="mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-gray-300">Bangalore - Mangalore Hwy, B.C Road, </p>
              <p className="text-gray-300">Bantwal, Karnataka - 574219</p>
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <StatsSection />
            <ContactSection />
        </>
    )
}

export default HomePage;
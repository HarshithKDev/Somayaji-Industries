import React from 'react';
import { Phone, Mail, MapPin, Award, Users, Settings } from 'lucide-react';
import Button from '../components/ui/Button';
import teapoyImage from '../assets/teapoy.webp';
import tvImage from '../assets/tv.webp';
import bedImage from '../assets/bed.webp';
import divanaImage from '../assets/divana.webp';
import sofaImage from '../assets/sofa.webp';
import alImage from '../assets/al.webp';
import rackImage from '../assets/rack.webp';
import cotImage from '../assets/cot.webp';
import steeldivanaImage from '../assets/steeldivana.webp';
import officetableImage from '../assets/officetable.webp';
import shoeImage from '../assets/shoe.webp';
import steeldinningImage from '../assets/steeldinning.webp';
import steelsofaImage from '../assets/steelsofa.webp';
import lockerImage from '../assets/locker.webp';
import schoolImage from '../assets/school.webp';
import hospitalImage from '../assets/hospital.webp';
import chairImage from '../assets/chair.webp';
import sideboxImage from '../assets/sidebox.webp';
import woodshoeImage from '../assets/woodshoe.webp';
import chestImage from '../assets/chest.webp';
import shelfImage from '../assets/shelf.webp';
import homedeskImage from '../assets/homedesk.webp';
import ladderImage from '../assets/ladder.webp';



// Placeholder image for new products
const placeholderImage = 'https://via.placeholder.com/600x400';

// Hero Section Component
const HeroSection = () => {
  
  const heroPatternStyle = {
    backgroundColor: 'var(--hero-bg-color)', 
    backgroundImage: `radial-gradient(rgba(107, 114, 128, 0.2) 1px, transparent 0)`,
    backgroundSize: '1rem 1rem',
  };

  return (
   <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center hero-pattern" 
    >
      {/* This overlay is no longer needed with the CSS pattern but can be kept for a vignette effect if desired */}
      {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Somayaji Industries: Engineering Excellence in <span className="text-indigo-400">Metal and Wood</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Industrial strength, residential style. Your trusted partner in fabrication, from grand iron gates to elegant wooden furniture.
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
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-200">{title}</h3>
          <span className="px-3 py-1 bg-indigo-900 text-indigo-300 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
    const products = [
        
        // New items from the image
        {
            title: 'Teapoys',
            description: 'Stylish and functional teapoys for your living room.',
            category: 'Wooden Furniture',
            image: teapoyImage, 
        },
        {
            title: 'Tv Cabinet',
            description: 'Custom-designed TV cabinets to fit your space and style.',
            category: 'Wooden Furniture',
            image: tvImage, 
        },
        {
            title: 'Wooden Cots',
            description: 'Comfortable and durable wooden cots.',
            category: 'Wooden Furniture',
            image: bedImage, 
        },
        {
            title: 'Wooden Diwanas',
            description: 'Elegant and classic wooden diwanas for your home.',
            category: 'Wooden Furniture',
            image: divanaImage, 
        },
        {
            title: 'Wooden Sofasets',
            description: 'Handcrafted wooden sofasets for a timeless appeal.',
            category: 'Wooden Furniture',
            image: sofaImage, 
        },
        {
            title: 'Almirahs',
            description: 'Secure and spacious almirahs for all your storage needs.',
            category: 'Steel Furniture',
            image: alImage, 
        },
        {
            title: 'Steel Racks',
            description: 'Durable steel racks for industrial and commercial use.',
            category: 'Steel Furniture',
            image: rackImage, 
        },
        {
            title: 'Steel Cots',
            description: 'Strong and sturdy steel cots for long-lasting use.',
            category: 'Steel Furniture',
            image: cotImage, 
        },
        {
            title: 'Steel Diwanas',
            description: 'Modern and sleek steel diwanas.',
            category: 'Steel Furniture',
            image: steeldivanaImage, 
        },
        {
            title: 'Steel Office Tables',
            description: 'Functional and robust steel tables for any office environment.',
            category: 'Steel Furniture',
            image: officetableImage, 
        },
        {
            title: 'Steel Shoe Racks',
            description: 'Organize your footwear with our strong and efficient steel shoe racks.',
            category: 'Steel Furniture',
            image: shoeImage, 
        },
        {
            title: 'Steel Dining Set',
            description: 'Contemporary steel dining sets for a stylish dining experience.',
            category: 'Steel Furniture',
            image: steeldinningImage, 
        },
        {
            title: 'Steel Sofa',
            description: 'Durable and low-maintenance steel sofas.',
            category: 'Steel Furniture',
            image: steelsofaImage, 
        },
        {
            title: 'Bank Safe Lockers',
            description: 'High-security bank safe lockers for valuable storage.',
            category: 'Steel Furniture',
            image: lockerImage, 
        },
        {
            title: 'School Furniture',
            description: 'Functional and sturdy furniture for educational institutions.',
            category: 'Steel Furniture',
            image: schoolImage, 
        },
        {
            title: 'Hospital Furniture',
            description: 'Specialized furniture designed for hospital and healthcare environments.',
            category: 'Steel Furniture',
            image: hospitalImage, 
        },
        {
            title: 'Rocking Chairs',
            description: 'Relax in style with our comfortable rocking chairs.',
            category: 'Wooden Furniture',
            image: chairImage, 
        },
        {
            title: 'Side Box',
            description: 'Convenient side boxes for storage and organization.',
            category: 'Wooden Furniture',
            image: sideboxImage, 
        },
        {
            title: 'Shoe Racks',
            description: 'Organize your shoes with our practical and space-saving shoe racks.',
            category: 'Wooden Furniture',
            image: woodshoeImage, 
        },
        {
            title: 'Chest of Drawer',
            description: 'A classic chest of drawers for versatile storage.',
            category: 'Wooden Furniture',
            image: chestImage, 
        },
        {
            title: 'Book Rack',
            description: 'Stylish book racks to display your collection.',
            category: 'Wooden Furniture',
            image: shelfImage, 
        },
        {
            title: 'Desk',
            description: 'A functional desk for your workspace.',
            category: 'Wooden Furniture',
            image: homedeskImage, 
        },
        {
            title: 'Ladder',
            description: 'Durable and safe ladders for various uses.',
            category: 'Steel Furniture',
            image: ladderImage, 
        }
      ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
    { icon: Settings, label: 'Pieces Crafted', value: '1000+' }
  ];

  return (
    <section className="py-16 bg-indigo-500">
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
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Ready to start your project? Contact us today for a consultation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Phone size={48} className="mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">+91 7619223511</p>
            <p className="text-gray-300">+91 9448623511</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Mail size={48} className="mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">somayajiindustries3@gmail.com</p>
          </div>
          
         <div className="flex flex-col items-center">
            <a
              href="https://maps.app.goo.gl/zP7KRz5yNwxSuYUZ9?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-opacity hover:opacity-80"
            >
              <MapPin size={48} className="mb-4 text-indigo-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-gray-300">Bangalore - Mangalore Hwy, B.C Road, </p>
              <p className="text-gray-300">Bantwal, Karnataka - 574219</p>
            </a>
          </div>
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
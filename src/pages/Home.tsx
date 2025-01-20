import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Glasses, Shield, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Clarity Meets Style at Vishal Optical
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover our premium collection of eyewear that combines fashion with function
            </p>
            <Link
              to="/products/prescription"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Glasses className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Eyewear</h3>
              <p className="text-gray-600">
                Curated collection of high-quality prescription and fashion glasses
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                All our products come with a satisfaction guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure delivery across India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Prescription Glasses',
                image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80',
                link: '/products/prescription',
              },
              {
                title: 'Fashion Eyewear',
                image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
                link: '/products/fashion',
              },
              {
                title: 'Blue Light Glasses',
                image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80',
                link: '/products/bluelight',
              },
              {
                title: 'Accessories',
                image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80',
                link: '/products/accessories',
              },
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
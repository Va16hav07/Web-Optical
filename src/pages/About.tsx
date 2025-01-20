import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Vishal Optical</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in eye care since 1990. We combine traditional expertise
          with modern technology to provide the best optical solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
          <p className="text-gray-600">
            Every pair of glasses undergoes rigorous quality checks to ensure the highest
            standards of optical clarity and durability.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
          <p className="text-gray-600">
            Our team of experienced optometrists and eyewear consultants provide
            personalized care and professional advice.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600">
            We prioritize customer satisfaction with our comprehensive after-sales
            service and support.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1990, Vishal Optical has been serving the community with
              dedication and expertise. What started as a small optical shop has grown
              into a trusted name in eye care, thanks to our commitment to quality and
              customer satisfaction.
            </p>
            <p className="text-gray-600 mb-4">
              We take pride in our extensive collection of eyewear, featuring both
              classic and contemporary designs from renowned brands. Our in-house
              optical experts ensure that every customer receives personalized
              attention and the perfect fit.
            </p>
            <p className="text-gray-600">
              Today, we continue to evolve with the latest technology and trends
              while maintaining our core values of quality, expertise, and customer
              care.
            </p>
          </div>
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&q=80)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
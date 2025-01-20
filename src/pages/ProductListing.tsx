import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

// Sample product data (in a real app, this would come from an API)
const products: Product[] = [
  {
    id: '1',
    name: 'Classic Round Prescription Glasses',
    price: 2499,
    description: 'Timeless round frames perfect for everyday wear. Made with premium acetate material.',
    category: 'prescription',
    features: ['Anti-glare coating', 'Scratch-resistant', 'UV protection'],
    materials: ['Premium acetate', 'Stainless steel hinges'],
    sizes: ['Small', 'Medium', 'Large'],
    images: [
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '2',
    name: 'Designer Cat-Eye Frames',
    price: 3299,
    description: 'Elegant cat-eye frames that make a bold fashion statement.',
    category: 'fashion',
    features: ['Lightweight design', 'Spring hinges', 'Designer case included'],
    materials: ['Italian acetate', 'Gold-plated temples'],
    sizes: ['Medium', 'Large'],
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '3',
    name: 'Blue Light Blocking Glasses',
    price: 1999,
    description: 'Protect your eyes from digital strain with these stylish blue light blocking glasses.',
    category: 'bluelight',
    features: ['Blue light filtering', 'Anti-reflective coating', 'Comfortable fit'],
    materials: ['TR90 material', 'Spring hinges'],
    sizes: ['Universal'],
    images: [
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80'
    ]
  }
];

export default function ProductListing() {
  const { category } = useParams<{ category: string }>();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    product => product.category === category
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category?.replace('-', ' ')} Collection
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-2">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">₹{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Vishal Optical</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products/prescription" className="text-gray-600 hover:text-gray-900">
              Prescription
            </Link>
            <Link to="/products/fashion" className="text-gray-600 hover:text-gray-900">
              Fashion
            </Link>
            <Link to="/products/bluelight" className="text-gray-600 hover:text-gray-900">
              Blue Light
            </Link>
            <Link to="/products/accessories" className="text-gray-600 hover:text-gray-900">
              Accessories
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {state.cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/account">
              <User className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/products/prescription"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Prescription
            </Link>
            <Link
              to="/products/fashion"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Fashion
            </Link>
            <Link
              to="/products/bluelight"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Blue Light
            </Link>
            <Link
              to="/products/accessories"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Accessories
            </Link>
            <Link to="/cart" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
              Cart ({state.cartItems.length})
            </Link>
            <Link to="/account" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
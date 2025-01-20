import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, removeFromCart, updateQuantity } = useCart();
  const subtotal = state.cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const total = subtotal - state.discount;

  if (state.cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping.</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-4"
            >
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">₹{item.product.price}</p>
                <div className="flex items-center gap-4 mt-2">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id, parseInt(e.target.value))
                    }
                    className="border rounded-md px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-lg font-semibold">
                ₹{item.product.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            {state.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{state.discount}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
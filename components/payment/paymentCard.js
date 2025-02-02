import React from 'react';
import { FaPaypal } from "react-icons/fa";
import { GrStripe } from "react-icons/gr";

const PaymentCard = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <p className="text-sm text-gray-600 mb-6">Provide billing and shipping details below</p>
      
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Country Dropdown */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Country or region</label>
          <select className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Pakistan</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Address line 1</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Shipping Methods */}
        <div className="space-y-3">
          <label className="block text-sm text-gray-700">Shipping method</label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              { name: 'USPS2', price: '$10.99' },
              { name: 'UPS', price: '$0.99' },
              { name: 'USP52', price: '$9.99' },
              { name: 'USPS', price: '$9.99' },
              { name: 'Space shipping', price: '$21.37' },
              { name: 'Ground shipping', price: '$20.00' },
            ].map((method) => (
              <div
                key={method.name}
                className="border rounded p-3 text-sm cursor-pointer hover:border-blue-500"
              >
                <div className="font-medium">{method.name}</div>
                <div className="text-gray-500">{method.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Billing Address Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="same-address"
            className="h-4 w-4 text-blue-600 rounded"
          />
          <label htmlFor="same-address" className="ml-2 text-sm text-gray-700">
            Billing address same as shipping
          </label>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <label className="block text-sm text-gray-700">Payment method</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded p-3 cursor-pointer hover:border-blue-500">
              <div className="flex items-center space-x-2">
              <GrStripe size={30} className="text-blue-600" />
                <span className="text-sm">Stripe</span>
              </div>
            </div>
            <div className="border rounded p-3 cursor-pointer hover:border-blue-500">
              <div className="flex items-center space-x-2">
              <FaPaypal size={30} color='#635BFF' className="text-blue-600" />
              <span className="text-sm">PayPal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Card number</label>
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Expiration date</label>
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Security code</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pay now
        </button>
      </form>
    </div>
  );
};

export default PaymentCard;
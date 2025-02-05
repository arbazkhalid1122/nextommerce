import React from 'react';
import { useForm } from 'react';
import OrderSummary from '../OrderSummary';

const CheckoutForm = ({ items }) => {
  const [paymentMethod, setPaymentMethod] = React.useState('stripe');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

let items = {
    name: 'Product 1',
    price: 200.00,
    image: '/cart-item',
    qty: 3
}
     
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex lg:gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-6">Checkout Detail</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Personal Detail</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Street Address</label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">City</label>
                      <input
                        type="text"
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Zip Code</label>
                      <input
                        type="text"
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Country</label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Payment detail</h2>
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('stripe')}
                    className={`p-3 border rounded-md ${
                      paymentMethod === 'stripe' ? 'border-blue-500' : ''
                    }`}
                  >
                    <div className="w-16 h-8 flex items-center justify-center text-indigo-600 font-bold">
                      stripe
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-3 border rounded-md ${
                      paymentMethod === 'paypal' ? 'border-blue-500' : ''
                    }`}
                  >
                    <div className="w-16 h-8 flex items-center justify-center text-blue-600 font-bold">
                      PayPal
                    </div>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Card Holder Name</label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <OrderSummary items={items} />
        </div>
      </div>
    </div>
  );
};



export default CheckoutForm;
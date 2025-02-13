import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import OrderSummary from '../OrderSummary';
import { useCart } from '@/components/context/context';

const CheckoutForm = () => {
  const router = useRouter();
  const { cart, clearCart,addOrders } = useCart();

console.log("cart", cart);  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  function setcardData(){
    localStorage.setItem('userCheckOut',JSON.stringify(formData))
  }

  useEffect(()=>{
     let usercarddata =  JSON.parse(localStorage.getItem('userCheckOut'))  
     if (usercarddata) {
         setFormData(usercarddata)
     } 

  },[])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    if (!formData.fullName || !formData.email || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

 addOrders({ ...formData, cart, paymentMethod });
    clearCart();
    router.push('/user/myorders');
  };

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
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
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
                      Stripe
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
                      name="cardHolder"
                      value={formData.cardHolder}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 rounded mt-6"
              onClick={()=>{setcardData()}}
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <OrderSummary items={cart} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

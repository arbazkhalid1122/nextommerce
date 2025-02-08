import React from "react";
import { useRouter } from "next/router";

const OrderSummary = ({ items }) => {

    let router = useRouter(); 
  const cartTotal =items.length>1? items.reduce((sum, item) => sum + (item.price * item.qty), 0):22;
  const gst = cartTotal * 0.01;
  const shippingFee = 4.00;
  const totalPrice = cartTotal + gst + shippingFee;

  return (
    <div className="bg-gray-50 p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">Total Price</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Cart Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>GST</span>
          <span>${gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold pt-3 border-t">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-black text-white py-3 rounded mt-6"
       onClick={()=>router.push('/user/checkout')}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default OrderSummary;
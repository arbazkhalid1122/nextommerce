import React from 'react';
import { useRouter } from 'next/router';
import { SiMastercard } from "react-icons/si";
import { SiVisa } from "react-icons/si";

const PaymentMethods = () => {
    const router = useRouter();
  const transactions = [
    {
      id: 'T234786AFDE',
      orderNumber: '6754',
      price: 200.00,
      quantity: 3,
      totalAmount: 600.00,
      deliveryCost: 2.00,
      gst: 7.20,
      status: 609.20
    },
    {
      id: 'T234786AFDE',
      orderNumber: '6754',
      price: 200.00,
      quantity: 3,
      totalAmount: 600.00,
      deliveryCost: 2.00,
      gst: 7.20,
      status: 609.20
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 mt-2">Payment Methods</h1>
      
      {/* Payment Methods Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" >
        {/* Mastercard */}
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            {/* <img src="https://t4.ftcdn.net/jpg/04/16/93/07/240_F_416930739_UeumuMO5QhZOXIAc09s7gz6JSPT97duS.jpg" alt="Mastercard" className="h-10" /> */}
            <SiMastercard size={40} className="text-red-500" />
            <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded">Primary</span>
          </div>
          <div className="mb-4">
            <p className="text-lg mb-1">**** **** **** 1456</p>
            <p className="text-sm text-gray-500">Expired 02/2028</p>
          </div>
          <div className="flex gap-3">
            <button className="text-gray-600 text-sm">Edit</button>
            <button className="text-gray-600 text-sm">Remove</button>
          </div>
        </div>

        {/* Visa */}
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
         <SiVisa size={40} className="text-blue-500" />
            <button className="text-sm text-gray-500">Set as primary</button>
          </div>
          <div className="mb-4">
            <p className="text-lg mb-1">**** **** **** 1456</p>
            <p className="text-sm text-gray-500">Expired 02/2028</p>
          </div>
          <div className="flex gap-3">
            <button className="text-gray-600 text-sm">Edit</button>
            <button className="text-gray-600 text-sm">Remove</button>
          </div>
        </div>

        {/* Add New Card */}
        <div className="border rounded-lg p-4 shadow-sm flex items-center justify-center">
          <button className="text-gray-600">+Add new payment method</button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 px-4 font-medium">Transaction ID</th>
                <th className="py-3 px-4 font-medium">Order#</th>
                <th className="py-3 px-4 font-medium">Price</th>
                <th className="py-3 px-4 font-medium">Items Qty</th>
                <th className="py-3 px-4 font-medium">Total Amount</th>
                <th className="py-3 px-4 font-medium">Delivery cost</th>
                <th className="py-3 px-4 font-medium">GST</th>
                <th className="py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 text-gray-600">{transaction.id}</td>
                  <td className="py-3 px-4">{transaction.orderNumber}</td>
                  <td className="py-3 px-4">${transaction.price.toFixed(2)}</td>
                  <td className="py-3 px-4">{transaction.quantity}</td>
                  <td className="py-3 px-4">${transaction.totalAmount.toFixed(2)}</td>
                  <td className="py-3 px-4">${transaction.deliveryCost.toFixed(2)}</td>
                  <td className="py-3 px-4">${transaction.gst.toFixed(2)}</td>
                  <td className="py-3 px-4 text-green-500">+${transaction.status.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
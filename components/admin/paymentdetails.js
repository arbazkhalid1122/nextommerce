import React from 'react';

const PaymentDetails = () => {
  const transactions = [
    { id: 'T234786AFDE', order: '6754', price: 200.00, qty: 3, total: 600.00, delivery: 2.00, gst: 7.20, status: 609.20 },
    { id: 'T234786AFDE', order: '6754', price: 200.00, qty: 3, total: 600.00, delivery: 2.00, gst: 7.20, status: 609.20 },
    { id: 'T234786AFDE', order: '6754', price: 200.00, qty: 3, total: 600.00, delivery: 2.00, gst: 7.20, status: 609.20 },
    { id: 'T234786AFDE', order: '6754', price: 200.00, qty: 3, total: 600.00, delivery: 2.00, gst: 7.20, status: 609.20 },
    { id: 'T234786AFDE', order: '6754', price: 200.00, qty: 3, total: 600.00, delivery: 2.00, gst: 7.20, status: 609.20 },
    { id: 'T234786AFDE', order: '6754', price: 200.00, qty: 3, total: 600.00, delivery: 2.00, gst: 7.20, status: 609.20 },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>
      
      <div className="flex gap-4 mb-8">
        {/* Mastercard Payment Method */}
        <div className="bg-white rounded-lg shadow-md p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <img src="/api/placeholder/60/40" alt="Mastercard" className="h-8" />
            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Primary</span>
          </div>
          <p className="text-gray-600 mb-2">**** **** **** 1456</p>
          <p className="text-sm text-gray-500 mb-4">Expired 02/2028</p>
          <div className="flex gap-2">
            <button className="text-sm text-gray-600 hover:text-gray-800">Edit</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">Remove</button>
          </div>
        </div>

        {/* Visa Payment Method */}
        <div className="bg-white rounded-lg shadow-md p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <img src="/api/placeholder/60/40" alt="Visa" className="h-8" />
            <button className="text-sm text-gray-600">Set as primary</button>
          </div>
          <p className="text-gray-600 mb-2">**** **** **** 1456</p>
          <p className="text-sm text-gray-500 mb-4">Expired 02/2028</p>
          <div className="flex gap-2">
            <button className="text-sm text-gray-600 hover:text-gray-800">Edit</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">Remove</button>
          </div>
        </div>

        {/* Add New Payment Method Button */}
        <div className="flex items-center">
          <button className="text-blue-500 hover:text-blue-600">+ Add new payment method</button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 text-gray-600">Transaction ID</th>
                <th className="text-left p-3 text-gray-600">Order#</th>
                <th className="text-left p-3 text-gray-600">Price</th>
                <th className="text-left p-3 text-gray-600">Items Qty</th>
                <th className="text-left p-3 text-gray-600">Total Amount</th>
                <th className="text-left p-3 text-gray-600">Delivery cost</th>
                <th className="text-left p-3 text-gray-600">GST</th>
                <th className="text-left p-3 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 text-gray-600">{transaction.id}</td>
                  <td className="p-3 text-gray-600">{transaction.order}</td>
                  <td className="p-3 text-gray-600">${transaction.price.toFixed(2)}</td>
                  <td className="p-3 text-gray-600">{transaction.qty}</td>
                  <td className="p-3 text-gray-600">${transaction.total.toFixed(2)}</td>
                  <td className="p-3 text-gray-600">${transaction.delivery.toFixed(2)}</td>
                  <td className="p-3 text-gray-600">${transaction.gst.toFixed(2)}</td>
                  <td className="p-3 text-green-500">+${transaction.status.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex gap-2 justify-center mt-4">
          <button className="px-3 py-1 bg-gray-200 rounded">1</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">4</button>
        </div>

        {/* Grand Total */}
        <div className="flex justify-end mt-4">
          <div className="text-right">
            <span className="font-semibold">Grand Total</span>
            <span className="text-green-500 ml-4">+$3655.2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
import React, { useState } from 'react';
import { SiMastercard, SiVisa } from "react-icons/si";
import PaymentModal from '@/components/payment/addPaymentModal';

const PaymentMethods = () => {
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Mastercard', last4: '1456', expiry: '02/2028', primary: true },
    { id: 2, type: 'Visa', last4: '5678', expiry: '05/2029', primary: false }
  ]);

  const addPaymentMethod = (newMethod) => {
    setPaymentMethods([...paymentMethods, { id: Date.now(), ...newMethod }]);
    setPaymentModal(false);
  };

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
    <div className="">
      <h1 className="text-2xl font-bold mb-6 mt-2">Payment Methods</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="border rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              {method.type === 'Mastercard' ? <SiMastercard size={40} className="text-red-500" /> : <SiVisa size={40} className="text-blue-500" />}
              {method.primary ? (
                <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded">Primary</span>
              ) : (
                <button className="text-sm text-gray-500">Set as primary</button>
              )}
            </div>
            <div className="mb-4">
              <p className="text-lg mb-1">**** **** **** {method.last4}</p>
              <p className="text-sm text-gray-500">Expired {method.expiry}</p>
            </div>
            <div className="flex gap-3">
              <button className="text-gray-600 text-sm">Edit</button>
              <button className="text-gray-600 text-sm">Remove</button>
            </div>
          </div>
        ))}
        <div className="border rounded-lg p-4 shadow-sm flex items-center justify-center" onClick={() => setPaymentModal(true)}>
          <button className="text-gray-600">+ Add new payment method</button>
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
                  <td className="py-3 px-4 text-red-500">-${transaction.status.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {paymentModal && <PaymentModal setPaymentModal={setPaymentModal} addPaymentMethod={addPaymentMethod} />}

    </div>
  );
};

export default PaymentMethods;
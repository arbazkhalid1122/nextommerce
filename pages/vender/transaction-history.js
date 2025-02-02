import { useEffect, useState } from "react";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([
    {
      product: "Laptop",
      amount: 1,
      price: "$1000",
      date: "2025-01-15",
      status: "Completed",
    },
    {
      product: "Smartphone",
      amount: 2,
      price: "$500",
      date: "2025-01-18",
      status: "Completed",
    },
    {
      product: "Headphones",
      amount: 1,
      price: "$150",
      date: "2025-01-20",
      status: "Pending",
    },
    {
      product: "Keyboard",
      amount: 3,
      price: "$60",
      date: "2025-01-22",
      status: "Completed",
    },
    {
      product: "Mouse",
      amount: 5,
      price: "$20",
      date: "2025-01-25",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-8 max-w-full">
      <h2 className="text-3xl font-semibold mb-6 text-center">Order History</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left text-lg font-medium text-gray-600 border-b">Product</th>
              <th className="p-4 text-left text-lg font-medium text-gray-600 border-b">Amount</th>
              <th className="p-4 text-left text-lg font-medium text-gray-600 border-b">Price</th>
              <th className="p-4 text-left text-lg font-medium text-gray-600 border-b">Date</th>
              <th className="p-4 text-left text-lg font-medium text-gray-600 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 border-b">{transaction.product}</td>
                <td className="p-4 text-sm text-gray-700 border-b">{transaction.amount}</td>
                <td className="p-4 text-sm text-gray-700 border-b">{transaction.price}</td>
                <td className="p-4 text-sm text-gray-700 border-b">{transaction.date}</td>
                <td className="p-4 text-sm text-gray-700 border-b">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

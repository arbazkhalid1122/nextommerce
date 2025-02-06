import React, { useState } from 'react';

const sampleOrders = [
  {
    id: "6754327DA23",
    date: "Feb 02, 2025 07:34 pm",
    status: "delivered",
    amount: 2034.00,
    items: 6
  },
  {
    id: "6754328DB24",
    date: "Feb 01, 2025 03:22 pm",
    status: "pending",
    amount: 1299.99,
    items: 3
  },
  {
    id: "6754329DC25",
    date: "Jan 31, 2025 11:15 am",
    status: "canceled",
    amount: 499.99,
    items: 2
  },
  {
    id: "6754330DD26",
    date: "Jan 30, 2025 09:45 pm",
    status: "delivered",
    amount: 3299.00,
    items: 4
  },
  {
    id: "6754331DE27",
    date: "Jan 29, 2025 02:30 pm",
    status: "pending",
    amount: 899.99,
    items: 2
  },
  {
    id: "6754332DF28",
    date: "Jan 28, 2025 05:17 pm",
    status: "delivered",
    amount: 1599.00,
    items: 5
  },
  {
    id: "6754333DG29",
    date: "Jan 27, 2025 10:20 am",
    status: "canceled",
    amount: 799.99,
    items: 3
  },
  {
    id: "6754334DH30",
    date: "Jan 26, 2025 04:55 pm",
    status: "pending",
    amount: 2499.00,
    items: 4
  }
];

const Order = () => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredOrders = selectedStatus 
    ? sampleOrders.filter(order => order.status === selectedStatus)
    : sampleOrders;

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'canceled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="rounded-lg w-full">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold">Orders</h2>
        <div className="relative">
          <select 
            className="border rounded-md p-2 outline-none cursor-pointer"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All Orders</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Order#</th>
              <th className="p-2">Placed Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Total amount</th>
              <th className="p-2">Items</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2 flex items-center">
                  <span className={`h-2 w-2 ${getStatusColor(order.status)} rounded-full mr-2`}></span>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </td>
                <td className="p-2">${order.amount.toFixed(2)}</td>
                <td className="p-2 flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXRlbXN8ZW58MHx8MHx8fDA%3D" alt="watch" className="h-6" />
                  <img src="https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGl0ZW1zfGVufDB8fDB8fHww" alt="phone" className="h-6" />
                  <img src="https://images.unsplash.com/photo-1587334106798-799c53ac09d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxpdGVtc3xlbnwwfHwwfHx8MA%3D%3D" alt="laptop" className="h-6" />
                  <span className="text-gray-600">+{order.items - 3}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button className="px-3 py-1 mx-1 bg-gray-800 text-white rounded">1</button>
        <button className="px-3 py-1 mx-1 bg-gray-200 rounded">2</button>
        <button className="px-3 py-1 mx-1 bg-gray-200 rounded">3</button>
        <button className="px-3 py-1 mx-1 bg-gray-200 rounded">4</button>
      </div>
    </div>
  );
};

export default Order;
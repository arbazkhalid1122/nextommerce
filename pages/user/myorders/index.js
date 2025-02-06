import React, { useState } from 'react';

// Mock data
const ordersData = [
  {
    id: '6754327DA23',
    date: 'Feb 02, 2025 07:34 pm',
    status: 'pending',
    amount: 2034.00,
    items: [
      { id: 1, name: 'Product Name', price: 230.00, image: '/product1.jpg' },
      { id: 2, name: 'Product Name', price: 230.00, image: '/product2.jpg' },
      { id: 3, name: 'Product Name', price: 230.00, image: '/product3.jpg' }
    ],
    customerDetails: {
      name: 'Coach Name',
      email: 'coachemail@gmail.com',
      phone: '+1 234 5678 901',
      address: 'Street No # House No Town, City, Zip Code',
      shipping: 7.2,
      gst: 7.2
    }
  }
  // Add more orders as needed
];

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-400';
      case 'in-process': return 'bg-blue-400';
      case 'delivered': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="border rounded-lg mb-4">
      <div className="flex items-center justify-between p-4">
        <div className="grid grid-cols-5 flex-1 gap-4">
          <span className="text-gray-600">{order.id}</span>
          <span className="text-gray-600">{order.date}</span>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></span>
            <span className="capitalize">{order.status}</span>
          </div>
          <span>${order.amount.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            {order.items.slice(0, 2).map((item, idx) => (
              <div key={idx} className="w-8 h-8 bg-gray-200 rounded"></div>
            ))}
            {order.items.length > 2 && (
              <span className="text-sm text-gray-600">+{order.items.length - 2}</span>
            )}
          </div>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2"
        >
          <svg 
            className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 border-t bg-gray-50">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-medium">Order Details</h3>
              <p>Order Placed By: {order.customerDetails.name}</p>
              <p>Email: {order.customerDetails.email}</p>
              <p>Phone No: {order.customerDetails.phone}</p>
              <p>Shipping Address: {order.customerDetails.address}</p>
              <p>Shipping Cost: ${order.customerDetails.shipping}</p>
              <p>GST: ${order.customerDetails.gst}</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Items</h3>
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-2 border rounded">-</button>
                      <span>1</span>
                      <button className="px-2 border rounded">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MyOrders = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Orders</h1>
        <select 
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">Select status</option>
          <option value="pending">Pending</option>
          <option value="in-process">In Process</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <div className="space-y-4">
        {ordersData.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded ${
              page === 1 ? 'bg-gray-200' : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
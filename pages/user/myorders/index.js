import React, { useState } from 'react';
import { TiWatch } from "react-icons/ti";
import { productImage } from '../../../components/constant';

const ordersData = [
  {
    id: '6754327DA23',
    date: 'Feb 02, 2025 07:34 pm',
    status: 'pending',
    amount: 2034.00,
    items: [
      { id: 1, name: 'Product Name', price: 230.00, image: '/product1.jpg', quantity: 1 },
      { id: 2, name: 'Product Name', price: 230.00, image: '/product2.jpg', quantity: 1 },
      { id: 3, name: 'Product Name', price: 230.00, image: '/product3.jpg', quantity: 1 }
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
];

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(order.items);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-400';
      case 'in-process': return 'bg-blue-400';
      case 'delivered': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  };

  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalAmount = (order) => {
    const subtotal = calculateSubtotal(items);
    return subtotal + order.customerDetails.shipping + order.customerDetails.gst;
  };

  const handleQuantityChange = (index, delta) => {
    const newItems = [...items];
    newItems[index].quantity += delta;
    if (newItems[index].quantity < 1) newItems[index].quantity = 1;
    setItems(newItems);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = calculateSubtotal(items);
  const totalAmount = calculateTotalAmount(order);

  return (
    <div className="border rounded-lg mb-4 overflow-x-auto">
      <div className="flex items-center justify-between p-4 min-w-max">
        <div className="flex gap-8 w-full">
          <span className="text-gray-600 mt-1 flex-1">{order.id}</span>
          <span className="text-gray-600 mt-1 flex-1">{order.date}</span>
          <div className="flex items-center gap-2 flex-1">
            <span className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></span>
            <span className="capitalize">{order.status}</span>
          </div>
          <span className='mt-1 flex-1'>${totalAmount.toFixed(2)}</span>
          <div className="flex items-center gap-2 flex-1">
            {items.slice(0, 2).map((item, idx) => (
              <div key={idx} className="w-8 h-8 bg-gray-200 rounded overflow-hidden">
                <img src={productImage} alt="product" className="w-full h-full object-cover" />
              </div>
            ))}
            {items.length > 2 && (
              <span className="text-sm text-gray-600">+{items.length - 2}</span>
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
        <div className="p-4 border-t overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-w-max">
            <div className="space-y-2">
              <h3 className="font-medium">Order Details</h3>
              <p>Order Placed By: {order.customerDetails.name}</p>
              <p>Email: {order.customerDetails.email}</p>
              <p>Phone No: {order.customerDetails.phone}</p>
              <p>Shipping Address: {order.customerDetails.address}</p>
              <p>Shipping Cost: ${order.customerDetails.shipping.toFixed(2)}</p>
              <p>GST: ${order.customerDetails.gst.toFixed(2)}</p>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Total Items: {totalItems}</p>
              <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Items</h3>
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                        <img src={productImage} alt="product" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleQuantityChange(idx, -1)} 
                        className="px-2 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(idx, 1)} 
                        className="px-2 border rounded"
                      >
                        +
                      </button>
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
    <div className="">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
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
        {Array(8).fill(ordersData[0]).map((order, index) => (
          <OrderItem key={index} order={order} />  
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

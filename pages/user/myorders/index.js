import { productImage } from '@/components/constant';
import { useCart } from '@/components/context/context';
import React, { useState } from 'react';
import { CartProvider } from '@/components/context/context';

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(order?.cart || []);
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-400';
      case 'in-process': return 'bg-blue-400';
      case 'delivered': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  };
  // console.log(CartProvider );
  
     console.log(order);
     
     
   
  const calculateSubtotal = (items) => {
    return items?.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleQuantityChange = (index, delta) => {
    const newItems = [...items];
    newItems[index].qty += delta;
    if (newItems[index].qty < 1) newItems[index].qty = 1;
    setItems(newItems);
  };

  const totalItems = items.reduce((total, item) => total + item.qty, 0);
  const subtotal = calculateSubtotal(items);
  const totalAmount = subtotal;

  return (
    <div className="border rounded-lg mb-4">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-8 w-full">
          <span className="text-gray-600 mt-1 flex-1">99999111001001</span>
          <span className="text-gray-600 mt-1 flex-1">Feb 02, 2025 07:34 pm</span>
          <div className="flex items-center gap-2 flex-1">
            <span className={`w-2 h-2 rounded-full ${getStatusColor('pending')}`}></span>
            <span className="capitalize">Pending</span>
          </div>
          <span className="text-gray-600 mt-1 flex-1">{order.paymentMethod}</span>
          <span className='mt-1 flex-1'>${totalAmount.toFixed(2)}</span>
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="p-2">
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
        <div className="p-4 border-t">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-medium">Order Details</h3>
              <p>Name: {order.fullName}</p>
              <p>Email: {order.email}</p>
              <p>Phone: {order.phone}</p>
              <p>Address: {order.address}, {order.city}, {order.country}</p>
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
                        <img src={item.image?item.image:productImage} alt="product" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center flex-col gap-2">
                    
                      
                      <span className=' p-2 text-[15px]  rounded-[50%]'>{item.qty}</span>
                     
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

const MyOrders = ({ ordersData }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div className="space-y-4">
        {ordersData.map((order, index) => (
          <OrderItem key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default function OrdersPage() {
  const { ordersData } = useCart();
  console.log("ordersData", ordersData);

  const fakeData = [
    {
      email: "fake@example.com",
      paymentMethod: "Credit Card",
      fullName: "John Doe",
      phone: "123-456-7890",
      address: "123 Fake Street",
      city: "Faketown",
      country: "Fakecountry",
      cart: [
        {
          title: "Fake Product 1",
          price: 10.0,
          qty: 1,
          img: "https://via.placeholder.com/150"
        },
        {
          title: "Fake Product 2",
          price: 20.0,
          qty: 2,
          img: "https://via.placeholder.com/150"
        }
      ]
    },
    // Add more fake orders if needed
  ];

  const dataToShow = ordersData && ordersData.length > 0 ? ordersData : fakeData;

  return <MyOrders ordersData={dataToShow} />;
}

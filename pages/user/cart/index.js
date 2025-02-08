import React from 'react';
// import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import OrderSummary from '../OrderSummary'

const cartData = [
  { id: 1, name: 'Product 1', price: 200.00, image: '/cart-item', qty: 1 },
  { id: 2, name: 'Product 2', price: 200.00, image: '/placeholder.jpg', qty: 1 },
  { id: 3, name: 'Product 2', price: 200.00, image: '/placeholder.jpg', qty: 1 },
  { id: 4, name: 'Product 5', price: 200.00, image: '/placeholder.jpg', qty: 1 },
  { id: 5, name: 'Product 3', price: 200.00, image: '/placeholder.jpg', qty: 1 }
];

const CartItem = ({ item, onUpdateQty, onRemove }) => (
  <tr className="border-b">
    <td className="py-4">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded"></div>
      </div>
    </td>
    <td className="py-4">${item.price.toFixed(2)}</td>
    <td className="py-4">
      <div className="flex items-center border rounded w-24">
        <button onClick={() => onUpdateQty(item.id, item.qty - 1)} className="px-3 py-1">-</button>
        <span className="px-3 py-1 border-x">{item.qty}</span>
        <button onClick={() => onUpdateQty(item.id, item.qty + 1)} className="px-3 py-1">+</button>
      </div>
    </td>
    <td className="py-4">${(item.price * item.qty).toFixed(2)}</td>
    <td className="py-4">
      <button onClick={() => onRemove(item.id)}>
        {/* <X className="w-5 h-5 text-gray-500" /> */}
        X
      </button>
    </td>
  </tr>
);



const ShoppingCart = () => {
  const [items, setItems] = React.useState(cartData);

  const handleUpdateQty = (id, newQty) => {
    if (newQty < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: newQty } : item
    ));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-3">
      <div className="text-sm breadcrumbs mb-4">
        <span className="text-2xl font-bold">Cart</span>
      </div>

      <div className="lg:flex lg:gap-8">
        <div className="lg:w-2/3">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Products</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Qty</th>
                  <th className="text-left py-4">Sub Total</th>
                  <th className="text-left py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item}
                    onUpdateQty={handleUpdateQty}
                    onRemove={handleRemove}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <OrderSummary items={items} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
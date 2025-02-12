import React from 'react';
import OrderSummary from '../OrderSummary';
import { useCart } from '@/components/context/context';
import { productImage } from '@/components/constant';

const CartItem = ({ item, onUpdateQty, onRemove }) => (
  <tr className="border-b">
    <td className="py-4">
      <div className="flex items-center">
        <img src={productImage} alt={item.title} className="w-12 h-12 rounded"/>
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
      <button onClick={() => onRemove(item.id)}>X</button>
    </td>
  </tr>
);

const ShoppingCart = () => {
  const { cart, updateQty, removeFromCart } = useCart();

console.log("cart", cart);
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
                {cart.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item}
                    onUpdateQty={updateQty}
                    onRemove={removeFromCart}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <OrderSummary items={cart} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

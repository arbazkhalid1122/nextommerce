import React from 'react';
import OrderSummary from '../OrderSummary';
import { useCart } from '@/components/context/context';

const CartItem = ({ item, onUpdateQty, onRemove }) => (
  <div className="flex items-center justify-between p-3 border rounded-lg shadow-md bg-white w-full">
    {/* Product Image */}
    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg" />

    {/* Product Details */}
    <div className="flex-1 flex flex-col ml-3">
      <h3 className="font-semibold text-sm">{item.title}</h3>
      <p className="text-gray-500 text-xs">4 pack</p>
      <p className="text-gray-500 font-semibold">${item.price.toFixed(2)}</p>
    </div>

    {/* Quantity Controls */}
    <div className="flex items-center gap-2">
      <button
        onClick={() => onUpdateQty(item.id, item.qty - 1)}
        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-lg hover:bg-gray-300"
      >
        -
      </button>
      <span className="text-md font-semibold w-6 text-center">{item.qty}</span>
      <button
        onClick={() => onUpdateQty(item.id, item.qty + 1)}
        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-lg hover:bg-gray-300"
      >
        +
      </button>
    </div>
    {/* Favorite Icon */}
  </div>
);


const ShoppingCart = () => {
  const { cart, updateQty, removeFromCart } = useCart();

  return (
    <div>
      <span className="responsive-header">Cart</span>
      <div className="lg:flex lg:gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="hidden lg:block">
            {/* Table Layout for Large Screens */}
            <table className="w-full ">
              <thead>
                <tr className="">
                  <th className="py-3 px-4 text-left">Product</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Quantity</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4 flex items-center gap-3">
                      <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-contain" />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-4 px-4">${item.price.toFixed(2)}</td>
                    <td className="py-4 px-4">
                      <div className="flex w-[fit-content] border ">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 ">-</button>
                        <span className="px-4 py-1 border-x text-lg">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
                      </div>
                    </td>
                    <td className="py-4 px-4">${(item.price * item.qty).toFixed(2)}</td>
                    <td className="py-4 px-4">
                      <button onClick={() => onRemove(item.id)} className="text-red-500">X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Layout (Card-based) */}
          <div className="lg:hidden flex flex-col gap-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeFromCart} />
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <OrderSummary items={cart} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

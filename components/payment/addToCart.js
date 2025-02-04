import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Leather Handbag",
      price: 1999.0,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Designer Tote",
      price: 2499.0,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-4xl w-full p-6 mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center">Your Cart</h1>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-2 sm:px-4">Product</th>
              <th className="text-left py-4 px-2 sm:px-4">Price</th>
              <th className="text-left py-4 px-2 sm:px-4">Quantity</th>
              <th className="text-right py-4 px-2 sm:px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-2 sm:px-4">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                    />
                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 px-2 sm:px-4 text-sm sm:text-base">${item.price.toFixed(2)}</td>
                <td className="py-4 px-2 sm:px-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-6 sm:w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-2 sm:px-4 text-right text-sm sm:text-base">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Summary */}
      <div className="mt-8 space-y-4 text-sm sm:text-base">
        <div className="flex justify-between">
          <span>VAT 0.0%</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <span>TOTAL</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

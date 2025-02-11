import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart State
  const [orders, setOrders] = useState([]); // Orders State
  const [paymentMethod, setPaymentMethod] = useState("COD"); // Default Payment Method

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Place order
  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrders([...orders, { id: Date.now(), items: cart, paymentMethod }]);
    setCart([]); // Clear Cart after order
  };

  // Change Payment Method
  const changePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        orders,
        placeOrder,
        paymentMethod,
        changePaymentMethod,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

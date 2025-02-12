import { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();
// Custom Hook for easy usage
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
const [ordersData, setOrdersData] = useState([])
const [newlyProducts, setNewlyProducts] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const addOrders = (product) => {
    setOrdersData((prev) => [...prev, product]);
  };


  const addProduct = (product) => {
    setNewlyProducts((prev) => [...prev, product]);
  };

  console.log(ordersData,'ordersData');
  

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart,addOrders,clearCart,ordersData,addProduct,newlyProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

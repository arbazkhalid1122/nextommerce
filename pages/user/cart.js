import { useState } from "react";
import { FaShoppingBag, FaTrashAlt } from "react-icons/fa";
import PaymentCard from "../../components/payment/paymentCard";
import ShoppingCart from "../../components/payment/addToCart";

const fakeProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Cart = () => {

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <ShoppingCart />
      <PaymentCard />
    </div>
  );
};

export default Cart;

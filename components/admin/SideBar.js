import React, { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { icon: "../assets/order.png", text: "Orders", route: "/vender/order" },
    { icon: "../assets/products.png", text: "Products", route: "/vender/product" },
    { icon: "../assets/payment.png", text: "Payment Methods", route: "/admin/payment-methods" },
    { icon: "../assets/rating.png", text: "Rating", route: "/admin/rating" },
  ];

  const handleItemClick = (item) => {
    router.push(item.route);
  };

  return (
    <div className="w-1/5 h-screen flex flex-col items-end border-r p-4 gap-4">
      <div className="flex items-center gap-4 border-b pb-2">
        <img className="w-10 h-10 rounded-full border" src="../assets/profile.png" alt="Profile" />
        <div>
          <p className="text-lg font-semibold">Seller Name</p>
          <p className="text-gray-500">Seller</p>
        </div>
      </div>
      <ul className="w-full flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer`}
            onClick={() => handleItemClick(item)}
          >
            <img className="w-5 h-5" src={item.icon} alt={item.text} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

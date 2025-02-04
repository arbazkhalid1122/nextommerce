import React from "react";

const Sidebar = ({ setActiveComponent, activeComponent }) => {
  const menuItems = [
    { icon: "../assets/order.png", text: "Orders" },
    { icon: "../assets/products.png", text: "Products" },
    { icon: "../assets/payment.png", text: "Payment Methods" },
    { icon: "../assets/rating.png", text: "Rating" },
  ];

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
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
              activeComponent === item.text ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveComponent(item.text)}  // ✅ Updates active component in Admin
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

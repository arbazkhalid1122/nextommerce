import React, { useState } from "react";
import { useRouter } from "next/router";
import { PiTrashSimple, PiShoppingBagThin } from "react-icons/pi";
import { SlCreditCard } from "react-icons/sl";
import { ImStarEmpty } from "react-icons/im";
import { RxAvatar, RxPerson } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  let admin = false;

  const handleItemClick = (route) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <div className="relative z-30">
      {/* Menu Button for Mobile */}
      <button 
        className="p-2 m-4 bg-gray-200 rounded-lg md:hidden"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[100%] bg-white p-4 shadow-lg transform transition-transform duration-300 overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:w-[100%] md:flex md:flex-col md:items-start`}
      >
        {/* Close Button for Mobile */}
        <button 
          className="p-2 bg-gray-200 rounded-lg md:hidden self-end"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        
        {/* User Info */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
          <RxAvatar className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-lg font-semibold truncate">{admin ? "Seller Name" : "Customer Name"}</p>
            <p className="text-gray-500 text-sm">{admin ? "Seller" : "Customer"}</p>
          </div>
        </div>

        {/* Sidebar Menu */}
        <ul className="w-full flex flex-col gap-2 mt-4">  
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => handleItemClick(admin ? '/vender/order' : '/user/myorders')}
          >
            <PiShoppingBagThin /> {admin ? 'Orders' : 'My Orders'}
          </li>
          
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => handleItemClick(admin ? '/vender/product' : '/user/product')}
          >
            <PiTrashSimple /> {admin ? 'My Products' : 'Products'} 
          </li>
          
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => handleItemClick(admin ? '/vender/payment-methods' : '/user/payment-methods')}
          >
            <SlCreditCard /> Payment Method
          </li>
          
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => handleItemClick(admin ? '/vender/rating' : '/user/myreview')}
          >
            <ImStarEmpty /> {admin ? 'Rating' : 'My Reviews'}
          </li>
        </ul>

        {/* Account Management */}
        <div className="flex items-center gap-2 p-2 mt-4 text-gray-600 font-semibold">
          Account Management
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
          onClick={() => handleItemClick(admin ? '/vender/profile' : '/user/profile')}
        >
          <RxPerson /> Personal Information
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
          <MdOutlineLogout /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

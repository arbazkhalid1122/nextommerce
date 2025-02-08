import React, { useState } from "react";
import { useRouter } from "next/router";
import { PiTrashSimple, PiShoppingBagThin } from "react-icons/pi";
import { SlCreditCard } from "react-icons/sl";
import { ImStarEmpty } from "react-icons/im";
import { RxAvatar, RxPerson } from "react-icons/rx";
import { MdOutlineLogout, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({collapsed,setCollapsed}) => {
  const router = useRouter();
  let admin = false;

  const handleItemClick = (route) => {
    router.push(route);
  };

  const isActive = (route) => router.pathname === route;

  return (
    <div className={`fixed top-18 left-0 pl-4 h-screen bg-white transition-all duration-300 `}>
  
      {/* Sidebar */}
      <div className="h-full flex flex-col items-start p-4">
        {/* User Info */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-200 w-full">
          <RxAvatar className="w-10 h-10 rounded-full" />
          {!collapsed && (
            <div>
              <p className="text-lg font-semibold truncate">
                {admin ? "Seller Name" : "Customer Name"}
              </p>
              <p className="text-gray-500 text-sm">
                {admin ? "Seller" : "Customer"}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar Menu */}
        <ul className="w-full flex flex-col gap-2 mt-4">
          <li className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${isActive(admin ? "/vender/order" : "/user/myorders") ? "bg-gray-300" : ""}`} onClick={() => handleItemClick(admin ? "/vender/order" : "/user/myorders")}>
            <PiShoppingBagThin size={collapsed ? 30 : 20} /> {!collapsed && (admin ? "Orders" : "My Orders")}
          </li>

          <li className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${isActive(admin ? "/vender/product" : "/user/product") ? "bg-gray-300" : ""}`} onClick={() => handleItemClick(admin ? "/vender/product" : "/user/product")}>
            <PiTrashSimple size={collapsed ? 30 : 20} /> {!collapsed && (admin ? "My Products" : "Products")}
          </li>

          <li className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${isActive(admin ? "/vender/payment-methods" : "/user/payment-methods") ? "bg-gray-300" : ""}`} onClick={() => handleItemClick(admin ? "/vender/payment-methods" : "/user/payment-methods")}>
            <SlCreditCard size={collapsed ? 30 : 20} /> {!collapsed && "Payment Method"}
          </li>

          <li className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${isActive(admin ? "/vender/rating" : "/user/myreview") ? "bg-gray-300" : ""}`} onClick={() => handleItemClick(admin ? "/vender/rating" : "/user/myreview")}>
            <ImStarEmpty size={collapsed ? 30 : 20} /> {!collapsed && (admin ? "Rating" : "My Reviews")}
          </li>
        </ul>

        {/* Account Management */}
        {!collapsed && <div className="mt-4 text-gray-600 font-semibold">Account Management</div>}
        <div className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${isActive(admin ? "/vender/profile" : "/user/profile") ? "bg-gray-300" : ""}`} onClick={() => handleItemClick(admin ? "/vender/profile" : "/user/profile")}>
          <RxPerson size={collapsed ? 30 : 20} /> {!collapsed && "Personal Information"}
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineLogout size={collapsed ? 30 : 20} /> {!collapsed && "Logout"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

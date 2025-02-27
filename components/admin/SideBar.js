import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PiTrashSimple, PiShoppingBagThin } from "react-icons/pi";
import { SlCreditCard } from "react-icons/sl";
import { ImStarEmpty } from "react-icons/im";
import { RxAvatar, RxCross1, RxPerson } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";

const Sidebar = ({ collapsed, setIsDrawerOpen }) => {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin")) {
      setAdmin(true);
    }
  }, []);

  const handleItemClick = (route) => {
    if (route === "/auth/login") {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("buyer");
    }
    router.push(route);
  };
  const isActive = (route) => router.pathname === route;

  return (
    <div className={`"w-full  max-w-[2200px] fixed top-16  md:pl-4 h-screen bg-white transition-all duration-300 `}>
      {/* Sidebar */}
      <div className="h-full flex flex-col items-start p-2 md:p-4">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        >
          <RxCross1 size={15} />
        </button>
        {/* User Info */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-200 w-full">
          <RxAvatar className="w-10 h-10 rounded-full" />
          {!collapsed && (
            <div>
              <p className="text-sm md:text-lg font-semibold truncate">
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
        {!admin && (
          <div className="flex flex-col mt-4 hidden lg:hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => handleItemClick("/user/cart")}>
              <FaShoppingCart
                className="text-gray-700 text-xl cursor-pointer hover:text-gray-900"
              /> Cart
            </div>
          </div>
        )}
        <div className={`flex items-center mt-2 gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${isActive(admin ? "/vender/profile" : "/user/profile") ? "bg-gray-300" : ""}`} onClick={() => handleItemClick(admin ? "/vender/profile" : "/user/profile")}>
          <RxPerson size={collapsed ? 30 : 20} /> {!collapsed && "Personal Information"}
        </div>
        <div className="flex items-center mt-2 gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200" onClick={() => handleItemClick("/auth/login")}>
          <MdOutlineLogout size={collapsed ? 30 : 20} /> {!collapsed && "Logout"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

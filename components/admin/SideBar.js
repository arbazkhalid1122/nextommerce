import React from "react";
import { useRouter } from "next/router";
import { PiTrashSimple, PiShoppingBagThin } from "react-icons/pi";
import { SlCreditCard } from "react-icons/sl";
import { ImStarEmpty } from "react-icons/im";
import { RxAvatar, RxPerson } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();
   
   let admin = false

  const menuItems = [
    { icon: <PiShoppingBagThin />, text: "Orders", route: "/vender/order" },
    { icon: <PiTrashSimple />, text: "Products", route: "/vender/product" },
    { icon: <SlCreditCard />, text: "Payment Methods", route: "/vender/payment-methods" },
    { icon: <ImStarEmpty />, text: "Rating", route: "/vender/rating" },
  ];

  const handleItemClick = (route) => {
    router.push(route);
  };

  return (
    <div className="w-1/5 h-screen flex flex-col items-start p-4 gap-4">
      {/* User Info */}
      <div className="flex items-center gap-4 pb-2">
        <RxAvatar className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-lg font-semibold">{admin?"Seller Name":'Customer Name'}</p>
          <p className="text-gray-500">{admin?"Seller":"customer"}</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <ul className="w-full flex flex-col gap-2">  
          <li
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
              ${router.pathname ==="Orders" ? "bg-gray-300" : "hover:bg-gray-200"}`}
            onClick={() => admin? handleItemClick('/vender/order'):handleItemClick('/user/myorders')}
          >
           <PiShoppingBagThin />
          {admin?'Orders':'My Orders'} 
          </li>
          {admin &&
          <li
          className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
            ${router.pathname ==="Orders" ? "bg-gray-300" : "hover:bg-gray-200"}`}
          onClick={() =>  handleItemClick('/vender/product')}
        >
          <PiTrashSimple />
        Products
        </li>
          }
          
          <li
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
              ${router.pathname ==="Payment Methods" ? "bg-gray-300" : "hover:bg-gray-200"}`}
            onClick={() => admin? handleItemClick('/vender/payment-methods'):handleItemClick('/user/payment-methods')}
          >
           <SlCreditCard />
          Payment Method
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
              ${router.pathname ==="Reviews" ? "bg-gray-300" : "hover:bg-gray-200"}`}
            onClick={() => admin? handleItemClick('/vender/rating'):handleItemClick('/user/myreview')}
          >
           <ImStarEmpty  />
          {admin?'Rating':'My Reviews'} 
          </li>
        
      </ul>

      {/* Account Management */}
      <div className="flex items-center gap-2 p-2 text-gray-600 rounded-lg font-semibold">
        Account Management
      </div>
      <div className={`flex gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg  
       ${router.pathname ==="/user/profile"  ? "bg-gray-300" : "hover:bg-gray-200"}  `}
         
       onClick={()=>admin? handleItemClick('/vender/profile'):handleItemClick('/user/profile')
       }
      >
        <RxPerson className="w-6 h-6" />
        Personal Information
      </div>
      <div className="flex gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
        <MdOutlineLogout className="w-6 h-6" />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;

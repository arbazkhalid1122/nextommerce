import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io";

const Navbar = ({ setIsDrawerOpen }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = React.useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin")) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="w-full h-16 flex items-center border-b border-gray-300 px-4 md:px-8 fixed top-0 left-0 z-10 bg-white">
      {/* Sidebar Toggle Button (Visible on Small Screens) */}
      <button
        className="md:hidden text-gray-700 text-xl mr-4"
        onClick={() => setIsDrawerOpen(true)}
      >
        <FaBars />
      </button>

      <div className="text-white md:flex items-center justify-center rounded-md">
        <IoLogoXing color="black" size={35} />
      </div>

      {/* Search Bar */}
      <div className="flex-grow flex justify-center">
        <input
          type="text"
          placeholder="Search products"
          className="w-3/4 md:w-1/3 h-10 bg-gray-300 text-gray-700 rounded-full px-3 outline-none"
        />
      </div>

      {/* Icons (Hidden for Admins and on Medium/Small Screens) */}
      {!isAdmin && (
        <div className="flex items-center gap-4 hidden lg:flex">
          <FaShoppingCart
            className="text-gray-700 text-xl cursor-pointer hover:text-gray-900"
            onClick={() => router.push("/user/cart")}
          />
          <FaUser
            className="text-gray-700 text-xl cursor-pointer hover:text-gray-900"
            onClick={() => router.push("/user/profile")}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
// import { useGlobalContext } from "../Contexts/globalContext/context";
// import { useGlobalContext } from "../Contexts/globalContext/newcontext";

import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../config";
import {
  FaPlusCircle,
  FaShoppingBag,
  FaClipboardList,
  FaSignOutAlt,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  const router = useRouter();
  // const {
  //   translate: t,
  //   lang,
  //   sideToggler,
  //   amount,
  //   cartToggler,
  //   displayProf,
  //   setDisplayProf,
  // } = useGlobalContext();
  const [search, setSearch] = useState(router.query.q ? router.query.q : "");
  const [isAdmin, setIsAdmin] = useState(false);
  const { amount } = 0 
  console.log(amount);
  

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <nav
      // style={{ direction: `${lang === "fa" ? "rtl" : "ltr"}` }}
      className="z-50 sticky top-0 w-full flex justify-between items-center px-4 py-5 sm:px-6  bg-gray-900 text-white shadow-lg"
    >
      {/* Non-Admin View */}
      { !isAdmin && (
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="text-lg font-semibold hover:text-[#00C6FF] transition">
                Home
              </a>
            </Link>
          </div>

          {/* Responsive Search Bar */}
          <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  let currentUrlParams = new URLSearchParams(router.query);
                  currentUrlParams.set("q", search);
                  router.push(
                    server + "/search?" + currentUrlParams.toString()
                  );
                  setSearch("");
                }
              }}
              type="text"
              placeholder="Search"
              className="hidden sm:block w-40 sm:w-56 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="ml-2 text-[#00C6FF] hover:text-white transition">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
          <button className="relative hover:text-[#00C6FF] transition" onClick={() => router.push("/user/cart")}>
      <FaShoppingBag className="w-6 h-6" />
      {amount > 0 && (
        <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full">
          {amount} {/* Display cart amount */}
        </div>
      )}
    </button>
            <button

              className="hover:text-[#00C6FF] transition"
              onClick={() => router.push("/user/favourites")}

              
            >
              <FaHeart className="w-6 h-6" />
            </button>
            <button
              className="hover:text-[#00C6FF] transition"
              // onClick={() => setDisplayProf(!displayProf)}
            >
              <FaUserCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Admin View */}
      {/* {isAdmin && (
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/vender/product/create">
              <a className="flex items-center space-x-2 hover:text-[#00C6FF] transition">
                <FaPlusCircle className="w-5 h-5" />
                <span className="hidden sm:inline text-lg font-medium">
                  New Product
                </span>
              </a>
            </Link>
            <Link href="/vender/product/display">
              <a className="flex items-center space-x-2 hover:text-[#00C6FF] transition">
                <FaClipboardList className="w-5 h-5" />
                <span className="hidden sm:inline text-lg font-medium">
                  Your Products
                </span>
              </a>
            </Link>
            <Link href="/vender/order">
              <a className="flex items-center space-x-2 hover:text-[#00C6FF] transition">
                <FaShoppingBag className="w-5 h-5" />
                <span className="hidden sm:inline text-lg font-medium">
                  Orders
                </span>
              </a>
            </Link>
          </div>
          <button
            // onClick={() => setDisplayProf(!displayProf)}
            className="hover:text-[#00C6FF] transition"
          >
            <FaUserCircle className="w-6 h-6" />
          </button>
        </div>
      )} */}
    </nav>
  );
}

export default Navbar;

import { useEffect, useState } from "react";
import { useGlobalContext } from "../Contexts/globalContext/context";
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
  const {
    translate: t,
    lang,
    sideToggler,
    amount,
    cartToggler,
    displayProf,
    setDisplayProf,
  } = useGlobalContext();
  const [search, setSearch] = useState(router.query.q ? router.query.q : "");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <nav
      style={{ direction: `${lang === "fa" ? "rtl" : "ltr"}` }}
      className="z-40 sticky top-0 flex justify-between items-center px-6 py-4 navbar text-primary glob-trans backdrop-blur-lg backdrop-filter transition-all duration-300 ease-in-out"
    >
      {/* Non-Admin View */}
      {!isAdmin && (
        <div className="w-full flex justify-between items-center bg-gray-100 text-primary py-3 px-6 rounded-md shadow-lg bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg backdrop-filter">
          <div className="flex items-center">
            <div className="hidden sm:flex">
              <div className="mx-3 hover:text-yellow-400 text-lg font-semibold">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-200 py-1 px-3 rounded-full">
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
              className="w-full mx-2 bg-transparent text-primary placeholder-gray-500 focus:outline-none"
            />
            <FaSearch className="w-5 h-5 text-gray-600" />
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="hover:text-yellow-400 relative"
              onClick={()=> router.push("/user/cart")}
            >
              <FaShoppingBag className="w-6 h-6" />
              {amount !== 0 && (
                <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full">
                  {amount}
                </div>
              )}
            </button>
            <FaHeart color="red" onClick={()=>router.push('/user/favourites')} className="w-6 h-6" />

            <button onClick={() => setDisplayProf(!displayProf)} className="hover:text-yellow-400">
              <FaUserCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Admin View */}
      {isAdmin && (
        <div className="w-full flex justify-between items-center bg-gray-100 text-primary py-3 px-6 rounded-md shadow-lg bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg backdrop-filter">
          <div className="flex items-center space-x-8">
            <Link href="/vender/product/create">
              <a className="flex items-center space-x-2 hover:text-yellow-400 transition">
                <FaPlusCircle className="w-5 h-5" />
                <span className="text-lg font-medium">New Product</span>
              </a>
            </Link>
            <Link href="/vender/product/display">
              <a className="flex items-center space-x-2 hover:text-yellow-400 transition">
                <FaClipboardList className="w-5 h-5" />
                <span className="text-lg font-medium">Your Products</span>
              </a>
            </Link>
            <Link href="/vender/order">
              <a className="flex items-center space-x-2 hover:text-yellow-400 transition">
                <FaShoppingBag className="w-5 h-5" />
                <span className="text-lg font-medium">Orders</span>
              </a>
            </Link>
          </div>
              <button onClick={() => setDisplayProf(!displayProf)} className="">
              <FaUserCircle className="w-6 h-6" />
            </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

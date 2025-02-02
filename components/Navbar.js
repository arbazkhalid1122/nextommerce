import { useEffect, useState } from "react";
import { useGlobalContext } from "../Contexts/globalContext/context";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../config";
import AdminNav from "./admin/AdminNav";

// theme toggle Button
import Toggle from "./ThemeToggle";

// icons
import {
  SearchIcon,
  MenuIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

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
  // setting value of search input
  const [search, setSearch] = useState(router.query.q ? router.query.q : "");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <>
      <nav
        style={{ direction: `${lang === "fa" ? "rtl" : "ltr"}` }}
        className="z-40 sticky top-0 flex justify-between text-sm items-center px-5 py-4 navbar text-primary glob-trans bg-white shadow-md"
      >
        {!isAdmin && (
          <>
            <div className="flex items-center">
              <div className="hidden sm:flex">
                <div className="mx-3 hover:text-accent text-lg font-semibold">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between max-w-min bg-third hover:bg-hover hover:text-accent py-1 px-2 rounded-full">
              <div className="form-control min-w-[110px] sm:min-w-[200px] md:min-w-[250px]">
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
                  className="mt-[1px] w-full mx-1 bg-transparent text-primary placeholder-[#757474] focus:outline-none"
                />
              </div>
              <SearchIcon className="w-5 h-5 mx-1" />
            </div>
            <div className="flex items-center">
              <div className="mx-3 md:mx-5 mt-1">
                <Toggle className="w-5 h-5" />
              </div>
              <button
                className="mb-1 mx-3 mt-1 hover:text-accent relative flex flex-row"
                onClick={cartToggler}
              >
                <ShoppingBagIcon className="w-5 h-5" />
                {amount !== 0 ? (
                  <div className="text-xs absolute text-center bottom-0 -right-2 w-4 h-4 rounded-full bg-secondarycont text-secondarycont">
                    {amount}
                  </div>
                ) : null}
              </button>
              <button
                onClick={() => setDisplayProf(!displayProf)}
                className="mx-3 md:mx-5"
              >
                <UserCircleIcon className="w-5 h-5" />
              </button>
            </div>
          </>
        )}

        {isAdmin && (
          <div className="flex justify-between w-full">
            <ul className="flex flex-row justify-between">
              <div className="flex flex-row justify-start gap-x-9">
                <li className="text-lg font-semibold">
                  <Link href="/admin/product/create">
                    <a>New product</a>
                  </Link>
                </li>
                <li className="text-lg font-semibold">
                  <Link href="/admin/product/display">
                    <a>Your Products</a>
                  </Link>
                </li>
                <li className="text-lg font-semibold">
                  <Link href="/admin/order">
                    <a>Orders</a>
                  </Link>
                </li>
              </div>
            </ul>
            <div className="flex flex-row justify-end">
              <div onClick={() =>{
                localStorage.removeItem('isAdmin')
                 router.push('/auth/login')
                 }} className="text-lg font-semibold cursor-pointer">
                Log out
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
export default Navbar;

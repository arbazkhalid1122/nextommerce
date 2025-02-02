import { useEffect, useState } from "react";
import { useGlobalContext } from "../Contexts/globalContext/context";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { updateAccount, account, displayProf, setDisplayProf, lang } =
    useGlobalContext();
  
  const [isBuyer, setIsBuyer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check localStorage for buyer status
  useEffect(() => {
    const buyerStatus = localStorage.getItem("buyer") === "true";
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
    setIsBuyer(buyerStatus);
  }, []);



  const logOut = async () => {
    const redirect = "/auth/login";
    setDisplayProf(false);
      updateAccount({});
      localStorage.removeItem("buyer");  // Clear buyer status from localStorage
      localStorage.removeItem('isAdmin')
      router.push(redirect);
  };

  return (
    <div
      className={`${
        displayProf ? "block" : "hidden"
      } fixed top-0 mt-20 ${lang === "en" ? "right-0 mr-[10px]" : "left-0 ml-[10px]"} z-50`}
    >
      <div className="absolute top-0 left-0 m-2 text-secondarycont">
        <button
          onClick={() => setDisplayProf(false)}
          className="p-2 rounded-full bg-opacity-50 hover:bg-opacity-75 transition-all"
        >
          <XIcon width={20} />
        </button>
      </div>

      <div className="bg-light-theme text-dark-theme rounded-xl w-[280px] h-auto max-w-full p-6 shadow-lg backdrop-blur-sm bg-opacity-50">
        {(isBuyer || isAdmin) ? (
          <div className="text-center">
          
            <button
              className="bg-transparent border-2 border-dark-theme text-dark-theme rounded-full mt-4 py-2 px-6 transition"
              onClick={logOut}
            >
              Log Out
            </button>
            {/* Transaction History Button */}
           {isBuyer ? <Link href="/order-history">
              <a
                className="block bg-primarycont text-white text-center rounded-full mt-4 py-2 px-6 hover:bg-primarycont/80 transition"
              >
                View Order History
              </a>
            </Link>: <Link href="/vender/transaction-history">
              <a
                className="block bg-primarycont text-white text-center rounded-full mt-4 py-2 px-6 hover:bg-primarycont/80 transition"
              >
                View Transaction History
              </a>
            </Link> 
            }
          </div>
        ) : (
          <div className="flex justify-center items-center h-[150px]">
            <div className="bg-primarycont rounded-full px-6 pt-1 h-8 text-white">
              <Link href="/auth/login">
                <a className="text-sm font-medium">Log In</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

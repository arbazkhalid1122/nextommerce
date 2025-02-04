import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "../Contexts/globalContext/context";
import Loading from "./Loading";
import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import SideBar from "./admin/SideBar";
import Profile from "./Profile";
import Footer from "./Footer";
import Admin from "./admin/admin";

export default function Layout({ children }) {
  const router = useRouter();
  const { setShowCart, setShowSide, setDisplayProf } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setShowSide(false);
    setShowCart(true);
    setDisplayProf(false);

    const handleStart = (url) => setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <div className="content glob-trans relative  min-h-screen bg-gray-100 ">
      <Loading loading={loading} />
      <Navbar />
      <Admin />
      {/* <Sidebar />  */}
      {/* side bar is not visible and set to true  */}
      <Profile />
      {children}
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "../Contexts/globalContext/context";
import Loading from "./Loading";
import Footer from "./Footer";
import Sidebar from "./admin/SideBar";
import Navbar from "./admin/Navbar";

export default function Layout({ children }) {
  const router = useRouter();
  const { setShowCart, setShowSide, setDisplayProf } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShowSide(false);
    setShowCart(false);
    setDisplayProf(false);

    const handleStart = (url) => setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <div className="content glob-trans relative min-h-screen bg-gray-100 ">
      <Loading loading={loading} />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

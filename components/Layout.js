import React, { useState } from "react";
import Loading from "./Loading";
import Navbar from "./admin/Navbar";
import Sidebar from "./admin/SideBar";
export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);


  return (
    <div className="content glob-trans relative min-h-screen bg-white ">
      <Loading loading={loading} />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}

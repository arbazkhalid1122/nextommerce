import React, { useEffect, useState } from "react";
import Sidebar from "./admin/SideBar";
import Navbar from "./admin/Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      (!localStorage.getItem("isAdmin") && !localStorage.getItem("buyer")) ||
      router.pathname === "/"
    ) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      {!["/auth/login", "/auth/signup", "/auth/forgotPassword"].includes(
        router.pathname
      ) ? (
        <div className="relative min-h-screen bg-white">
          <Navbar setIsDrawerOpen={setIsDrawerOpen} />

          {/* Sidebar for Large Screens */}
          <div className="hidden md:block fixed top-16 left-0 h-full w-64">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>

          {/* Page Content (Add margin when sidebar is visible) */}
          <div className={`flex-1 p-4 md:ml-64 mt-16`}>{children}</div>

          {/* Sidebar as Drawer for Small Screens */}
          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
              onClick={() => setIsDrawerOpen(false)}
            >
              <div className="fixed top-0 left-0 h-full bg-white shadow-lg">
                <Sidebar collapsed={false} setCollapsed={setCollapsed} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative min-h-screen bg-white">{children}</div>
      )}
    </>
  );
}

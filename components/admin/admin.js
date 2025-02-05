import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import Order from "./order";
import Products from "./products";
import PaymentDetails from "./paymentdetails";
import RatingComponent from "./rating";

const Admin = () => {
  const [activeComponent, setActiveComponent] = useState("Orders");

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full">
        <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        
        {/* Main Content Area */}
        <div className="w-4/5 p-6">
          {activeComponent === "Orders" && <Order />}
          {activeComponent === "Products" && <Products />}
          {activeComponent === "Payment Methods" && <PaymentDetails />}
          {activeComponent === "Rating" && <RatingComponent />}
        </div>
      </div>
    </div>
  );
};

export default Admin;

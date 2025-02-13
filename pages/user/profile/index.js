import React from "react";
import ProfileForm from "../../../components/ProfileForm";

const Dashboard = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <ProfileForm />
    </div>
  );
};

export default Dashboard;

import React from "react";
import ProfileForm from "../../../components/ProfileForm";

const Dashboard = ({ children }) => {
  return (
    <div className="flex">
      <ProfileForm />
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 p-10 min-h-screen">
      <div>
        <ProFastLogo></ProFastLogo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
                    
          <div className="flex-1">
            <img src={AuthImage} className="max-w-sm rounded-lg" />
          </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold"></h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

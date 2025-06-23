import React from 'react';
import { Outlet } from 'react-router';
import AuthImage from '../assets/authImage.png'
import ProFastLogo from '../Pages/Shared/ProFastLogo/ProFastLogo';

const AuthLayout = () => {
    return (
    <div className="bg-base-200 p-10 min-h-screen">
        <div>
            <ProFastLogo></ProFastLogo>
        </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={AuthImage}
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
    );
};

export default AuthLayout;
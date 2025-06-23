import React from "react";
import marchentImg from "../../../assets/Layer_1.png";

const BeMarchent = () => {
  return (
    <div className="hero py-20 bg-base-200 ">
      <div className="hero-content flex w-full justify-between lg:flex-row-reverse">
        <img src={marchentImg} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% <br /> safety of your product. Pathao courier delivers
            your parcels in every corner of Bangladesh right on time.
          </p>
          <div>
            <button className="btn rounded-full btn-active btn-accent">
              Become a Merchant
            </button>
            <button className="btn rounded-full btn-outline btn-success ml-5">
              Earn with Profast Courier
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMarchent;

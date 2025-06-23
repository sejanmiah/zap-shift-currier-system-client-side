import React from 'react';
import { FaBoxOpen, FaMapMarkedAlt, FaTruck, FaCheckCircle } from "react-icons/fa";

const howItWorksData = [
  {
    id: 1,
    icon: <FaBoxOpen className="text-2xl text-[#03373D]" />,
    title: "Order Placed",
    description: "Customer places an order using your website or app."
  },
  {
    id: 2,
    icon: <FaMapMarkedAlt className="text-2xl text-[#03373D]" />,
    title: "Pickup Scheduled",
    description: "Our courier partner picks up the parcel from your location."
  },
  {
    id: 3,
    icon: <FaTruck className="text-2xl text-[#03373D]" />,
    title: "Parcel in Transit",
    description: "We deliver the parcel with real-time tracking."
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-2xl text-[#03373D]" />,
    title: "Successful Delivery",
    description: "Customer receives the parcel safely and confirms delivery."
  }
];
const HowItWorks = () => {
    return (
    <section className="px-5 py-10 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-left text-[#03373D] mb-10">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorksData.map(item => (
          <div
            key={item.id}
            className="p-6 bg-[#F7F7F7] rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-3">
              {item.icon}
              <h3 className="text-xl font-semibold text-[#03373D]">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    );
};

export default HowItWorks;
import React from "react";
import { FaShippingFast, FaGlobe, FaBoxes, FaMoneyBillWave, FaHandshake, FaUndo } from "react-icons/fa";

const serviceData = [
  {
    icon: <FaShippingFast className="text-4xl text-blue-500" />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
  },
  {
    icon: <FaGlobe className="text-4xl text-green-500" />,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
  },
  {
    icon: <FaBoxes className="text-4xl text-purple-500" />,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
  },
  {
    icon: <FaHandshake className="text-4xl text-pink-500" />,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support."
  },
  {
    icon: <FaUndo className="text-4xl text-red-500" />,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
  }
];

const Services = () => {
  return (
    <div className="py-20 px-4 md:px-10 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

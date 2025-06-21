import React from "react";
import benefitsData from "./BenifitsData";


const Benefits = () => {
  return (
    <section className="my-20 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

      <div className="space-y-10">
        {benefitsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider */}
            <div className="w-[2px] h-full bg-gray-300 mx-4 hidden md:block" />

            {/* Text Content */}
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;

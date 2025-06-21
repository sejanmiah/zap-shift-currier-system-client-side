import React from "react";
import Marquee from "react-fast-marquee";
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import start_people from '../../../assets/brands/start-people 1.png'
import start from '../../../assets/brands/start.png'

const ClientCarousel = () => {
 const logos = [amazon,amazon_vector,casio,moonstar,randstad,start_people,start]

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        We've helped thousands of <span className="text-primary">sales teams</span>
      </h2>

      <Marquee direction="left" speed={50} pauseOnHover={true} gradient={true}>
        <div className="flex gap-16 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-5 w-auto object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ClientCarousel;

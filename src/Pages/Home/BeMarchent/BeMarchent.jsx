import React from 'react';
import marchentImg from '../../../assets/Layer_1.png'

const BeMarchent = () => {
    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex w-full justify-between lg:flex-row-reverse">
    <img
      src={marchentImg}
      className="max-w-sm rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div>
      <button className="btn rounded-full btn-active btn-accent">Become a Merchant</button>
      <button className="btn rounded-full btn-outline btn-success ml-5">Earn with Profast Courier</button>      </div>
    </div>
  </div>
</div>
    );
};

export default BeMarchent;
import React from "react";
import bannerImg from './../../assets/banner.png'

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <img
            src= {bannerImg}
            className="max-w-sm rounded-lg"
          />
          <div>
            
            <p className="py-6 font-bold text-4xl">
            Books to freshen up <br /> your bookshelf
            </p>
            <button className="btn bg-[#23BE0A] text-white">Vew The list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

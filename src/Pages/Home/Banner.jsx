import React, { useState } from "react";
import "../../App.css";

const Banner = () => {
  const [image, setImage] = useState(1);

  const changeImage = (number) => {
    setImage(number);
    console.log(number);
  };

  return (
    <div
      className={`relative w-[100%] h-[110vh] md:h-[90vh] lg:h-[110vh] overflow-hidden ${
        image === 1 ? "brown" : "pink"
      }`}
    >
      {image === 1 ? (
        <img
          className="absolute object-cover h-[1200px] top-[-150px] md:top-[50px] lg:top-[-180px] md:-left-20 lg:left-[-150px]"
          src="https://i.ibb.co/mCrdLVS/men.png"
          alt=""
        />
      ) : (
        <img
          className="absolute object-cover h-[1200px] md:bottom-0 lg:top-[-50px] md:left-[-150px] lg:left-[-250px]"
          src="https://i.ibb.co/93ZZMtD/women.png"
          alt=""
        />
      )}
      <div className="absolute top-52 lg:left-10 left-[310px] div-vertical">
        <p className="uppercase text-white/50 font-bold">
          <span className="block mt-12">items</span>best seller
        </p>
      </div>

      <div className="m-0 absolute md:ml-[50%] mt-[90%] ml-[10%] md:mt-[30%] lg:mt-[10%] logo-font">
        <h1 className="lg:text-[80px] text-[50px] text-white">
          {image === 1 ? "Elbow-Patch" : "High Neck"}
        </h1>
        <h1 className="lg:text-[80px] text-[50px] text-white mt-[-25px]">
          {image === 1 ? "Leather Jacket" : "Warm Sweater"}
        </h1>
        <p className="text-white/50">
          Casual line. Short design. 100% suede leather. <br /> Backstitched
          elbow patche.
        </p>
        <div className="mt-5 flex">
          <p
            className={`text-4xl ${
              image === 1 ? "text-amber-500" : "text-pink-700"
            }`}
          >
            $199.00
          </p>
          <p className="text-white mt-auto ml-3 text-xl line-through">
            $250.00
          </p>
        </div>
        <div className="my-3">
          <p className="text-white font-semibold text-sm">CHANGE IMAGE</p>
          <div className="my-5 flex">
            <img
              onClick={() => changeImage(1)}
              className={`w-20 object-cover bg-amber-600/20 mr-3 ${
                image === 1
                  ? "border-2 bg-amber-600/20"
                  : "border-0 bg-pink-500/30"
              }`}
              src="https://i.ibb.co/mCrdLVS/men.png"
              alt=""
            />
            <img
              onClick={() => changeImage(0)}
              className={`w-20 object-cover bg-amber-600/20 mr-3 ${
                image === 0
                  ? "border-2 bg-pink-500/30"
                  : "border-0 bg-amber-600/20"
              }`}
              src="https://i.ibb.co/93ZZMtD/women.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

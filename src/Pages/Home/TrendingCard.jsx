import React from "react";
import { Link } from "react-router-dom";

const TrendingCard = ({ product }) => {
  const { title, details, color } = product;

  return (
    <div
      style={{ backgroundColor: product.background }}
      id={product.item}
      className="carousel-item w-full md:w-[70%] flex flex-col-reverse md:flex-row items-center md:justify-between p-4"
    >
      <div className="z-10">
        <h4 className="text-2xl text-white/40 mb-5 font-bold hidden md:block">
          Trending
        </h4>
        <h1 style={{ color: color }} className="text-5xl logo-font mb-5">
          {title}
        </h1>
        <p className="mb-6 logo-font">{details}</p>
        <Link
          style={{ color: color }}
          className="py-5 text-xl font-bold logo-font uppercase text-white"
        >
          Buy now
        </Link>
      </div>
      <img src={product.picture} className="md:w-[50%]" alt="" />
    </div>
  );
};

export default TrendingCard;

import React, { useState } from "react";
import TrendingCard from "./TrendingCard";

const trending = [
  {
    id: "63ec82b2d6b262b704e593f4",
    item: "item1",
    title: "Denim Jacket- Light Blue",
    picture: "https://i.ibb.co/9HzzJTn/denim.png",
    background: "#8d968c",
    color: "#503a2a",
    details:
      "Discount 30% for all shoes and sneskers. limited time offer, Don't miss oust!",
  },
  {
    id: "63ec82b2c07b3861d19cdcde",
    item: "item2",
    title: "Dip chocolate Artificial Leather belt",
    picture: "https://i.ibb.co/m8K35Kz/belt.png",
    background: "#d8c9b2",
    color: "#2c2c2b",
    details:
      "Discount 30% for all shoes and sneskers. limited time offer, Don't miss oust!",
  },
  {
    id: "63ec82b2a7c072d0b13da6e9",
    item: "item3",
    title: "30% Sale of Sneaker",
    picture: "https://i.ibb.co/jDCmcdH/shoe.png",
    background: "pink",
    color: "#503a2a",
    details:
      "Discount 30% for all shoes and sneskers. limited time offer, Don't miss oust!",
  },
];

const Trending = () => {
  const [number, setNumber] = useState(1);

  const handleNumber = (num) => {
    setNumber(num);
  };

  return (
    <div className="relative">
      <div className="carousel w-full">
        {trending.map((product) => (
          <TrendingCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex absolute bottom-0 left-4 py-2 gap-2">
        <a
          onClick={() => handleNumber(1)}
          href="#item1"
          className={`w-4 text-xs rounded-full ${
            number === 1 ? "bg-white" : "bg-white/50 w-3"
          } text-transparent`}
          alt=""
        >
          0
        </a>
        <a
          onClick={() => handleNumber(2)}
          href="#item2"
          className={`w-4 text-xs rounded-full ${
            number === 2 ? "bg-white" : "bg-white/50 w-3"
          } text-transparent`}
          alt=""
        >
          0
        </a>
        <a
          onClick={() => handleNumber(3)}
          href="#item3"
          className={`w-4 text-xs rounded-full ${
            number === 3 ? "bg-white" : "bg-white/50 w-3"
          } text-transparent`}
          alt=""
        >
          0
        </a>
      </div>
    </div>
  );
};

export default Trending;

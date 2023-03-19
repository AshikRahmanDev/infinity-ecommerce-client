import React from "react";

const ReviewCard = ({ data }) => {
  const { name, review } = data;
  return (
    <div className="border-b border-gray-400/30">
      {" "}
      {/* user   */}
      <div className="flex">
        <div className="avatar">
          <div className="w-5 rounded">
            <img
              src="https://i.ibb.co/Z2P4t86/pngwing-com-3.png"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <h1 className="ml-3 text-[12px]">{name}</h1>
      </div>
      {/* review */}
      <div className="py-3">
        <p className="text-[12px] text-gray-500">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

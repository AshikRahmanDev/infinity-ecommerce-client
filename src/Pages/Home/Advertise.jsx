import React, { useEffect, useState } from "react";

const Advertise = () => {
  const [time, setTime] = useState(8 * 24 * 60 * 60 * 1000);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const timer = (milesceonds) => {
    let total_seconds = parseInt(Math.floor(milesceonds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    return (
      <div className="flex logo-font gap-4 my-5 md:my-7">
        {/* days */}
        <div className="flex flex-col items-center">
          <p className="text-5xl">0{days}</p>
          <p>days</p>
        </div>
        {/* hours */}
        <div className="flex flex-col items-center">
          <p className="text-5xl">{hours}</p>
          <p>hours</p>
        </div>
        {/* minutes */}
        <div className="flex flex-col items-center">
          <p className="text-5xl">{minutes}</p>
          <p>minutes</p>
        </div>
        {/* seconds */}
        <div className="flex flex-col items-center">
          <p className="text-5xl">{seconds}</p>
          <p>seconds</p>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#f1f0ee" }}
      className="relative flex flex-col-reverse md:flex-row  md:text-secondary text-black lg:text-black"
    >
      <img
        src="https://i.ibb.co/zmFDQvD/shallow-focus-shot-african-american-female-with-tattoos-wearing-purple-shirt-sunglasses-181624-41271.png"
        alt=""
      />
      <div className="md:absolute flex flex-col items-center right-48 top-40">
        <h1 className="text-2xl md:text-4xl logo-font">
          Poplin top with ruffle .
        </h1>
        {timer(time)}
        <button className="btn bg-transparent border-black btn-xs md:btn-sm lowercase text-black rounded-sm">
          visit shop
        </button>
      </div>
    </div>
  );
};

export default Advertise;

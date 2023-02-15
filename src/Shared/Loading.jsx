import React from "react";
import { SkewLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{ backgroundColor: "#8d968c" }}
      className="w-full flex items-center justify-center h-[100vh]"
    >
      <SkewLoader size={70} color="#88522c" />
    </div>
  );
};

export default Loading;

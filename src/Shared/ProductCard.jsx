import React from "react";
import "../App.css";

const ProductCard = ({ product }) => {
  const { picture, title, price } = product;
  const { img1 } = picture;
  return (
    <div className="w-[250px] mx-auto">
      <div className="img-container h-[300px] w-[250px]">
        <img
          className="product-img object-cover"
          style={{ backgroundColor: "#f1f0ee" }}
          src={img1}
          alt=""
        />
      </div>
      <div>
        <h4 className="my-2 text-sm logo-font font-semibold">{title}</h4>
        <p className="logo-font text-red-500">$ {price}.00</p>
      </div>
    </div>
  );
};

// <div className="carousel w-full">
// {/* slider1 */}
// <div id="slide1" className="carousel-item relative w-full">
//   <img
//     className="h-[300px] object-cover"
//     style={{ backgroundColor: "#f1f0ee" }}
//     src={img1}
//     alt=""
//   />
//   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//     <a
//       href="#slide3"
//       className="btn bg-white/30 hover:bg-white/60 border-0"
//     >
//       ❮
//     </a>
//     <a
//       href="#slide2"
//       className="btn bg-white/30 hover:bg-white/60 border-0"
//     >
//       ❯
//     </a>
//   </div>
// </div>
// {/* slider2 */}
// <div id="slide2" className="carousel-item relative w-full">
//   <img
//     className="h-[300px] object-cover"
//     style={{ backgroundColor: "#f1f0ee" }}
//     src={img2}
//     alt=""
//   />
//   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//     <a
//       href="#slide1"
//       className="btn bg-white/30 hover:bg-white/60 border-0"
//     >
//       ❮
//     </a>
//     <a
//       href="#slide3"
//       className="btn bg-white/30 hover:bg-white/60 border-0"
//     >
//       ❯
//     </a>
//   </div>
// </div>
// {/* slider3 */}
// <div id="slide3" className="carousel-item relative w-full">
//   <img
//     className="h-[300px] object-cover"
//     style={{ backgroundColor: "#f1f0ee" }}
//     src={img3}
//     alt=""
//   />
//   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//     <a
//       href="#slide2"
//       className="btn bg-white/30 hover:bg-white/60 border-0"
//     >
//       ❮
//     </a>
//     <a
//       href="#slide1"
//       className="btn bg-white/30 hover:bg-white/60 border-0"
//     >
//       ❯
//     </a>
//   </div>
// </div>
// </div>

export default ProductCard;

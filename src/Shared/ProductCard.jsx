import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineViewInAr } from "react-icons/md";
import "../App.css";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const { picture, title, price } = product;
  const { img1 } = picture;
  return (
    <div>
      <div className="w-[290px] mx-auto">
        <div className="img-container h-[300px] w-[290px]">
          <img
            className="product-img object-cover"
            style={{ backgroundColor: "#f1f0ee" }}
            src={img1}
            alt=""
          />
          <div className="flex items-center justify-between visit absolute h-[50px] bg-white w-full">
            <Link className="flex mx-1 items-center uppercase logo-font text-[13px] text-gray-400">
              <AiOutlineHeart className="mr-2" /> add to wishlist
            </Link>
            <span className="mx-2 text-gray-400">|</span>
            <label
              htmlFor="product-modal"
              className="flex h-full mx-1 items-center uppercase logo-font text-[13px] text-gray-400"
            >
              <MdOutlineViewInAr className="mr-2" /> Quick view
            </label>
          </div>
        </div>
        <div>
          <Link className="my-2 text-sm logo-font font-semibold">{title}</Link>
          <p className="logo-font text-red-500 mb-2">$ {price}.00</p>
          <Link className="uppercase logo-font block w-[90%] mx-auto text-center text-gray-400 border border-gray-400 py-2">
            add to cart
          </Link>
        </div>
      </div>
      <ProductModal />
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

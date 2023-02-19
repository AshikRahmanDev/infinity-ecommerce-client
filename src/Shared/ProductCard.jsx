import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineViewInAr } from "react-icons/md";
import "../App.css";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const { picture, title, price } = product;
  const [modalData, setModalData] = useState("");
  const { img1 } = picture;

  const handleModal = (p) => {
    setModalData(p);
  };
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
              onClick={() => handleModal(product)}
              className="flex h-full mx-1 items-center uppercase logo-font text-[13px] text-gray-400"
            >
              <MdOutlineViewInAr className="mr-2" /> Quick view
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="product-modal"
            className="my-2 text-sm logo-font font-semibold"
          >
            {title}
          </label>
          <p className="logo-font text-red-500 mb-2">$ {price}.00</p>
          <Link className="uppercase logo-font block w-[90%] mx-auto text-center text-gray-400 border border-gray-400 py-2">
            add to cart
          </Link>
        </div>
      </div>
      {modalData && (
        <ProductModal setModalData={setModalData} modalData={modalData} />
      )}
    </div>
  );
};

export default ProductCard;

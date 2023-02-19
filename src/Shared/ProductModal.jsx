import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductModal = ({ modalData, setModalData }) => {
  const [count, setCount] = useState(1);
  const { brand, title, categories, details, price, picture, tags } = modalData;
  const { img1, img2, img3 } = picture;

  const handleCountPlus = () => {
    setCount(count + 1);
  };
  const handleCountMinus = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="relative">
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal rouded-0">
        <div className="modal-box p-0 w-11/12 max-w-7xl rounded-none">
          <div className="md:flex">
            <div
              style={{ backgroundColor: "#f1f0ee" }}
              className="md:w-[50%] md:h-[100%]"
            >
              <div className="carousel w-full md:h-[87vh]">
                {/* slider1 */}
                <div
                  id="slide1"
                  className="carousel-item relative w-full h-[100%]"
                >
                  <img
                    className="h-[100%] object-cover"
                    style={{ backgroundColor: "#f1f0ee" }}
                    src={img1}
                    alt=""
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide3"
                      className="btn bg-white/30 hover:bg-white/60 border-0"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide2"
                      className="btn bg-white/30 hover:bg-white/60 border-0"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                {/* slider2 */}
                <div
                  id="slide2"
                  className="carousel-item relative w-full h-[100%]"
                >
                  <img
                    className="h-[100%] object-cover"
                    style={{ backgroundColor: "#f1f0ee" }}
                    src={img2}
                    alt=""
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide1"
                      className="btn bg-white/30 hover:bg-white/60 border-0"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide3"
                      className="btn bg-white/30 hover:bg-white/60 border-0"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                {/* slider3 */}
                <div
                  id="slide3"
                  className="carousel-item relative w-full h-[100%]"
                >
                  <img
                    className="h-[100%] object-cover"
                    style={{ backgroundColor: "#f1f0ee" }}
                    src={img3}
                    alt=""
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide2"
                      className="btn bg-white/30 hover:bg-white/60 border-0"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide1"
                      className="btn bg-white/30 hover:bg-white/60 border-0"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* details  */}
            <div className="p-12 md:w-[50%]">
              <h1 className="text-xl font-semibold">{title}</h1>
              <p className="my-3 text-2xl text-red-500">
                $ {price}.90{" "}
                <span className="text-gray-400 text-lg line-through">
                  $159.00
                </span>
              </p>
              <p className="my-3 text-gray-500">
                {details} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Facilis, id.
              </p>
              {/* buttons  */}
              <div className="flex mt-12">
                {/* amount */}
                <div className="flex w-28 border justify-around py-1">
                  <button
                    onClick={() => handleCountMinus()}
                    className="text-xl text-gray-400"
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    onClick={() => handleCountPlus()}
                    className="text-xl text-gray-400"
                  >
                    +
                  </button>
                </div>
                <button className="uppercase font-mono mx-5 bg-orange-600 w-[250px] text-white font-semibold py-1">
                  add to cart
                </button>
              </div>
              {/* wishlist */}
              <button className="flex items-center text-md font-serif my-4 uppercase">
                <AiOutlineHeart className="mr-2" />
                add to wishlist
              </button>
              <hr />
              {/* table */}
              <div className="overflow-x-auto my-5">
                <table className=" w-full">
                  <tbody>
                    <tr className="my-2">
                      <td className="uppercase text-gray-500 text-[13px] font-semibold">
                        categories
                      </td>
                      <td className="text-[14px]">{categories}</td>
                    </tr>
                    <tr className="my-2">
                      <td className="uppercase text-gray-500 text-[13px] font-semibold">
                        tags
                      </td>
                      <td className="text-[14px]">{tags}</td>
                    </tr>
                    <tr className="my-2">
                      <td className="uppercase text-gray-500 text-[13px] font-semibold">
                        brand
                      </td>
                      <td className="text-[14px]">{brand}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className="absolute top-1 right-3 text-xl font-bold"
                onClick={() => setModalData("")}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

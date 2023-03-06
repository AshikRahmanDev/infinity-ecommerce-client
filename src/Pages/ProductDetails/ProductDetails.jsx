import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { MdCompareArrows } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { AuthContext } from "../../Context/AuthProvider";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const { brand, title, categories, price, picture, tags, _id } = product;
  const { img1, img2, img3 } = picture;
  const [display, setDisplay] = useState(img1);
  const navigate = useNavigate();

  // handle add to cart
  const handleAddToCart = () => {
    const cartProduct = {
      brand,
      title,
      price,
      img1,
      amount: count,
      id: _id,
    };
    if (user?.email) {
      fetch(`http://localhost:5000/addCart/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      navigate("/main/login");
    }
  };

  // handle count
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
    <div className="md:flex mt-7 w-[90%] md:w-[80%] mx-auto">
      {/* images */}
      <div className="">
        <img
          className="w-[550px] h-[550px] object-cover"
          style={{ backgroundColor: "#f1f0ee" }}
          src={display}
          alt=""
        />
        {/* image change btns */}
        <div className="flex mt-5 gap-6">
          <img
            onClick={() => setDisplay(img1)}
            style={{ backgroundColor: "#f1f0ee" }}
            className="w-[80px] h-[100px] object-cover"
            src={img1}
            alt=""
          />
          <img
            onClick={() => setDisplay(img2)}
            style={{ backgroundColor: "#f1f0ee" }}
            className="w-[80px] h-[100px] object-cover"
            src={img2}
            alt=""
          />
          <img
            onClick={() => setDisplay(img3)}
            style={{ backgroundColor: "#f1f0ee" }}
            className="w-[80px] h-[100px] object-cover"
            src={img3}
            alt=""
          />
        </div>
      </div>
      {/* details */}
      <div className="md:px-16 md:w-[50%]">
        <p className="uppercase text-gray-400/50 text-[12px]">washable</p>
        <h1 className="text-2xl logo-font mt-4">{title}</h1>
        {/* rating */}
        <div className="flex my-2">
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-gray-300" />
        </div>
        <p className="text-3xl logo-font my-3">$ {price}</p>
        <p className="flex items-center text-gray-500 text-[13px]">
          <BiStore />
          <span className="mx-1">
            Status: <span className="text-green-400">in Stock</span>
          </span>
        </p>
        <hr className="my-5" />
        {/* buy section */}
        <select className="select border border-gray-400 rounded-none w-full">
          <option disabled selected>
            Choose your size
          </option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <div className="my-3">
          <div className="flex gap-4">
            {/* amount */}
            <div className="flex w-28 border border-gray-400 justify-around py-1">
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
            {/* add to cart */}
            <button
              onClick={() => handleAddToCart()}
              className="uppercase text-[15px] font-mono w-full border border-gray-400 hover:border-black hover:bg-black hover:text-white py-1"
            >
              add to cart
            </button>
          </div>
          <button
            style={{ backgroundColor: "#928656" }}
            className="btn btn-block border-0 text-white bg-primary rounded-none my-3"
          >
            buy now
          </button>
          {/* ..... */}
          <div className="flex items-center mt-3">
            <Link className="flex items-center uppercase text-[13px]">
              <AiOutlineHeart className="mr-1" /> add to wishlist
            </Link>
            <span className="mx-4">|</span>
            <Link className="flex items-center uppercase text-[13px]">
              <MdCompareArrows className="mr-1" /> compare
            </Link>
            <span className="mx-4">|</span>
            <Link className="flex items-center uppercase text-[13px]">
              <FaTshirt className="mr-1" /> add to wishlist
            </Link>
          </div>
          <hr className="my-5" />
          {/* table */}
          <div className="overflow-x-auto my-5">
            <table className=" w-full">
              <tbody>
                <tr className="my-2">
                  <td className="uppercase text-gray-500 text-[11px]">
                    categories
                  </td>
                  <td className="text-[12px]">{categories}</td>
                </tr>
                <tr className="my-2">
                  <td className="uppercase text-gray-500 text-[11px]">tags</td>
                  <td className="text-[12px]">{tags}</td>
                </tr>
                <tr className="my-2">
                  <td className="uppercase text-gray-500 text-[11px]">brand</td>
                  <td className="text-[12px]">{brand}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* socila */}
          <div className="flex items-center gap-5 text-3xl">
            <CiFacebook />
            <CiInstagram />
            <CiTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData()[0];
  console.log(product);
  const { title, img1, brand, price, amount } = product;
  return (
    <div className="w-[90%] lg:w-[75%] mx-auto mt-6 p-2">
      <h1 className="text-3xl text-center logo-font">Checkout</h1>
      <div className="my-5 lg:flex justify-between w-[100%] gap-10">
        {/* details form */}
        <div className="logo-font lg:w-[50%]">
          <h4 className="text-md">Billing Detail</h4>
          {/* name */}
          <div className="my-5">
            {/* first name */}
            <input
              className="border-b py-2 px-3 w-full text-[13px] mr-5"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              required
            />
          </div>
          {/* street Address */}
          <div className="my-5">
            <input
              className="border-b py-2 px-3 w-full text-[13px] mr-5"
              type="text"
              placeholder="Street Address *"
              required
            />
          </div>
          {/* Town/city */}
          <div className="my-5">
            <input
              className="border-b py-2 px-3 w-full text-[13px] mr-5"
              type="text"
              placeholder="Town / City *"
              required
            />
          </div>
          {/* number */}
          <div className="my-5">
            <input
              className="border-b py-2 px-3 w-full text-[13px] mr-5"
              type="number"
              placeholder="Phone Number *"
              required
            />
          </div>
          {/* email */}
          <div className="my-5">
            <input
              className="border-b py-2 px-3 w-full text-[13px] mr-5"
              type="email"
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
          {/* note */}
          <div className="my-5">
            <input
              className="border-b py-2 pb-10 px-3 w-full text-[13px] mr-5"
              type="text"
              placeholder="Order Note (optional)"
              required
            />
          </div>
        </div>
        {/* checkout product details */}
        <div className="p-4 lg:w-[40%] bg-gray-300/30">
          <h4 className="logo-font pb-3 border-b border-gray-400/40">Order</h4>

          <div className="flex items-center justify-between space-x-3 py-5 border-b border-gray-400/40">
            <div className="flex items-center">
              <div className="avatar mr-2">
                <div className="mask w-12 h-12">
                  <img
                    src={img1}
                    className="bg-gray-400/30"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="text-[13px] logo-font">
                  {amount}x {title}
                </div>
                <p className="text-[12px] logo-font">brand: {brand}</p>
              </div>
            </div>
            <div>
              <p className="logo-font">$ {price}</p>
            </div>
          </div>
          <div>
            {/* subtotal */}
            <div className="flex logo-font justify-between mt-4 text-[13px]">
              <p className="text-gray-500">Subtotal</p>
              <p>$ {price * amount}.00</p>
            </div>
            {/* shiping fee */}
            <div className="flex logo-font justify-between my-2 pb-5 text-[13px] border-b border-gray-400/40">
              <p className="text-gray-500">Standard Shipping</p>
              <p className="text-red-500">$ 20.00</p>
            </div>
            {/* total */}
            <div className="flex logo-font justify-between mt-4 text-xl pb-5 border-b border-gray-400/40">
              <h4>TOTAL</h4>
              <p>$ {price * amount + 20}.00</p>
            </div>
          </div>
          {/* payment system */}
          <div className="text-[12px] logo-font my-5 pb-4 border-b border-gray-400/40">
            <div className="pb-2">
              <label className="radio border-0">
                <input
                  style={{ accentColor: "#928656" }}
                  name="radio"
                  type="radio"
                  checked
                />
                <span className="mx-2">Paypal</span>
              </label>
            </div>
            <div>
              <label className="radio border-0">
                <input
                  style={{ accentColor: "#928656" }}
                  name="radio"
                  type="radio"
                />
                <span className="mx-2">Cash On Delivery</span>
              </label>
            </div>
          </div>

          {/* privicy policiy */}
          <div className="p-3">
            <p className="text-[11px] text-gray-500">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our <span className="underline">privacy policy</span>
              .
            </p>
          </div>
          {/* order btn */}
          <div className="text-center">
            <button className="btn btn-primary btn-wide rounded-sm text-white my-5">
              place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

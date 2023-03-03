import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user]);
  console.log(cart);
  return (
    <div className="my-7">
      <h1 className="text-center text-4xl logo-font">Shopping Cart</h1>
      {/* cart table */}
      <div className="overflow-x-auto w-[70%] mx-auto mt-5">
        <table className="table w-full">
          {/* head */}
          <thead className="border-b">
            <tr>
              <th className="font-normal py-3 text-gray-400 text-[13px] logo-font bg-white">
                PRODUCT
              </th>
              <th className="font-normal py-3 text-gray-400 text-[13px] logo-font bg-white">
                PRICE
              </th>
              <th className="font-normal py-3 text-gray-400 text-[13px] logo-font bg-white">
                QTY
              </th>
              <th className="font-normal py-3 text-gray-400 text-[13px] logo-font bg-white">
                SUBTOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;

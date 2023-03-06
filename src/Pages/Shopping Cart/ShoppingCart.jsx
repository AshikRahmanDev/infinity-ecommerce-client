import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/AuthProvider";
import TabelItem from "./TabelItem";

const ShoppingCart = () => {
  const { user } = useContext(AuthContext);

  // fetch with query
  const getCarts = async () => {
    const res = await fetch(`http://localhost:5000/cart/${user?.email}`);
    return res.json();
  };
  const { data: cart, isLoading, refetch } = useQuery("carts", getCarts);
  return (
    <div className="my-7">
      <h1 className="text-center text-4xl logo-font">Shopping Cart</h1>
      {/* if cart emty */}
      {!cart && (
        <>
          <h2 className="logo-font text-center mt-10 text-[20px]">
            No result found
          </h2>
        </>
      )}
      {!isLoading && cart?.length > 0 && (
        <>
          <div className="overflow-x-auto md:w-[70%] mx-auto mt-5">
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
                  <th className="font-normal py-3 text-gray-400 text-[13px] logo-font bg-white"></th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  cart.map((item) => (
                    <TabelItem key={item.id} refetch={refetch} item={item} />
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

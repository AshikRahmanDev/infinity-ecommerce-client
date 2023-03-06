import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../Shared/ProductCard";

const AllProducts = () => {
  const getProducts = async () => {
    const res = fetch("http://localhost:5000/products");
    return (await res).json();
  };
  const { data: products, isLoading } = useQuery("getproducts", getProducts);
  console.log(products);
  return (
    <div className="w-[96%] mx-auto">
      <h1 className="logo-font text-xl md:text-2xl my-5">
        Complete Your Outfit
      </h1>
      {/* products */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {!isLoading &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;

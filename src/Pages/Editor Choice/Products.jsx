import React, { useEffect, useState } from "react";
import ProductCard from "../../Shared/ProductCard";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="my-12 w-[92%] mx-auto">
      <div className="flex mb-10">
        <h4 className="text-lg md:text-2xl mr-7 logo-font">Editor's Pick</h4>
        <h4 className="text-lg md:text-2xl mr-7 logo-font text-black/50">
          New In
        </h4>
        <h4 className="text-lg md:text-2xl mr-7 logo-font text-black/50">
          Trending
        </h4>
      </div>
      {/* products */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

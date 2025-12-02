import React from "react";

const ProductCard = (product) => {
  const { products } = product;
  return (
    <div className="border-2 rounded-xl border-white w-[300px] p-2">
      <div>
        <img
          className="h-[200px] w-full object-cover rounded-xl"
          src={products.thumbnail}
          alt=""
        />
      </div>
      <div>
        <div className="flex bg-red-300 justify-between mt-2 p-1 rounded">
          <div>$ {products.price}</div>
          <div>{products.rating}</div>
        </div>
        <div className="text-white text-xl mt-2 font-semibold">
          <p>{products.title}</p>
        </div>
        <div className="text-white text-sm mt-2 font-semibold">
          <p>{products.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

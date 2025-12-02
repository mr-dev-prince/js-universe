import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Loader from "../components/Loader";
import { useProduct } from "../hooks/useProduct";
// https://api.freeapi.app/api/v1/public/randomproducts

//
// fetch data from api
// use [ useState ] to hold data
// use [ useEffect ] to load data on reload

// write a function to load data -> fetch | axios [ handles api requests ]
// show on UI
// handle response

// component \ props |

const ProductListing = () => {
  const { products, loading } = useProduct(
    "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=shoes"
  );

  if (loading) {
    return <Loader />; // reusable component
  }

  return (
    <div className="h-screen bg-emerald-900 flex flex-col justify-center items-center">
      <div className="flex gap-4 flex-wrap w-full justify-center">
        {products && products.map((p) => <ProductCard products={p} />)}
      </div>
    </div>
  );
};

export default ProductListing;

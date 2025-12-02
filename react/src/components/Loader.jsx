import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="h-screen bg-emerald-900 flex flex-col justify-center items-center">
      <AiOutlineLoading3Quarters
        className="animate-spin"
        size={36}
        color="white"
      />
    </div>
  );
};

export default Loader;

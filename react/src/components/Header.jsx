import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  // useState hook
  const [name, setName] = useState("Vision Placement");

  const handleNameChange = () => {
    setName((prev) =>
      prev == "Mission Placement" ? "Vision Placement" : "Mission Placement"
    );
  };

  // useEffect(() => {
  //   alert("Name Changed");
  // }, [name]);

  return (
    <div className={`flex justify-between p-3 border-b bg-blue-500 text-white`}>
      {/* left box */}
      <div className="flex gap-6 items-center">
        <div>
          <RxHamburgerMenu size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-serif">{name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleNameChange}>
            <IoSearch size={28} />
          </button>
          <input
            type="text"
            placeholder="Search an article"
            className="outline-none"
          />
        </div>
      </div>
      {/* middle box */}
      <div className="flex gap-10 items-center">
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/services"}>Services</Link>
      </div>
      {/* right box */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:text-black">
          <BsPencilSquare size={24} />
          <p>Write</p>
        </div>
        <div>
          <FaRegBell size={24} />
        </div>
        <div>
          <FaRegUserCircle size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;

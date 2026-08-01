import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-100 sticky top-0 z-50">
      <div className="commonPadding py-6 flex items-center justify-between gap-6">
        <Link to={"/"} className="font-bold italic">
          Food Corner
        </Link>
        <Link to={"/cart"} className="relative pr-4">
          <p className="absolute right-2 -top-2 z-10 rounded-full text-[8px] bg-black text-white p-1 px-1.5">
            2
          </p>
          <FiShoppingCart size={24} className="-z-1 " />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

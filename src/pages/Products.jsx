import React from "react";
import { data } from "../data";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { slugify } from "../utils/sligify";

const Products = () => {
  return (
    <div className="commonPadding grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {data.map((res, i) => (
        <Link
          to={`${slugify(res.url)}`}
          className="relative flex flex-col gap-3 "
          key={i}
        >
          <img
            src={
              res.image ||
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop"
            }
            alt="restaurant"
            className="w-full h-full max-h-[250px] object-center object-cover select-none pointer-events-none rounded-[12px] overflow-hidden "
          />
          <div className="absolute left-4 top-4 bg-white rounded-full px-3 p-2 text-[12px] flex items-center gap-1">
            <TiStarFullOutline size={14} className="text-[#FFB300]" />

            <p className="font-medium">{res?.rating}</p>
          </div>
          <div>
            <p className="font-medium text-[18px]">{res.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;

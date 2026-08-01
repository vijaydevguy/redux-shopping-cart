import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const Product = () => {
  const { id } = useParams();

  const product = data.filter((f) => f.url == id);
  // console.log(product);

  return (
    <div className="commonPadding grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {product[0].menu.map((item, i) => (
        <div key={i}>
          <img
            src={item.image}
            alt="restaurant"
            className="w-full h-full max-h-[250px] object-center object-cover select-none pointer-events-none rounded-[12px] overflow-hidden "
          />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Product;

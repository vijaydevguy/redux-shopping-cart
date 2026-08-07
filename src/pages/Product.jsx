import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { cartItems } from "../redux/selectors/cartSelectors";

const Product = () => {
  const { id } = useParams();

  const product = data.filter((f) => f.url == id);
  // console.log(product);

  const dispatch = useDispatch();
  const itemsInCart = useSelector(cartItems);
  // console.log(id, "testResID");

  return (
    <div className="commonPadding grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 gap-y-5">
      {product[0].menu.map((item, i) => {
        const isAdded = itemsInCart.some((cartItem) => cartItem.id === item.id);
        return (
          <div key={i} className="flex flex-col gap-2">
            <img
              src={item.image}
              alt="restaurant"
              className="w-full h-full max-h-[250px] object-center object-cover select-none pointer-events-none rounded-[12px] overflow-hidden "
            />

            <div className="flex justify-between gap-2 items-center">
              <h2>{item.name}</h2>
              <button
                className={`cursor-pointer underline ${isAdded ? "text-gray-500 no-underline cursor-not-allowed" : ""}`}
                disabled={isAdded}
                onClick={() =>
                  dispatch(addToCart({ restaurantId: id, item: item }))
                }
              >
                {isAdded ? "Added" : "Add"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

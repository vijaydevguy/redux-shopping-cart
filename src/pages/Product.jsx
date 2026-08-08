import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  editCartItem,
  removeCartItem,
} from "../redux/slices/cartSlice";
import { cartItems, restaurantId } from "../redux/selectors/cartSelectors";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { RiDeleteBin7Line } from "react-icons/ri";

const Product = () => {
  const { id } = useParams();

  const product = data.filter((f) => f.url == id);
  // console.log(product);

  const dispatch = useDispatch();
  const itemsInCart = useSelector(cartItems);
  // const resId = useSelector(restaurantId);
  // console.log(id, "testResID");

  return (
    <div className="commonPadding grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 gap-y-5">
      {product[0].menu.map((item, i) => {
        const cartItem = itemsInCart.find(
          (cartItem) => cartItem.id === item.id,
        );
        const isAdded = !!cartItem;
        return (
          <div key={i} className="flex flex-col gap-2">
            <div className="w-full h-full relative">
              <div
                className={`absolute right-4 top-4 bg-white rounded-md shadow-md text-[14px] flex items-center overflow-hidden w-[80px] justify-center`}
              >
                {!isAdded ? (
                  <button
                    onClick={() =>
                      dispatch(addToCart({ restaurantId: id, item: item }))
                    }
                    className="hover:cursor-pointer hover:bg-gray-100 py-1.5 font-medium w-full text-center"
                  >
                    Add
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        dispatch(
                          removeCartItem({ restaurantId: id, item, qty: 1 }),
                        )
                      }
                      className="hover:cursor-pointer hover:bg-gray-100 h-8 w-8 flex items-center justify-center text-[20px] flex-shrink-0"
                    >
                      {cartItem.qty <= 1 ? (
                        <RiDeleteBin7Line size={14} className="text-red-600" />
                      ) : (
                        <IoIosRemove size={16} />
                      )}
                    </button>
                    <span className="w-6 text-center font-medium flex-shrink-0">
                      {cartItem.qty}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          editCartItem({ restaurantId: id, item, qty: 1 }),
                        )
                      }
                      className="hover:cursor-pointer hover:bg-gray-100 h-8 w-8 flex items-center justify-center text-[20px] flex-shrink-0"
                    >
                      <IoIosAdd size={16} />
                    </button>
                  </>
                )}
              </div>
              <img
                src={item.image}
                alt="restaurant"
                className="w-full h-full max-h-[250px] object-center object-cover select-none pointer-events-none rounded-[12px] overflow-hidden "
              />
            </div>

            <div className="flex justify-between gap-2 items-center">
              <h2>{item.name}</h2>
              <p className="font-bold">₹ {item.price}</p>
              {/* <button
                className={`cursor-pointer underline ${isAdded ? "text-gray-500 no-underline cursor-not-allowed" : ""}`}
                disabled={isAdded}
                onClick={() =>
                  dispatch(addToCart({ restaurantId: id, item: item }))
                }
              >
                {isAdded ? "Added" : "Add"}
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

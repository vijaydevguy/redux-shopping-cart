import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, restaurantId } from "../redux/selectors/cartSelectors";
import { data } from "../data";
import QtyBtn from "../components/QtyBtn";
import {
  clearCart,
  addToCart,
  removeCartItem,
} from "../redux/slices/cartSlice";
import cart from "../assets/emptycart.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Items = useSelector(cartItems);
  const Id = useSelector(restaurantId);

  // console.log(Items, "testCartItems");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="commonPadding flex flex-col gap-5">
      <div className="flex justify-between items-center gap-5">
        <h2 className="font-semibold text-[20px]">Cart</h2>
        <button
          className="text-red-600 text-[18px] cursor-pointer hover:underline disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={() => dispatch(clearCart())}
          disabled={Items.length <= 0}
        >
          clear cart
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {Items.length <= 0 && (
          <div className="flex flex-col gap-4 items-center justify-center">
            <img src={cart} alt={"img"} className="w-32 object-center" />
            <button
              onClick={() => navigate("/")}
              className="rounded-full border border-gray-500 px-4 py-2 cursor-pointer text-[12px]"
            >
              Shop
            </button>
          </div>
        )}

        {Items.length >= 1 &&
          Items.map((item, i) => (
            <div key={i}>
              <div className="flex flex-row  gap-8 items-center ">
                <img
                  src={item.image}
                  alt="img"
                  className="w-[100px] h-[100px] rounded-sm object-cover object-center"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-[18px]">{item.name}</h1>
                  <p className="text-[12px]">
                    Rs.{" "}
                    <span className="font-medium text-[16px]">
                      {item.price}
                    </span>{" "}
                  </p>
                  {/* <p>Qty:{item.qty}</p> */}
                  <QtyBtn qty={item.qty} item={item} restaurantId={Id} />
                </div>
              </div>
              <hr className="text-gray-100 mt-4" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;

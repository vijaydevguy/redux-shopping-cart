import React from "react";
import { useSelector } from "react-redux";
import { cartItems } from "../redux/selectors/cartSelectors";
import { data } from "../data";

const Cart = () => {
  const Items = useSelector(cartItems);

  console.log(Items, "testCartItems");

  return (
    <div className="commonPadding flex flex-col gap-5">
      <h2>Cart</h2>
      <div className="flex flex-col gap-5">
        {Items.map((item, i) => (
          <div
            key={i}
            className="flex lg:flex-row flex-col gap-5 items-center justify-between"
          >
            {/* left */}
            <div className="flex flex-row gap-5 items-start">
              <img
                src={item.image}
                alt="img"
                className="w-[120px] h-[120px] rounded-sm"
              />
              <div>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <p>Qty:{item.qty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

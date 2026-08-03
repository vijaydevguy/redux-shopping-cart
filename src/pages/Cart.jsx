import React from "react";
import { useSelector } from "react-redux";
import { cartItems } from "../redux/selectors/cartSelectors";
import { data } from "../data";
import QtyBtn from "../components/QtyBtn";

const Cart = () => {
  const Items = useSelector(cartItems);

  // console.log(Items, "testCartItems");

  return (
    <div className="commonPadding flex flex-col gap-5">
      <h2 className="font-semibold text-[20px]">Cart</h2>
      <div className="flex flex-col gap-5">
        {Items.map((item, i) => (
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
                <QtyBtn qty={item.qty} item={item} />
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

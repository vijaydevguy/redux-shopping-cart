import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../redux/store";
import { cartCount } from "../redux/selectors/cartSelectors";

const Navbar = () => {
  // const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems, "testCartItems");

  // const cartCnt = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // above code i moved due to dry principle and best practices

  const cartCnt = useSelector(cartCount);

  return (
    <div className="bg-gray-100 sticky top-0 z-50">
      <div className="commonPadding py-6 flex items-center justify-between gap-6">
        <Link to={"/"} className="font-bold italic">
          Food Corner
        </Link>
        <Link to={"/cart"} className="relative pr-4">
          <p className="absolute right-2 -top-2 z-10 rounded-full text-[8px] bg-black text-white p-1 px-1.5">
            {cartCnt}
          </p>
          <FiShoppingCart size={24} className="-z-1 " />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

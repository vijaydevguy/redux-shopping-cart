import React from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const QtyBtn = ({ qty = 0, item }) => {
  return (
    <div className="rounded-full overflow-hidden  flex items-center border border-gray-300 w-fit">
      <button className="hover:cursor-pointer hover:bg-gray-100 h-8 w-8 flex items-center justify-center text-[20px]">
        <IoIosRemove />
      </button>
      <p className="border-x-1 px-3 border-gray-200 select-none pointer-events-none">
        {qty}
      </p>
      <button className="hover:cursor-pointer hover:bg-gray-100 h-8 w-8 flex items-center justify-center text-[20px]">
        <IoIosAdd />
      </button>
    </div>
  );
};

export default QtyBtn;

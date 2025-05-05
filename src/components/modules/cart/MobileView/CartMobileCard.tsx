import { useCartContext } from "@/src/contexts/CartContextProvider";
import { TCartContext, TCartItemProp } from "@/src/types";
import { toTitleCase } from "@/src/utils/toTitleCase";
import Image from "next/image";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartMobileCard = ({ item }: TCartItemProp) => {
  const { handleEditQty, handleDeleteCartItem } =
    useCartContext() as TCartContext;

  return (
    <div className="text-[#808080] text-base p-4 space-y-2 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <Image
          width={80}
          height={80}
          src={item?.image}
          alt="Cart Item Image"
          className="bg-gray-100 size-16 p-[2px] rounded-[10px]"
        ></Image>

        <p className="flex-1 font-semibold">{toTitleCase(item?.name)}</p>
      </div>

      <div className=" bg-[#9b9b9b2f] flex items-center text-center rounded-full">
        <p className="flex-1">${item?.price}</p>

        <div className="flex-1 flex justify-center items-center gap-4">
          <p className="">{item?.qty}</p>
          <div className="text-2xl">
            <IoMdArrowDropup
              className="hover:text-green-500"
              onClick={() => handleEditQty(1, item)}
            />
            <IoMdArrowDropdown
              className="hover:text-red-500"
              onClick={() => handleEditQty(-1, item)}
            />
          </div>
        </div>

        <p className="flex-1">${(item?.price * item?.qty).toFixed(2)}</p>

        <p className="flex-1">
          <button
            className="btn-style-icon-only hover:bg-red-100 text-2xl sm:text-xl text-[#757575] hover:text-red-600 rounded-full"
            onClick={() => handleDeleteCartItem(item?.id as number)}
          >
            <MdDelete />
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartMobileCard;

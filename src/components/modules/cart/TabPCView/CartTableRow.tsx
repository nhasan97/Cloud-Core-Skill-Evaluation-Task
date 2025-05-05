import { useCartContext } from "@/src/contexts/CartContextProvider";
import { TCartContext, TCartItemProp } from "@/src/types";
import { toTitleCase } from "@/src/utils/toTitleCase";
import Image from "next/image";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartTableRow = ({ item }: TCartItemProp) => {
  const { handleEditQty, handleDeleteCartItem } =
    useCartContext() as TCartContext;

  return (
    <tr className="flex justify-between items-center text-[#757575] text-center p-5 border-b border-gray-300">
      <td className="flex-2 flex flex-col items-start gap-2">
        <Image
          width={80}
          height={80}
          src={item?.image}
          alt="Cart Item Image"
          className="bg-gray-100 size-24 p-[2px] rounded-[10px]"
        ></Image>

        <p className="font-semibold">{toTitleCase(item?.name)}</p>
      </td>

      <td className="flex-1">
        <p className="badge-primary-style bg-gray-500 text-white  rounded-[10px]">
          {toTitleCase(item?.category)}
        </p>
      </td>

      <td className="flex-1">৳{item?.price}</td>

      <td className="flex-1">
        <div className="flex justify-center items-center gap-4">
          {item?.qty}
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
      </td>

      <td className="flex-1">৳{(item?.price * item?.qty).toFixed(2)}</td>

      <td className="flex-1">
        <button
          className="bg-transparent hover:bg-red-100 text-2xl sm:text-xl text-[#757575] hover:text-red-600 p-2 rounded-full"
          onClick={() => handleDeleteCartItem(item?.id as number)}
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;

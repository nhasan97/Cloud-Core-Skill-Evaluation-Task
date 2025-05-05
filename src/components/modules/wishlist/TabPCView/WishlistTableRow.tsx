import { useWishlistContext } from "@/src/contexts/WishlistProvider";
import { TWishlistContext, TWishlistItem } from "@/src/types";
import { toTitleCase } from "@/src/utils/toTitleCase";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const WishlistTableRow = ({ item }: { item: TWishlistItem }) => {
  const { handleDeleteWishlistItem } = useWishlistContext() as TWishlistContext;

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
        <button
          className="bg-transparent hover:bg-red-100 text-2xl sm:text-xl text-[#757575] hover:text-red-600 p-2 rounded-full"
          onClick={() => handleDeleteWishlistItem(item?.id as number)}
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default WishlistTableRow;

import Link from "next/link";
import React, { useState } from "react";
import MainLogo from "../../shared-components/MainLogo";
import {
  FaBars,
  FaCartShopping,
  FaChevronDown,
  FaXmark,
} from "react-icons/fa6";
import Image from "next/image";

const MobileSmallDeviceView = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="lg:hidden w-full flex justify-between items-center py-4">
      <div className="w-1/2 flex justify-start">
        <MainLogo />
      </div>

      <div className="w-1/2 flex justify-end gap-6">
        <div className="relative">
          <FaCartShopping className="text-xl text-[#202634]" />

          <p className="size-5 bg-[#757575] text-white text-sm text-center rounded-full absolute -top-3 -right-3">
            0
          </p>
        </div>

        {openSidebar ? (
          <FaXmark
            className="text-xl text-[#202634] z-20"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        ) : (
          <FaBars
            className="text-xl text-[#202634] z-20"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        )}

        <div
          className={`bg-white w-64 h-fit transition-all p-3 mt-8 space-y-3 rounded-xl shadow absolute ${
            openSidebar ? "" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center border border-[#e0e0e0] p-2 rounded-full">
            <Image
              width={80}
              height={80}
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt="DP"
              className="size-8 rounded-full"
            />

            <FaChevronDown className="text-[#202634]" />
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/" className="navbar-links">
              Home
            </Link>
            <Link href="/" className="navbar-links">
              Shop
            </Link>
            <Link href="/" className="navbar-links">
              WishList
            </Link>
            <Link href="#" className="navbar-links">
              About
            </Link>
            <Link href="#" className="navbar-links">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSmallDeviceView;

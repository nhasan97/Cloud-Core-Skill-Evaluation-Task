import Link from "next/link";
import React from "react";
import MainLogo from "../../shared-components/MainLogo";
import { FaCartShopping, FaChevronDown, FaHeart } from "react-icons/fa6";
import Image from "next/image";

const TabPcView = () => {
  return (
    <div className="hidden w-full lg:flex justify-between items-center py-4">
      <div className="w-1/3 flex justify-start gap-6">
        <Link href="/" className="navbar-links">
          Home
        </Link>
        <Link href="/" className="navbar-links">
          Shop
        </Link>
        <Link href="#" className="navbar-links">
          About
        </Link>
        <Link href="#" className="navbar-links">
          Contact
        </Link>
      </div>

      <div className="w-1/3 flex justify-center">
        <MainLogo />
      </div>

      <div className="w-1/3 flex justify-end">
        <div className="flex items-center pr-6 mr-6 gap-6 border-r border-[#e0e0e0]">
          <Link href="#">
            <FaHeart className="text-xl text-[#202634]" />
          </Link>
          <Link href="#">
            <div className="relative">
              <FaCartShopping className="text-xl text-[#202634]" />
              <p className="size-5 bg-[#757575] text-white text-sm text-center rounded-full absolute -top-3 -right-3">
                0
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3 border border-[#e0e0e0] p-1 rounded-full">
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
      </div>
    </div>
  );
};

export default TabPcView;

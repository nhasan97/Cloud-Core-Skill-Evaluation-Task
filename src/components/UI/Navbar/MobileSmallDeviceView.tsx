"use client";

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
import Container from "../../layouts/Container";
import { useCartContext } from "@/src/contexts/CartContextProvider";
import { TCartContext } from "@/src/types";

const MobileSmallDeviceView = () => {
  const { itemsInCartCount } = useCartContext() as TCartContext;

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow 
    }`}
    >
      <Container>
        <div className="lg:hidden w-full flex justify-between items-center py-4">
          <div className="w-1/2 flex justify-start">
            <MainLogo />
          </div>

          <div className="w-1/2 flex justify-end gap-6">
            <Link href={"/cart"}>
              <div className="relative">
                <FaCartShopping className="text-xl text-[#202634]" />

                <p className="size-5 bg-[#757575] text-white text-sm text-center rounded-full absolute -top-3 -right-3">
                  {itemsInCartCount}
                </p>
              </div>
            </Link>

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
      </Container>
    </nav>
  );
};

export default MobileSmallDeviceView;

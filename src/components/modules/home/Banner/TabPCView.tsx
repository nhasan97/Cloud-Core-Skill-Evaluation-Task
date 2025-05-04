"use client";

import Container from "@/src/components/layouts/Container";
import Image from "next/image";
import React from "react";
import bannerImage1 from "../../../../../public/assets/images/banner-img-1.png";
import logo from "../../../../../public/assets/icons/logo.png";

const TabPCView = () => {
  return (
    <div className="hidden sm:block bg-gray-100 w-full">
      <Container>
        <div className="w-full h-110 2xl:h-150 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="w-[55%] md:w-[60%] h-[90%] relative">
            <Image
              width={600}
              height={600}
              src={bannerImage1}
              alt="Banner Image"
              className="w-full h-full object-fill object-left absolute bottom-0 rounded-[10px] border border-black"
            />
          </div>

          <div className="w-[45%] md:w-[40%] h-[90%] space-y-6">
            <div className="bg-[#333333] h-[calc(50%-12px)] p-5 space-y-6 rounded-[10px]">
              <div className="flex justify-start items-center gap-3">
                <Image
                  src={logo}
                  alt="Gritly Logo"
                  width={40}
                  height={40}
                  className="hidden lg:flex"
                />
                <p className="text-[#e6e6e6] text-center lg:text-left">
                  Explore our latest collection of premium menswear – from
                  casual classics to sharp essentials.
                </p>
              </div>

              <button
                className="btn-primary-style"
                onClick={() => {
                  document
                    .getElementById("product-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <p>Shop Now</p>
              </button>
            </div>

            <div className="bg-[#666666] h-[calc(50%-12px)] text-[#e6e6e6] text-center p-5 space-y-6 rounded-[10px]">
              <p>Trusted by </p>
              <p>
                <span className="text-white text-3xl font-bold">10,000+</span>{" "}
                Men
              </p>

              <p>
                Fast Delivery | Easy Returns | Seasonal Sales upto{" "}
                <span className="text-black font-bold">50%</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TabPCView;

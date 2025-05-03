import Container from "@/src/components/layouts/Container";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const MobileSmallDeviceView = () => {
  return (
    <div className="block sm:hidden w-full">
      <Container>
        <div className="w-full h-160 object-cover object-center bg-[url('/assets/images/banner-img-2.png')] bg-cover bg-center bg-no-repeat rounded-[10px]">
          <div className="p-5 space-y-6">
            <p className="max-w-140 mx-auto text-[#a5a5a5] text-center">
              Explore our latest collection of premium menswear – from casual
              classics to sharp essentials.
            </p>

            <button className="bg-white text-[#202634] font-semibold flex items-center justify-center gap-2 px-2 mx-auto py-1 rounded-full">
              <p>Shop Now</p>
              <FaArrowRight />
            </button>
          </div>

          <div className="max-w-140 mx-auto text-[#a5a5a5] text-center p-5 space-y-2">
            <p>Trusted by </p>
            <p>
              <span className="text-white text-xl font-bold">10,000+</span> Men
            </p>

            <p className="">
              Fast Delivery | Easy Returns | Seasonal Sales upto{" "}
              <span className="font-bold">50%</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileSmallDeviceView;

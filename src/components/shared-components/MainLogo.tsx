"use client";

import Image from "next/image";
import logo from "../../../public/assets/icons/logo.png";

const MainLogo = () => {
  return (
    <div className="text-xl flex items-center">
      <Image src={logo} alt="Gritly Logo" width={40} height={40} />{" "}
      <p className="font-medium text-[#202634]">| GRITLY</p>
    </div>
  );
};

export default MainLogo;

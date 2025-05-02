import Navbar from "@/src/components/UI/Navbar/Navbar";
import { TChildren } from "@/src/types";
import React from "react";

const layout = ({ children }: TChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;

import { TChildren } from "@/src/types";
import React from "react";

const Container = ({ children }: TChildren) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-10 border">
      {children}
    </div>
  );
};

export default Container;

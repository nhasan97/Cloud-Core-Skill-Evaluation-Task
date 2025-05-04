"use client";

import React from "react";
import { TChildren } from "../types";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Toaster } from "sonner";

const Providers = ({ children }: TChildren) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
      <Toaster />
    </>
  );
};

export default Providers;

"use client";

import React from "react";
import { TChildren } from "../types";
import { Provider } from "react-redux";
import store from "../redux/store";

const Providers = ({ children }: TChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

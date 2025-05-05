"use client";

import React from "react";
import { TChildren } from "../types";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import CartContextProvider from "../contexts/CartContextProvider";

const Providers = ({ children }: TChildren) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CartContextProvider>{children}</CartContextProvider>
        </PersistGate>
      </Provider>
      <Toaster />
    </>
  );
};

export default Providers;

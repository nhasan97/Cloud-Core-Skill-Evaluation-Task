"use client";

import React from "react";
import "../../../styles/navbar.css";
import TabPcView from "./TabPcView";
import MobileSmallDeviceView from "./MobileSmallDeviceView";

const Navbar = () => {
  return (
    <div>
      <TabPcView />

      <MobileSmallDeviceView />
    </div>
  );
};

export default Navbar;

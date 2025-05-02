"use client";

import React, { useEffect, useState } from "react";
import Container from "../../layouts/Container";
import "../../../styles/navbar.css";
import TabPcView from "./TabPcView";
import MobileSmallDeviceView from "./MobileSmallDeviceView";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleShowHideNavbarOnScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      setShowNavbar(true); //at the top of the page
    } else if (currentScrollY > lastScrollY) {
      setShowNavbar(false); //while scrolling down
    } else {
      setShowNavbar(true); //while scrolling upwards
    }

    setLastScrollY(currentScrollY);
  };

  const handleShowHideNavbarOnMouseMove = (e: MouseEvent) => {
    if (e.clientY <= 10) {
      setShowNavbar(true);
    } else if (e.clientY > 50 && window.scrollY > 100) {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowHideNavbarOnScroll);
    window.addEventListener("mousemove", handleShowHideNavbarOnMouseMove);

    return () => {
      window.removeEventListener("scroll", handleShowHideNavbarOnScroll);
      window.removeEventListener("mousemove", handleShowHideNavbarOnMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 bg-white shadow ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <TabPcView />

        <MobileSmallDeviceView />
      </Container>
    </nav>
  );
};

export default Navbar;

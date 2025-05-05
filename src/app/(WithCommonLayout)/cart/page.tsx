import Container from "@/src/components/layouts/Container";
import MobileView from "@/src/components/modules/cart/MobileView/MobileView";
import TabPCView from "@/src/components/modules/cart/TabPCView/TabPCView";
import BreadCrumb from "@/src/components/UI/BreadCrumb";
import React from "react";
import "../../../styles/button.css";

const CartPage = () => {
  return (
    <div className="w-full h-full py-20">
      <BreadCrumb />

      <Container>
        <TabPCView />

        <MobileView />
      </Container>
    </div>
  );
};

export default CartPage;

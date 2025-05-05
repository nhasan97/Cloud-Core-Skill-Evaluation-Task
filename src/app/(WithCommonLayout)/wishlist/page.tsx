import Container from "@/src/components/layouts/Container";
import MobileView from "@/src/components/modules/wishlist/MobileView/MobileView";
import TabPCView from "@/src/components/modules/wishlist/TabPCView/TabPCView";
import BreadCrumb from "@/src/components/UI/BreadCrumb";
import React from "react";

const WishlistPage = () => {
  <div className="w-full h-full py-20">
    <BreadCrumb />

    <Container>
      <TabPCView />

      <MobileView />
    </Container>
  </div>;
};

export default WishlistPage;

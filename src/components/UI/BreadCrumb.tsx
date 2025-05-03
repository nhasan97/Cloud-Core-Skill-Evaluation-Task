import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Container from "../layouts/Container";

const BreadCrumb = () => {
  return (
    <Container>
      <div className="text-sm text-[#c0c0c0] flex justify-start items-center gap-2 my-5">
        <p>Home</p>

        <FaChevronRight />

        <p className="text-[#696969]">Products</p>
      </div>
    </Container>
  );
};

export default BreadCrumb;

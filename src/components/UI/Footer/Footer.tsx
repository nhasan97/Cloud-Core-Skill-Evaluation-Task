import React from "react";
import Container from "../../layouts/Container";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoPinterest, IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import "../../../styles/footer.css";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[url('/assets/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat bg-[#181818] bg-blend-overlay">
      <div className="text-center space-y-6 mb-12">
        <p className="text-4xl md:text-5xl lg:text-6xl text-white ">
          Explore Our Catalog
        </p>
        <p className="max-w-180 mx-auto px-5 text-base text-[#a5a5a5] tracking-wider">
          Gritly crafts modern essentials for men who move with purpose.
          Designed for comfort, built for everyday grit. Browse through our
          fashion catalog for wide range of stylish clothing options.
        </p>
        <button className="bg-white text-[#202634] font-semibold flex items-center justify-center gap-2 px-2 mx-auto py-1 rounded-full">
          <p>Learn More</p>
          <FaArrowRight />
        </button>
      </div>

      <div className="w-[95%] py-10 lg:pt-10 lg:pb-30 mx-auto bg-[url('/assets/images/footer-bg-2.webp')] bg-cover bg-bottom bg-no-repeat rounded-xl">
        <Container>
          <div className="w-full grid grid-cols-2 lg:grid-cols-8 gap-6">
            <div className="lg:col-span-2 py-5 text-center lg:text-left flex flex-col gap-1">
              <h2 className="text-lg text-[#202634] font-semibold mb-3">
                General
              </h2>

              <Link href="" className="footer-links">
                About Us
              </Link>
              <Link href="" className="footer-links">
                How to Order
              </Link>
              <Link href="" className="footer-links">
                Fashion Blogs
              </Link>
              <Link href="" className="footer-links">
                Contact Us
              </Link>
            </div>

            <div className="lg:col-span-2 py-5 text-center lg:text-left flex flex-col gap-1">
              <h2 className="text-lg text-[#202634] font-semibold mb-3">
                Products
              </h2>

              <Link href="" className="footer-links">
                Shop All
              </Link>
              <Link href="" className="footer-links">
                New Arrivals
              </Link>
              <Link href="" className="footer-links">
                Best Sellers
              </Link>
              <Link href="" className="footer-links">
                Care Tips
              </Link>
            </div>

            <div className="lg:col-span-2 py-5 text-center lg:text-left flex flex-col gap-1">
              <h2 className="text-lg text-[#202634] font-semibold mb-3">
                Customer Service
              </h2>

              <Link href="" className="footer-links">
                FAQs
              </Link>
              <Link href="" className="footer-links">
                Shipping & Delivery
              </Link>
              <Link href="" className="footer-links">
                Returns & Refunds
              </Link>
              <Link href="" className="footer-links">
                Privacy Policy
              </Link>
            </div>

            <div className="lg:col-span-2 py-5 text-center lg:text-left flex flex-col gap-1">
              <h2 className="text-lg text-[#202634] font-semibold mb-3">
                Social Media
              </h2>

              <IoLogoFacebook className="footer-social-icon" />
              <RiInstagramFill className="footer-social-icon" />
              <IoLogoTwitter className="footer-social-icon" />
              <IoLogoPinterest className="footer-social-icon" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

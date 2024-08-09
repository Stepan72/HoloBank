import React from "react";
import { discount, robot } from "@/assets";
import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row paddingY">
      <div className="flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="size-[32px]" />
          <p className="paragraph ml-2">
            <span className="text-white mr-2">20%</span>
            Discount For
            <span className="text-white mx-2">1 Month</span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
            <br />
            Payment Method.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

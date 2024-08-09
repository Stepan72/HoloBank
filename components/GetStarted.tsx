import React from "react";
import { arrowUp } from "@/assets";
import Image from "next/image";

function GetStarted() {
  return (
    <div className="flexCenter size-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flexCenter flex-col bg-primary size-[100%] rounded-full">
        <div className="flexStart flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[18px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <Image
            src={arrowUp}
            alt="arrow"
            className="size-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[18px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;

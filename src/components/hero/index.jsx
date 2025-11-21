import React, { useEffect } from "react";
import banner from "../../assets/banner.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <div className="relative max-w-[1220px] mx-auto px-[16px] xl:px-0 pt-[10px]">
        <img src={banner} className="w-full" alt="banner" />
        <div className="absolute top-[50%] flex items-center w-full justify-between">
          <span className="ml-[20px] text-text bg-white p-[10px] text-[18px] rounded-full cursor-pointer">
            <FaAngleLeft />
          </span>
          <span className="mr-[20px] text-text bg-white p-[10px] text-[18px] rounded-full cursor-pointer">
            <FaAngleRight />
          </span>
        </div>
      </div>
  );
};

export default Hero;

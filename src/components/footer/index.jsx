import React from "react";
import logo from "../../assets/white_logo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import app_store from "../../assets/app_store.svg";
import google_play from "../../assets/google_play.svg";

const Footer = () => {
  return (
    <footer className="bg-primary px-[16px] xl:px-0 pt-[40px] text-white mt-[40px]">
      <div className="max-w-[1220px] mx-auto flex items-center flex-col w-full">
        <div className="flex items-start gap-[80px] w-full">
          <div className="flex flex-col gap-[12px]">
            <img src={logo} alt="logo" className="w-[170px]" />
            <p className="font-semibold text-[18px] mt-[20px]">Contact Us</p>
            <div className="flex items-start gap-[6px]">
              <FaWhatsapp className="text-[26px] pt-[5px]" />
              <div>
                <p>Whats App</p>
                <a href="tel: +1 202-918-2132">+1 202-918-2132</a>
              </div>
            </div>
            <div className="flex items-start gap-[6px]">
              <TbPhoneCall className="text-[26px] pt-[5px]" />
              <div>
                <p>Call Us</p>
                <a href="tel: +1 202-918-2132">+1 202-918-2132</a>
              </div>
            </div>
            <p className="font-semibold text-[18px]">Download App</p>
            <div className="flex items-center gap-[5px]">
              <img src={app_store} className="w-[120px] cursor-pointer" alt="app_store" />
              <img src={google_play} className="w-[135px] cursor-pointer" alt="google_play" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-[18px] border-b-2 border-white pb-[5px] mb-[10px]">Most Popular Categories</p>
            <ul className="flex flex-col list-disc pl-[15px] gap-[6px]">
              <li className="cursor-pointer">Staples</li>
              <li className="cursor-pointer">Beverages</li>
              <li className="cursor-pointer">Personal Care</li>
              <li className="cursor-pointer">Home Care</li>
              <li className="cursor-pointer">Baby Care</li>
              <li className="cursor-pointer">Vegetables & Fruits</li>
              <li className="cursor-pointer">Snacks & Foods</li>
              <li className="cursor-pointer">Dairy & Bakery</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[18px] border-b-2 border-white pb-[5px] mb-[15px]">Customer Services</p>
            <ul className="flex flex-col list-disc pl-[15px] gap-[6px]">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">FAQ</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">E-waste Policy</li>
              <li className="cursor-pointer">Cancellation & Return Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-[60px] pb-[20px] border-t-2 border-[#05ABF3] pt-[20px] w-full text-center">
          <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

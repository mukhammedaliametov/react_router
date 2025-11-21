import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const HeaderCenter = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="sticky w-full top-0 bg-white h-[80px] flex items-center border-b-2 border-border z-999">
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="hidden md:flex items-center gap-[30px] text-text">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.link} className={({isActive}) => (isActive ? 'text-primary' : 'hover:text-primary duration-300')}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button className="hidden md:flex items-center gap-[6px] text-text cursor-pointer font-semibold"><FaRegUser className="text-primary" /> Sign Up/Sign In</button>
        <div className="block md:hidden" onClick={handleClick}>
          {nav ? <IoMdClose className="text-[25px] text-primary" /> : <RiMenu3Fill className="text-[25px] text-primary" /> }
        </div>
      </div>
      <div className={`absolute top-[70px] left-0 w-full bg-white shadow-md px-[16px] py-[30px] transition-all duration-500 ${nav ? 'left-0px' : 'left-[-100%]'}`}>
        <nav className="flex flex-col gap-[20px]">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.link} onClick={handleClick} className={({isActive}) => (isActive ? 'text-primary border-b border-border pb-[20px]' : 'hover:text-primary duration-300 border-b border-border pb-[20px] last:border-none')}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HeaderCenter;

import React from "react";
import Logo from "./img/logo.png";

const Header = () => {
  return (
    <Header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex h-full w-full">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Ngates</p>
        </div>
      </div>

      <ul className="">
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Service</li>
      </ul>

      {/* mobile */}
      <div className="flex md:hidden h-full w-full"></div>
    </Header>
  );
};

export default Header;

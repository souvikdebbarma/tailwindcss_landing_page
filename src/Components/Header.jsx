import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="Flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-cyan-500 to-blue-300 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-centerfont-lato text-gray-100 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-100" href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBarsStaggered />
      </div>
    </div>
  );
};

export default Header;

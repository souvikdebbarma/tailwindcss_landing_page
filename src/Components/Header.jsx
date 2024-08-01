import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="Flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-cyan-500 to-blue-300 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <div>
        <FaBarsStaggered />
      </div>
    </div>
  );
};

export default Header;

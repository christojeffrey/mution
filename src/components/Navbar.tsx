import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar ">
        <div className="flex px-10 bg-black m-auto justify-center w-[32rem] h-[80px] bg-gradient-to-r from-[#F1A259] to-[#EC7251]  items-center">

          <div className="text-white" onClick={() => setClick(!click)}>{click ? <FaTimes /> : <FaBars />}</div>
          <div className=" text-white w-[32rem]">
            <h1 className="text-right">Halo, Hekpes</h1>
          </div>
        </div>
      </nav >
    </>

  );
};

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import wave

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar ">
        {/* bg-gradient-to-r from-[#F1A259] to-[#EC7251] */}
        <div className="flex px-10 m-auto justify-center w-[32rem] h-[80px]   items-center">
          <div className="text-[#FFFFFF] text-3xl" onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className=" text-white w-[32rem]">
            <h1 className="text-right">
              <span className="text-md">Halo,</span> <span className="font-bold text-xl ">Hekpes</span>
            </h1>
          </div>
        </div>
      </nav>
    </>
  );
};

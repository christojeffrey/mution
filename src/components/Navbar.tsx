import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";
// import wave

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      {click && (
        <nav className="absolute w-[18rem]">
          <div className="h-screen bg-[#FFFFFF]">
            <ul className="pt-40">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/wallets"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Catatan Saldo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/planning"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Perencanaan Dana
                </Link>
              </li>
            </ul>

            <ul className="pt-40">
              <li className="nav-item">
                <h2 className="nav-links">Pengaturan</h2>
                {/* <Link
                  to="/wallets"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                </Link> */}
              </li>
              <li className="nav-item">
                <h2 className="nav-links"><span className="text-[#FF6240]"> Keluar akun</span></h2>

                {/* <Link
                  to="/planning"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      )
      }

      <nav className="navbar ">
        {/* bg-gradient-to-r from-[#F1A259] to-[#EC7251] */}
        <div className="flex px-10 m-auto justify-center w-[32rem] h-[80px]   items-center">
          <div
            className={`text-[#${click ? "EC7251" : "FFFFFF"}] text-3xl`}
            onClick={() => setClick(!click)}
          >
            {click ? <BsArrowLeftCircle /> : <FaBars />}
          </div>
          <div className=" text-white w-[32rem]">
            <h1 className="text-right">
              <span className="text-md">Halo,</span>{" "}
              <span className="font-bold text-xl ">Hekpes</span>
            </h1>
          </div>
        </div>
      </nav>
    </>
  );
};

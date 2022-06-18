import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <nav>
      <div className="flex m-auto justify-center w-[32rem]">
        <div className=""><MenuIcon /></div>
        <div className="bg-black text-white w-[32rem]">
          <h1 className="text-right">Halo, Hekpes</h1>
        </div>
      </div>
    </nav>
  );
};

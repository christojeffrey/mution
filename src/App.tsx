// "kenapa gk diganti nama jad router.tsx?"
// sementara app berguna sebagai router. bukan berarti dia bakal selamanya jadi router doang. nti kalo ada aditional things yang mo dimasukin disini, ya masukin

import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Mutation from "./pages/Mutation";
import Testing from "./pages/Testing";
import FourOhFour from "./pages/FourOhFour";
import AddInstitutions from "./pages/AddInstitutions";
import SendAuthOVO from "./pages/AddOVO/SendAuthOVO";
import VerifyAuthOVO from "./pages/AddOVO/VerifyAuthOVO";
import GetUserDataOVO from "./pages/AddOVO/GetUserDataOVO";
import Wallets from "./pages/Wallets";
import AllMutations from "./pages/AllMutations";
import Settings from "./pages/Settings";
import MutationsOVO from "./pages/MutationsOVO";
import SuccessAddingWallet from "./pages/SuccessAddingWallet";
import Planning from "./pages/Planning";

import bwave from "./assets/bwave.svg";
import twave from "./assets/twave.svg";
import twave2 from "./assets/twave2.svg";

function App() {
  return (
    <div className="">
      {/* full bg */}
      <div className=" absolute bg-[#F4F7FB] -z-50 w-full h-[50rem]"></div>
      <div className="absolute z-20 flex items-center justify-center w-full">
        <div>
          {/* twave */}
          <img src={twave2} alt="wave" className="w-[32rem]" />
        </div>
      </div>
      <div className="absolute z-20 flex items-center justify-center w-full">
        <div>
          {/* twave */}
          <img src={twave} alt="wave" className="w-[32rem]" />
        </div>
      </div>
      {/* force mobile */}
      <div className="flex flex-col items-center bg-[#F4F7FB]">
        <div className="w-[32rem] min-h-screen z-30">
          <Navbar />
          <Routes>
            {/* note to self, path selalu huruf kecil */}
            <Route path="/" element={<Home />} />
            <Route path="/mutation" element={<Mutation />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/add" element={<AddInstitutions />} />
            <Route path="/settings" element={<Settings />} />
            {/* mutations */}
            <Route path="/allmutations" element={<AllMutations />} />
            <Route path="/mutationsovo" element={<MutationsOVO />} />
            {/* mutations */}

            {/* add digital wallet */}
            <Route path="/sendauthovo" element={<SendAuthOVO />} />
            <Route path="/verifyauthovo" element={<VerifyAuthOVO />} />
            <Route path="/getuserdataovo" element={<GetUserDataOVO />} />
            {/* add digital wallet */}
            <Route path="/successaddingwallet" element={<SuccessAddingWallet />} />

            {/* catcher buat 404*/}
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </div>
      </div>
      {/* force mobile */}
      <div className="absolute z-20 bottom-[-15rem] flex items-center justify-center">
        <div>
          {/* bwave */}
          <img src={bwave} alt="wave" className="w-screen" />
        </div>
      </div>
    </div>
  );
}

export default App;

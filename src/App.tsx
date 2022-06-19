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

function App() {
  return (
    <div className="">
      <Navbar />
      {/* force mobile */}
      <div className="flex flex-col items-center ">
        <div className="w-[32rem] min-h-screen bg-[#F4F7FB]">
          <Routes>
            {/* note to self, path selalu huruf kecil */}
            <Route path="/" element={<Home />} />
            <Route path="/mutation" element={<Mutation />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/wallets" element={<Wallets />} />
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

            {/* catcher buat 404*/}
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </div>
      </div>
      {/* force mobile */}
    </div>
  );
}

export default App;

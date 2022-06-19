import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./GetUserData.css";

const GetUserDataOVO = () => {
  const [username, setUsername] = useState("+6285156961915");

  return (
    <div className="flex flex-col mx-10 mt-10 text-[#474646] ">
      <div className="w-[27rem] mt-10 mb-5">
        <h1 className="font-bold text-3xl mb-5">Tambah Akun</h1>
      </div>
      <div>
        <form
          className="input-wrapper"
          onSubmit={() => {
            console.log("berhasil di set");
            console.log(username);
          }}
        >
          <h1 className="font-semibold">Masukkan nomor handphone</h1>
          <input
            className="search-input"
            type="text"
            placeholder={"No. Handphone"}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              localStorage.setItem("ovo-username", e.target.value);
            }}
          />
          <Link to="/sendauthovo" className="flex card mt-10 py-2 bg-[#FFFFFF] text-[#EC7250] font-semibold justify-center items-center transition ease-in-out hover:scale-105">
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    </div>
  );
};
export default GetUserDataOVO;

import { TextField } from "@mui/material";
import { useSendAuthInstitution } from "../../utils/brick";
import { Link } from "react-router-dom";
import { useState } from "react";
const SendAuthOVO = () => {
  // get from local storage
  let username = localStorage.getItem("ovo-username");

  const { responseAuth } = useSendAuthInstitution("token2an", 12, username);

  console.log("responseAuth abis minta otp");
  console.log(responseAuth);
  //   masukin response di local storage
  localStorage.setItem("ovo-send-auth-response", JSON.stringify(responseAuth));

  // setter
  const [SMSLink, setSMSLink] = useState("");
  const [pin, setPin] = useState("");
  return (
    <>
      <div className="flex flex-col mx-10 mt-10 text-[#474646] ">
        <div className="w-[27rem] mt-10 mb-5">
          <h1 className="font-bold text-3xl mb-5">Tambah Akun</h1>
        </div>
        <div>
          <form
            className="input-wrapper"
            onSubmit={() => {
              localStorage.setItem("ovo-sms-link", SMSLink);
              localStorage.setItem("ovo-pin", pin);
              console.log("berhasil di set");
            }}
          >
            <h1 className="font-semibold">Masukkan link yang telah dikirimkan ke ponselmu </h1>
            <input className="search-input" type="text" placeholder={"https://ovo.id/app/login?code=..."} value={SMSLink} onChange={(e) => setSMSLink(e.target.value)} />
            <br />
            <h1 className="font-semibold">Masukkan PIN OVO</h1>
            <input className="search-input" type="text" placeholder={"PIN (6 digit)"} value={pin} onChange={(e) => setPin(e.target.value)} />
            <Link to="/sendauthovo" className="flex card mt-10 py-2 bg-[#FFFFFF] text-[#EC7250] font-semibold justify-center items-center transition ease-in-out hover:scale-105">
              <input type="submit" value="Submit" />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendAuthOVO;

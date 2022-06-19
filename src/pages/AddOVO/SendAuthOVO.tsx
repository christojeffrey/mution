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
    <div>
      <h1>Sending Auth OVO...</h1>
      <div> aku butuh data sms sama pinmu</div>
      <div className="flex flex-col">
        <TextField id="filled-basic" label="smsnya" variant="filled" value={SMSLink} onChange={(e) => setSMSLink(e.target.value)} />
        <TextField id="filled-basic" label="pin" variant="filled" type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
        <Link
          to="/verifyauthovo"
          onClick={() => {
            localStorage.setItem("ovo-sms-link", SMSLink);
            localStorage.setItem("ovo-pin", pin);
            console.log("berhasil di set");
          }}
        >
          gaskan
        </Link>
      </div>
    </div>
  );
};

export default SendAuthOVO;

import { useEffect, useState } from "react";
import { useVerifyAuthOVO } from "../../utils/brick";
import { useAddConnectedWallet } from "../../utils/database";
const VerifyAuthOVO = () => {
  const smslink = localStorage.getItem("ovo-sms-link");
  const pin = localStorage.getItem("ovo-pin");
  const ls = localStorage.getItem("ovo-send-auth-response");
  console.log("ls");
  console.log(ls);
  let ovores;

  if (ls) {
    ovores = JSON.parse(ls);
    console.log("ovores");
    console.log(ovores);
  }

  console.log("smslink");
  console.log(smslink);
  console.log("ovores");
  console.log(ovores);
  let data;
  if (ovores) {
    data = {
      username: ovores.data.username,
      refId: ovores.data.refId,
      deviceId: ovores.data.deviceId,
      otpNumber: smslink,
      pin: pin,
    };
  } else {
    data = {
      username: "",
      refId: "",
      deviceId: "",
      otpNumber: "",
      pin: "",
    };
  }
  console.log("data yang bakal di send");
  console.log(data);
  const { responseAuth } = useVerifyAuthOVO(data);
  console.log("response auth");
  console.log(responseAuth);
  // {"status":200,"message":"OK","data":"access-sandbox-52f77ce5-699c-4c0f-bf4d-282855814451"}
  if (responseAuth?.message === "OK") {
    // set data to local storage
    localStorage.setItem(
      "new-wallet",
      JSON.stringify({
        id: 12,
        name: "ovo",
        accessToken: responseAuth.data,
      })
    );
    // rediret to /successaddingwallet
    window.location.href = "/successaddingwallet";
  }

  return (
    <div>
      <h1>Verify Auth OVO berhasil apa ngga ya</h1>
      <div>
        <p>{smslink}</p>
        <p>{JSON.stringify(responseAuth)}</p>
      </div>
    </div>
  );
};

export default VerifyAuthOVO;

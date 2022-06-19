import { useVerifyAuthOVO } from "../../utils/brick";
import { addConnectedWallet } from "../../utils/database";
const VerifyAuthOVO = () => {
  const smslink = localStorage.getItem("ovo-sms-link");
  const pin = localStorage.getItem("ovo-pin");
  let ls = localStorage.getItem("ovo-send-auth-response");

  let ovores;
  if (ls) {
    ovores = JSON.parse(ls);
  } else {
    ovores = {};
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

  // if (responseAuth.status === "success") {
  //   addConnectedWallet(responseAuth.data);
  // }

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

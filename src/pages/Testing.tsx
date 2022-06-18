import { copyFileSync } from "fs";
import { useEffect, useState } from "react";
import { isFunctionTypeNode } from "typescript";
import { useGetPublicToken, useGetAvailableInstitutions, useGetAllWalletData, useGetMutation } from "../utils/brick";
import { getConnectedWallets, getAllUserAccessToken } from "../utils/database";
const Testing = () => {
  // const { token, errorToken } = useGetPublicToken();

  const uats = getAllUserAccessToken("user1");
  const [mutationsData, setMutationsData] = useState<any>(null);
  // useGetAllWalletData(uats).then((data) => {
  //   console.log(data);
  //   setDataWallets(data);
  // });
  useGetMutation(uats).then((data) => {
    console.log(data);
    setMutationsData(data);
  });

  // console.log("dataWallets");
  // console.log(dataWallets);

  return (
    <div>
      <div className="text-xl">ini buat testing</div>
      <div className="text-md">{process.env.REACT_APP_API_KEY}</div>
      <div className="text-md">{process.env.REACT_APP_BOB}</div>
      <div className="text-md"></div>
      <div className="text-md">
        {mutationsData
          ? mutationsData.map((m: any) => {
              <div>aa</div>;
            })
          : "gagal"}
      </div>
      <button onClick={() => {}}>send sms to ovo</button>
    </div>
  );
};

export default Testing;

import { copyFileSync } from "fs";
import { useEffect, useState } from "react";
import { isFunctionTypeNode } from "typescript";
import { useGetPublicToken, useGetAvailableInstitutions, useGetAllWalletData, useGetMutation } from "../utils/brick";
import { useGetConnectedWallets, useGetAllUserAccessToken } from "../utils/database";
const Testing = () => {
  // const { token, errorToken } = useGetPublicToken();

  const uats = useGetAllUserAccessToken("user1");
  console.log("uats");
  console.log(uats);
  const connectedWallets = useGetConnectedWallets("user1");
  console.log("connectedWallets");
  console.log(connectedWallets);

  return (
    <div>
      <div className="text-xl">ini buat testing</div>
      <div className="text-md">{process.env.REACT_APP_API_KEY}</div>
      <div className="text-md">{process.env.REACT_APP_BOB}</div>
      <div className="text-md">
        {connectedWallets?.map((wallet: any) => {
          return <div>{wallet.name}</div>;
        })}
      </div>
      <div className="text-md">
        {/* {mutationsData
          ? mutationsData.map((m: any) => {
              <div>aa</div>;
            })
          : "gagal"} */}
      </div>
      <button onClick={() => {}}>send sms to ovo</button>
    </div>
  );
};

export default Testing;

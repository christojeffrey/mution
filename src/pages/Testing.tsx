import { useEffect, useState } from "react";
import { isFunctionTypeNode } from "typescript";
import { useGetPublicToken, useGetAvailableInstitutions } from "../utils/brick";
import { getConnectedWallets } from "../utils/database";
const Testing = () => {
  // const { token, errorToken } = useGetPublicToken();

  const { institutions, errorInstitutions } = useGetAvailableInstitutions("token2an");
  let connectedWallet = getConnectedWallets("user1");
  console.log("connectedWallet");
  console.log(connectedWallet);

  return (
    <div>
      <div className="text-xl">ini buat testing</div>
      <div className="text-md">{process.env.REACT_APP_API_KEY}</div>
      <div className="text-md">{process.env.REACT_APP_BOB}</div>
      <div className="text-md">
        {institutions
          ? institutions.map((institution: any) => {
              return <div>{institution.name}</div>;
            })
          : "belom"}
      </div>
      <button onClick={() => {}}>send sms to ovo</button>
    </div>
  );
};

export default Testing;

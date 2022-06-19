import React from "react";
import { useState } from "react";
import { useGetAllUserAccessToken, useGetConnectedWallets } from "../utils/database";
import { useGetAllWalletData } from "../utils/brick";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import BalanceBox from "../components/BalanceBox";

const Wallets = () => {
  const uats = useGetAllUserAccessToken("user1");
  // const [dataWallets, setDataWallets] = useState<any>([]);
  // useGetAllWalletData(uats).then((data) => {
  //   setDataWallets(data);
  // });
  const dataWallets = useGetAllWalletData(uats);

  let connectedWalletInfo = useGetConnectedWallets("user1");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[27rem] mt-10">
        <h1 className="font-bold text-3xl text-[#474646] mb-5">Catatan Saldo</h1>
      </div>
      {dataWallets ? (
        dataWallets.map((wallet: any, index: any) => {
          let total = 0;
          wallet.data.forEach((data: any) => {
            total += data.balances.available;
          });
          console.log("total");
          console.log(total);
          console.log("wllet");
          console.log(wallet);
          let id;
          let name;
          if (connectedWalletInfo) {
            id = connectedWalletInfo[index].id;
            name = connectedWalletInfo[index].name;
          }
          console.log("aAAA");
          return <BalanceBox wallet={{ id, name, total }} />;
        })
      ) : (
        <div>Loading...</div>
      )}
      <div className="mt-10 text-6xl">
        <button className="text-[#EC7250] transition ease-in-out hover:scale-105">
          <Link className="flex flex-col items-center" to="/add">
            <div className="text-[#EC7250]">
              <BsPlusCircle />
            </div>
            {/* <p className='text-xs mt-5'>
                            tambah akun lainnya
                        </p> */}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Wallets;

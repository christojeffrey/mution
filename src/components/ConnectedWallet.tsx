import { useState } from "react";
import { useGetAllUserAccessToken, useGetConnectedWallets } from "../utils/database";
import { useGetAllWalletData } from "../utils/brick";
import "./ConnectedWallet.css"
import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from "react-router-dom";

const AllConnectedWallets = () => {
  const uats = useGetAllUserAccessToken("user1");
  //   const [dataWallets, setDataWallets] = useState<any>([]);
  //   useGetAllWalletData(uats).then((data) => {
  //     setDataWallets(data);
  //   });
  const dataWallets = useGetAllWalletData(uats);
  let connectedWalletInfo = useGetConnectedWallets("user1");
  return (
    <div className="">
      <div className="home-headings mx-10 text-[#474646]">
        <h2 className="font-bold ">Catatan Saldo</h2>
        <button className="text-3xs bg-[#D9D9D9] bg-opacity-40 rounded-lg px-2 my-1 font-bold">
          <Link className="p-0" to="/wallets">LIHAT LAINNYA</Link>
        </button>
      </div>
      <div className="flex justify-center">
        {dataWallets?.map((wallet: any, index: any) => {
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
          return <ConnectedWalletCard wallet={{ id, name, total }} />;
        })}
      </div>
    </div>
  );
};
export const ConnectedWalletCard = ({ wallet }: { wallet: any }) => {
  return (
    <div className="card wallet-container">
      <div className="wallet-top">
        <div className="flex items-center h-[2rem] py-5">
          <img src={
            wallet.id === 12
              ? require("../assets/12.png")
              : wallet.id === 11
                ? require("../assets/11.png")
                : ""
          } alt="" className="w-3/5" />
        </div>
        <button className="text-xl text-[#EC7251]"><BsArrowRightCircle /></button>
      </div>
      <div className="text-xl text-[#EC7251] font-bold">Rp{wallet.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
    </div >
  );
};

export default AllConnectedWallets;

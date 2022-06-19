import { useState } from "react";
import { useGetAllUserAccessToken, useGetConnectedWallets } from "../utils/database";
import { useGetAllWalletData } from "../utils/brick";
import "./ConnectedWallet.css";
import { BsArrowRightCircle } from "react-icons/bs";
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
    <div className="flex">
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
  );
};
export const ConnectedWalletCard = ({ wallet }: { wallet: any }) => {
  return (
    <div className="card wallet-container">
      <Link to={`mutations${wallet.name}`}>
        <div className="wallet-top">
          {wallet.name}{" "}
          <button>
            <BsArrowRightCircle />
          </button>{" "}
        </div>
        <div className="text-xl text-[#EC7251] font-bold">Rp{wallet.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
      </Link>
    </div>
  );
};

export default AllConnectedWallets;

// home page

import { useEffect, useState } from "react";
import { getAllUserAccessToken, getConnectedWallets } from "../utils/database";
import { useGetAllWalletData } from "../utils/brick";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="text-xl">
        <h1>halo user 1</h1>
      </div>
      <div className="text-md p-4">
        <p>bhobobobo</p>
      </div>
      {/* home hero */}
      <div>
        <HomeHero />
      </div>
      {/* home hero */}
      {/* connected wallet */}
      <div>
        connected wallet and it's balance
        <Button variant="text">
          <Link to="/add">add more wallet</Link>
        </Button>
        <AllConnectedWallets />
      </div>
      {/* connected wallet */}
    </div>
  );
};

const HomeHero = () => {
  const [totalBalance, setTotalBalance] = useState<any>(0);

  const uats = getAllUserAccessToken("user1");
  const [dataWallets, setDataWallets] = useState<any>([]);
  useGetAllWalletData(uats).then((data) => {
    setDataWallets(data);
  });
  useEffect(() => {
    if (dataWallets) {
      let total = 0;
      dataWallets?.forEach((wallet: any) => {
        console.log("wallet");
        console.log(wallet);
        wallet.data.forEach((data: any) => {
          total += data.balances.available;
        });

        console.log("total");
        console.log(total);
        setTotalBalance(total);
      });
    }
  }, [dataWallets]);

  return <div>ini hero yang ada di home. disini ditampilin uang total saat ini.{totalBalance}</div>;
};

const AllConnectedWallets = () => {
  const uats = getAllUserAccessToken("user1");
  const [dataWallets, setDataWallets] = useState<any>([]);
  useGetAllWalletData(uats).then((data) => {
    setDataWallets(data);
  });
  return (
    <div>
      {dataWallets?.map((wallet: any, index: any) => {
        let total = 0;
        wallet.data.forEach((data: any) => {
          total += data.balances.available;
        });
        console.log("total");
        console.log(total);
        console.log("wllet");
        console.log(wallet);
        let connectedWalletInfo = getConnectedWallets("user1");
        let id;
        let name;
        if (connectedWalletInfo) {
          id = connectedWalletInfo[index].id;
          name = connectedWalletInfo[index].name;
        }
        console.log("aAAA");
        return <ConnectedWalletCard wallet={{ id, name, total }} />;
      })}
    </div>
  );
};
const ConnectedWalletCard = ({ wallet }: { wallet: any }) => {
  return (
    <div>
      <div className="text-xl">{wallet.name}</div>
      <div className="text-xl">{wallet.total}</div>
    </div>
  );
};

export default Home;

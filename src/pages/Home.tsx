// home page

import { useEffect, useState } from "react";
import { getAllUserAccessToken } from "../utils/database";
import { useGetAllWalletData } from "../utils/brick";

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
      <div>connected wallet and it's balance</div>
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
export default Home;

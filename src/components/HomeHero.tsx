import { useEffect, useState } from "react";
import { useGetAllUserAccessToken } from "../utils/database";
import { useGetAllWalletData } from "../utils/brick";
import { AiOutlineScan } from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { TbBellRinging } from "react-icons/tb";
import { CgArrowLongRight } from "react-icons/cg";
import { BsDash } from "react-icons/bs";
import "./HomeHero.css";
import { Link } from "react-router-dom";

const HomeHero = () => {
  const [totalBalance, setTotalBalance] = useState<any>(0);
  const uats = useGetAllUserAccessToken("user1");
  //   const [dataWallets, setDataWallets] = useState<any>([]);
  const dataWallets = useGetAllWalletData(uats);
  console.log("dataWallets");
  console.log(dataWallets);
  //   useGetAllWalletData(uats).then((data) => {
  //     console.log("data");
  //     console.log(data);
  //     setDataWallets(data);
  //   });
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

  return (
    <>
      <div className="card home-hero p-5">
        <div className="text-8xl text-[#FFFFFF]">
          <AiOutlineScan />
        </div>
        <div className="">
          <h2 className="text-[#FFFFFF]"><span className="text-[#F7CE50]">Saldo</span> gabungan</h2>
          <p className="text-3xl mb-4 text-[#FFFFFF]">Rp{totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
          <div className="flows-hero-container">
            <div className="text-xs">
              <h3 className="text-2xs text-[#FFFFFF] mb-1"><span className="font-bold">Pengeluaran</span> hari ini</h3>
              <span className="card flows-card text-[#EC7251]"><span className="arrow bg-[#EC7251]"><BsArrowUp /></span>Rp1.000.000</span>
            </div>
            <div className="text-xs">
              <h3 className="text-2xs text-[#FFFFFF] mb-1"><span className="font-bold">Pemasukan</span> hari ini</h3>
              <span className="card flows-card text-[#6E7B51]"><span className="arrow bg-[#6E7B51]"><BsArrowDown /></span>Rp1.000.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card px-2 py-1 mt-5 bg-gradient-to-r from-[#F1A259] via-[#EC7251] to-[#F1A259] text-[#FFFFFF] flex justify-between">
        <div className="flex">
          <div className="mr-2">
            <TbBellRinging />
          </div>
          <p className="text-xs ">
            Lihat transaksi terbaru!{" "}
          </p>
        </div>
        <button className="flex items-center text-xs">
          <BsDash /><CgArrowLongRight />
        </button>
      </div>
    </>
  );
};

export default HomeHero;

import React from "react";
import "./BalanceBox.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const BalanceBox = ({ wallet }: { wallet: any }) => {
  return (
    <div className="card balance-box bg-[#FFFFFF] transition ease-in-out hover:scale-[1.02]">
      <Link to={`/mutations${wallet.name}`}>
        <div className="balance-container">
          <div className="institution-logo">
            <img src={wallet.id === 12 ? require("../assets/12.png") : wallet.id === 11 ? require("../assets/11.png") : ""} alt="" width={150} />
          </div>
          <div>
            <span className="institution-code card">
              {wallet.name}-{wallet.id}
            </span>
            <h3 className="mt-2">Saldo saat ini</h3>
            <span className="balance-value">Rp{wallet.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
          </div>
        </div>
        <div className="flows-container">
          <div className="">
            <h3>
              <span className="font-bold">Pengeluaran</span> hari ini
            </h3>
            <span className="card flows-card text-[#EC7251]">
              <span className="arrow bg-[#EC7251]">
                <BsArrowUp />
              </span>
              Rp0
            </span>
          </div>
          <div className="">
            <h3>
              <span className="font-bold">Pemasukan</span> hari ini
            </h3>
            <span className="card flows-card text-[#6E7B51]">
              <span className="arrow bg-[#6E7B51]">
                <BsArrowDown />
              </span>
              Rp{wallet.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BalanceBox;

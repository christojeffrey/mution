import React from "react";
import "./BalanceBox.css";
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

const BalanceBox = () => {
    return (
        <div className="card balance-box">
            <div className="balance-container">
                <div className="institution-logo">
                    <h1 className="text-8xl">BRI</h1>
                </div>
                <div>
                    <span className="institution-code card">BRI-1001</span>
                    <h3 className="mt-2">Saldo saat ini</h3>
                    <span className="balance-value">Rp1.000.000</span>
                </div>
            </div>
            <div className="flows-container">
                <div className="">
                    <h3><span className="font-bold">Pengeluaran</span> hari ini</h3>
                    <span className="card flex px-2 text-[#EC7251] font-bold"><span className="arrow bg-[#EC7251]"><BsArrowUp /></span>Rp1.000.000</span>
                </div>
                <div className="">
                    <h3><span className="font-bold">Pemasukan</span> hari ini</h3>
                    <span className="flex card px-2 text-[#a7ca5a] font-bold"><span className="arrow bg-[#a7ca5a]"><BsArrowDown /></span>Rp1.000.000</span>
                </div>
            </div>
        </div>
    );
};

export default BalanceBox;

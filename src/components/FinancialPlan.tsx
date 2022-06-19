import React from "react";
import ProgressBar from "./ProgressBar";
import "./FinancialPlan.css";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const FinancialPlan = () => {
    let transportasi = 25;
    let makanan = 100;
    let lainnya = 25;

    return (
        <div className="financial-plan">
            <div className="card text-[#474646]">
                <div className="home-headings text-sm text-[#474646]">
                    <h2 className="font-bold ">Perencanaan Dana</h2>
                </div>
                <div className="flex items-center m-4">
                    <div className="mr-4">
                        <ProgressBar
                            color="#8A81E4"
                            strokeWidth={10}
                            fontsize={10}
                            size={70}
                            progress={transportasi}
                        />
                    </div>
                    <p className="font-semibold text-sm">
                        {transportasi}% Terpakai dari{" "}
                        <span className="text-[#5689F5]">Transportasi</span>
                    </p>
                </div>
                <div className="flex items-center m-4">
                    <div className="mr-4">
                        <ProgressBar
                            color="#FF6240"
                            strokeWidth={10}
                            fontsize={10}
                            size={70}
                            progress={makanan}
                        />
                    </div>
                    <p className="font-semibold text-sm">
                        {makanan}% Terpakai dari{" "}
                        <span className="text-[#5689F5]">Makanan</span>
                    </p>
                </div>
                <div className="flex items-center m-4">
                    <div className="mr-4">
                        <ProgressBar
                            color="#8A81E4"
                            strokeWidth={10}
                            fontsize={10}
                            size={70}
                            progress={lainnya}
                        />
                    </div>
                    <p className="font-semibold text-sm">
                        {lainnya}% Terpakai dari{" "}
                        <span className="text-[#5689F5]">Lainnya</span>
                    </p>
                </div>
                <div className="flex justify-end">
                    <button className=" card text-xs bg-[#FFFFFF] rounded-lg p-2 text-[#EC7250] font-bold">
                        <Link className="flex items-center" to="/planning">
                            <p className="mr-2">RINCIAN</p>{" "}
                            <div className="text-xl">
                                <BsArrowRightCircleFill />
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinancialPlan;

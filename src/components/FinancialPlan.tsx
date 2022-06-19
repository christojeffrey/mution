import React from "react";
import ProgressBar from "./ProgressBar";

const FinancialPlan = () => {
    return (
        <div className="card text-[#474646] font-bold">
            <h1>Perencanaan dana</h1>
            <div className="">
                <div className="flex items-center mx-4">
                    <div className="mr-4">
                        <ProgressBar strokeWidth={10} fontsize={10} size={70} progress={10} />
                    </div>
                    <p>50% Terpakai dari <span className="text-[#5689F5]">Transportasi</span></p>
                </div>
            </div>

        </div>
    );
};

export default FinancialPlan;

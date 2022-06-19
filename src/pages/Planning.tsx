import React from "react";
import PlanBox from "../components/PlanBox";

const Planning = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[27rem] mt-10">
                <h1 className="font-bold text-3xl text-[#474646] mb-5">Perencanaan dana</h1>
                <h1 className="text-sm text-[#474646]">Lihat dan rencanakan keuanganmu dalam satu bulan!</h1>
            </div>
            <PlanBox />
        </div>
    );
};

export default Planning;

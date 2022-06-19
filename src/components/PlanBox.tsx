import React, { useState } from "react";
import "./PlanBox.css"
import ProgressBar from "./ProgressBar";

const PlanBox = () => {
    const [progress, setProgress] = useState(0);

    return (
        <div className="flex flex-col justify-content items-center">
            <div className="card flex flex-col p-10">
                <h1 className="text-[#5689F5] font-bold text-2xl">Transportasi</h1>
                <ProgressBar strokeWidth={20} fontsize={25} size={150} progress={10} />
                <h3 className="font-bold">Rp125.000</h3>
                <h3>/Rp250.000</h3>
                <br />

                <p className="text-xs">Sisa Dana</p>
                <h3 className="flex px-2 text-[#a7ca5a] font-bold text-xl">Rp125.000</h3>
            </div>
        </div>
    );
};

export default PlanBox;

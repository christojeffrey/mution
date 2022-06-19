import React, { useState } from "react";
import "./PlanBox.css";
import ProgressBar from "./ProgressBar";

const PlanBox = (props: { category: any; progress: any; initial: any, color: any }) => {
    // const [progress, setProgress] = useState(10);
    const { category, progress, initial, color } = props;

    return (
        <div className="flex flex-col justify-content items-center mt-10">
            <div className="items-center flex flex-col p-10">
                <h1 className="text-[#5689F5] mb-5 font-bold text-2xl">{category}</h1>
                <ProgressBar
                    color={color}
                    strokeWidth={20}
                    fontsize={"2xl"}
                    size={150}
                    progress={progress}
                />
                <h3 className="font-bold mt-5 text-3xl">
                    Rp
                    {(initial * progress * 0.01)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </h3>
                <h3>/Rp{initial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h3>
                <br />

                <p className="text-xs">Sisa Dana</p>
                {initial * progress * 0.01 > initial ? (
                    <h3 className="flex px-2 text-[#a7ca5a] font-bold text-3xl">
                        Rp0
                    </h3>
                ) : (
                    <h3 className="flex px-2 text-[#a7ca5a] font-bold text-3xl">
                        Rp
                        {(initial - initial * progress * 0.01)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default PlanBox;

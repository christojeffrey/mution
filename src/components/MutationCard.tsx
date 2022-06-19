import React from "react";
import "./MutationCard.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const MutationCard = ({ data, id, name }: { data: any; id: any; name: any }) => {
  console.log("data tiap mutation card");
  console.log(data);
  return (
    <div className="mutation-card flex justify-center items-center">
      {data.direction === "in" ? (
        <span className="card flows-card text-[#6E7B51]">
          <span className="arrow bg-[#6E7B51]">
            <BsArrowDown />
          </span>
          Rp{data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
      ) : (
        <span className="card flows-card text-[#EC7251]">
          <span className="arrow bg-[#EC7251]">
            <BsArrowDown />
          </span>
          Rp{data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
      )}
      <div className="amount"></div>
      <div className="institution-name">
        <img src={data.institution_id === 12 ? require("../assets/12.png") : data.institution_id === 11 ? require("../assets/11.png") : ""} alt="" width={150} />
      </div>
      <div className="description  bg-[#D9D9D9] bg-opacity-20">{data.description}</div>
    </div>
  );
};

export default MutationCard;

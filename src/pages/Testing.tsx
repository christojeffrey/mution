import { useEffect, useState } from "react";
import { useGetPublicToken, useGetAvailableInstitutions } from "../utils/brick";
const Testing = () => {
  const { token, errorToken } = useGetPublicToken();

  const { institutions, errorInstitutions } = useGetAvailableInstitutions(token);
  return (
    <div>
      <div className="text-xl">ini buat testing</div>
      <div className="text-md">{process.env.REACT_APP_API_KEY}</div>
      <div className="text-md">{process.env.REACT_APP_BOB}</div>
      <div className="text-md">{token ? token : "belom"}</div>
    </div>
  );
};

export default Testing;

import { useState } from "react";
import { useGetMutation } from "../utils/brick";
import { getAllUserAccessToken, getConnectedWallets } from "../utils/database";

const AllMutations = () => {
  const uats = getAllUserAccessToken("user1");
  const [mutationsData, setMutationsData] = useState<any>(null);

  useGetMutation(uats).then((data: any) => {
    console.log(data);
    setMutationsData(data);
  });
  return (
    <div>
      {mutationsData?.map((wallet: any, index: any) => {
        return wallet.data.map((record: any) => {
          console.log("record");
          console.log(record);
          let connectedWalletInfo = getConnectedWallets("user1");
          let id;
          let name;
          if (connectedWalletInfo) {
            id = connectedWalletInfo[index].id;
            name = connectedWalletInfo[index].name;
          }
          return (
            <div>
              <MutationCard data={record} id={id} name={name} />
            </div>
          );
        });
      })}
    </div>
  );
};

const MutationCard = ({ data, id, name }: { data: any; id: any; name: any }) => {
  console.log("data tiap mutation card");
  console.log(data);
  return (
    <div className="flex">
      <div>{name}</div>
      <div>{data.description}</div>
      <div>{data.direction}</div>
      <div>{data.amount}</div>
    </div>
  );
};
export default AllMutations;

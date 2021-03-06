import { BsFillCalendarFill } from "react-icons/bs";
import MutationCard from "../components/MutationCard";
import { useGetMutation } from "../utils/brick";
import { useGetAllUserAccessToken, useGetConnectedWallets } from "../utils/database";

const MutationsOVO = () => {
  const uats = useGetAllUserAccessToken("user1");
  const mutationsData = useGetMutation(uats);

  let connectedWalletInfo = useGetConnectedWallets("user1");

  return (
    <div className="mutation-container">
      <div className="w-[27rem] mt-10">
        <h1 className="font-bold text-3xl text-[#474646] mb-5">Mutasi OVO</h1>
        <h1 className="text-sm text-[#474646]">Lihat mutasi OVO harianmu! Rencanakan keuanganmu dengan mudah </h1>
        <br />
        <div className="flex items-center bg-[#D9D9D9] text-[#5689F5] font-bold w-fit bg-opacity-20 mb-5">
          <div className="mr-2 font-bold">
            <BsFillCalendarFill />
          </div>
          18/06 - 18/06
        </div>
      </div>
      {mutationsData?.map((wallet: any, index: any) => {
        return wallet.data.map((record: any) => {
          console.log("record");
          console.log(record);
          let id;
          let name;
          if (connectedWalletInfo) {
            id = connectedWalletInfo[index].id;
            name = connectedWalletInfo[index].name;
          }
          if (id !== 12) {
            //id ovo 12
            return 0;
          }
          return (
            <div className="flex justify-center items-center">
              <MutationCard data={record} id={id} name={name} />
            </div>
          );
        });
      })}
    </div>
  );
};

export default MutationsOVO;

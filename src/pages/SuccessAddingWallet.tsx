import { useAddConnectedWallet } from "../utils/database";

const SuccessAddingWallet = () => {
  // get from localstorage

  let ls = localStorage.getItem("new-wallet");
  let newWallet = {
    id: 0,
    name: "",
    accessToken: "",
  };
  if (ls) {
    newWallet = JSON.parse(ls);
  }

  useAddConnectedWallet("user1", newWallet);

  return (
    <div className="flex items-center justify-center min-h-[30rem]">
      <div className="text-[2rem] pt-10">Success Adding Wallet!</div>
    </div>
  );
};
export default SuccessAddingWallet;

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
    <div>
      <h1>Success Adding Wallet!</h1>
    </div>
  );
};
export default SuccessAddingWallet;

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetConnectedWallets, removeConnectedWallet } from "../utils/database";

const Settings = () => {
  let wallets = useGetConnectedWallets("user1");
  return (
    <div>
      <h1>Settings</h1>
      <div>
        connected wallet
        {wallets?.map((wallet: any) => {
          return (
            <div className="flex w-full justify-between">
              <div>{wallet.name}</div>
              <Button>
                <div
                  onClick={() => {
                    removeConnectedWallet("user1", wallet.id);
                  }}
                >
                  trash
                </div>
              </Button>
            </div>
          );
        })}
      </div>
      <div>
        <Link to="/logout">
          <Button>logout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;

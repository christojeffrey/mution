// home page

import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import AllConnectedWallets from "../components/ConnectedWallet";
import BalanceBox from "../components/BalanceBox";
import PlanBox from "../components/PlanBox";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* home hero */}
      <div className="p-5">
        <HomeHero />
      </div>
      {/* connected wallet */}
      <div className="p-5">
        <div className="home-headings">
          <h2>Catatan Saldo</h2>
          <button className="text-2xs">
            <Link to="/wallets">Lihat lainnya</Link>
          </button>
        </div>
        <AllConnectedWallets />
      </div>
      {/* connected wallet */}
    </div>
  );
};

export default Home;

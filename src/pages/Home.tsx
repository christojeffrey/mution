// home page

import HomeHero from "../components/HomeHero";
import AllConnectedWallets from "../components/ConnectedWallet";

import BalanceBox from "../components/BalanceBox";
import PlanBox from "../components/PlanBox";
import FinancialPlan from "../components/FinancialPlan";

// import wave from assets

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* home hero */}
      <div className="px-10 mt-10">
        <HomeHero />
      </div>
      {/* home hero */}

      {/* connected wallet */}
      <div className="p-5">
        <AllConnectedWallets />
      </div>
      {/* connected wallet */}

      <div className="p-5">
        <FinancialPlan />
      </div>
    </div>
  );
};

export default Home;

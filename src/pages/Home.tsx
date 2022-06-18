// home page

const Home = () => {
  return (
    <div className="">
      <div className="text-xl">
        <h1>halo user 1</h1>
      </div>
      <div className="text-md p-4">
        <p>bhobobobo</p>
      </div>
      {/* home hero */}
      <div>
        <HomeHero />
      </div>
      {/* home hero */}
      {/* connected wallet */}
      <div>connected wallet and it's balance</div>
      {/* connected wallet */}
    </div>
  );
};

const HomeHero = () => {
  return <div>ini hero yang ada di home. disini ditampilin uang total saat ini.</div>;
};
export default Home;

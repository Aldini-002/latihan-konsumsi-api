import Navbar from "../components/Navbar";
import Search from "../components/Search";
import OnGoing from "../components/home/OnGoing";
import masterImage from "../assets/master.jpg";
import Recomend from "../components/home/Recomend";

const Anime = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-[300px] overflow-hidden bg-contain mb-10"
        style={{ backgroundImage: `url(${masterImage})` }}
      ></div>
      <Search />
      <OnGoing />
      <Recomend />
    </>
  );
};

export default Anime;

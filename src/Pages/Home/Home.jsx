import "../../App.css";
import Products from "../Editor Choice/Products";
import Advertise from "./Advertise";
import Banner from "./Banner";
import Trending from "./Trending";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Advertise />
      <Products />
    </div>
  );
};

export default Home;

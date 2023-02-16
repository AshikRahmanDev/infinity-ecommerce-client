import "../../App.css";
import Products from "../Editor Choice/Products";
import Banner from "./Banner";
import Trending from "./Trending";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Products />
    </div>
  );
};

export default Home;

import { About } from "./About";
import { Banner } from "./Banner";
import { Features } from "./Features";
import { TopFoods } from "./TopFoods";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <TopFoods />
      <About />
    </div>
  );
};

export default Home;

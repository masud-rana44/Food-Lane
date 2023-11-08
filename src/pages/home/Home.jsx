import { Helmet } from "react-helmet";
import { About } from "./About";
import { Banner } from "./Banner";
import { Features } from "./Features";
import { TopFoods } from "./TopFoods";
import { Testimonials } from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Home</title>
      </Helmet>
      <Banner />
      <Features />
      <TopFoods />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;

import banner1 from "../../assets/baner1.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="h-screen bg-[url('https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg')]  bg-center bg-cover ">
      <div className="container mx-auto pt-12 px-3 md:px-0 flex flex-col-reverse lg:flex-row items-center space-x-10">
        <div className="flex-1 text-center lg:text-left">
          <h1
            style={{ lineHeight: "normal" }}
            className="text-3xl md:text-4xl lg:text-[50px] font-bold text-dark-2 my-6"
          >
            BBQ Chicken <span className="text-primary underline">Salad</span>
            <br />
            with Creamy Avocado
          </h1>
          <p className="text-dark-3">
            BBQ Chicken Salad with Creamy Avocado is a delectable dish that
            combines smoky grilled chicken, fresh vegetables, and creamy avocado
            dressing.
          </p>
          <div className="mt-10">
            <Link to="/foods/654b5128972adf9307210ad2">
              <Button label="Order now" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={banner1}
            alt="Food Image"
            className="max-w-[380px] lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

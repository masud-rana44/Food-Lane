import banner1 from "../../assets/baner1.png";
import Button from "../../components/Button";

export const Banner = () => {
  return (
    <div className="h-screen bg-[url('https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg')]  bg-center bg-cover ">
      <div className="container mx-auto pt-12 flex items-center space-x-10">
        <div className="flex-1">
          <h1 className="text-[50px] leading-[52px] font-bold text-dark-2 my-6">
            BBQ Chicken <span className="text-primary underline">Salad</span>{" "}
            with Creamy Avocado
          </h1>
          <p className="text-dark-3">
            Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do eimod
            tempor incididunt ut labore et dolore magna aliqua Quis
          </p>
          <div className="mt-10">
            <Button label="Order now" />
          </div>
        </div>
        <div className="flex-1">
          <img src={banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

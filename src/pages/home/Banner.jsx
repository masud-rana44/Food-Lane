import banner1 from "../../assets/baner1.png";
import Button from "../../components/Button";

export const Banner = () => {
  return (
    <div className="h-screen bg-[url('https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg')]  bg-center bg-cover ">
      <div className="container mx-auto pt-12 px-3 md:px-0 flex flex-col-reverse lg:flex-row items-center space-x-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] leading-[70px] font-bold text-dark-2 my-6">
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

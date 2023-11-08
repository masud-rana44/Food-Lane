import Button from "../../components/Button";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: "https://i.ibb.co/9nV7fFd/5.png",
    title: "Buffet Service",
    description:
      "Qariatureaque ipsa quae a illo inventore veritatis et quasi architecto",
  },
  {
    icon: "https://i.ibb.co/jWJB59j/6.png",
    title: "Online Booking",
    description:
      "Qariatureaque ipsa quae a illo inventore veritatis et quasi architecto",
  },
];

export const About = () => {
  return (
    <div className="mt-28 container mx-auto px-3 md:px-0 flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="https://i.ibb.co/Wv9G8Nx/exparience.png"
          alt="People eating food"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <SectionHeading
          title="Why We Are The Best"
          subtitle="About Us"
          align="left"
        />
        <p className="text-dark-3">
          We take pride in being the best because we prioritize quality, flavor,
          and your dining experience.
          <br /> Our commitment to using the finest ingredients, expert chefs,
          and a warm, welcoming ambiance ensures every visit is a delightful
          journey for your taste buds and a memorable dining experience.
        </p>
        <div className="space-y-6 md:space-y-0 lg:space-y-10 my-8 flex flex-col md:flex-row lg:flex-col items-center lg:items-start text-left">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center max-w-sm space-x-6">
              <img src={service.icon} alt={`Icon of ${service.title}`} />
              <div>
                <h3 className="text-lg font-semibold text-dark-1 mb-1">
                  {service.title}
                </h3>
                <p className="text-dark-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button label="Read More" />
      </div>
    </div>
  );
};

const data = [
  {
    image: "https://i.ibb.co/NtV5QSJ/1.png",
    title: "100% Swiss Quality",
    description:
      "Our commitment to Swiss quality is unwavering. We take pride in delivering products and services that meet the highest standards and reflect the essence of Swiss excellence.",
  },
  {
    image: "https://i.ibb.co/kQ5Zg8q/2.png",
    title: "Organic Production",
    description:
      "Our dedication to organic farming and production processes ensures that our products are not only healthy and environmentally friendly but also adhere to the principles of responsible and ethical food production.",
  },
  {
    image: "https://i.ibb.co/GtVXyPt/3.png",
    title: "Food Law Certified",
    description:
      "Our compliance with food laws and regulations is of utmost importance. We have obtained certifications that demonstrate our commitment to maintaining the highest standards of food safety and legal compliance. ",
  },
  {
    image: "https://i.ibb.co/fpHMZDP/4.png",
    title: "Food Production",
    description:
      "Our food production processes are driven by innovation and a deep understanding of the culinary arts. We take pride in creating products that not only taste exceptional.",
  },
];

export const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-28 container mx-auto px-3 md:px-0">
      {data.map((feature, idx) => (
        <div key={idx} className="group text-center p-8 border">
          <img
            src={feature.image}
            alt="Feature"
            className="h-20 mx-auto mb-6"
          />
          <h2 className="text-xl font-semibold mb-3 text-dark-2 group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h2>
          <p className="text-dark-3">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

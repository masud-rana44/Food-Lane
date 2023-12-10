import sectionBanner from "../../src/assets/section-banner.png";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div
      style={{ backgroundImage: `url(${sectionBanner})` }}
      className="py-20 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-1">{title}</h2>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;

export const SectionHeading = ({ title, subtitle, align = "center" }) => {
  return (
    <div
      className={`mb-8 ${
        align === "center" ? "text-center" : "lg:text-left text-center"
      }`}
    >
      <h4 className="text-primary font-medium">{subtitle}</h4>
      <h2 className="text-4xl font-bold text-dark-2">{title}</h2>
    </div>
  );
};

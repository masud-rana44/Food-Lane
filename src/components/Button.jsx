const Button = ({ label, className, ...rest }) => {
  return (
    <button
      className={`inline-block bg-primary px-4 py-[10px] rounded-[4px] text-white cursor-pointer hover:bg-dark-1 transition-colors duration-300 ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

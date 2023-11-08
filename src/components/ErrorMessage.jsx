export const ErrorMessage = ({ message }) => {
  return (
    <div className="text-primary font-medium text-center">
      {message || "Something went wrong!"}
    </div>
  );
};

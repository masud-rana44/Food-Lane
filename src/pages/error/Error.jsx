import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl">Error</h1>
      <Link to="/" className="block text-2xl text-violet-500 underline">
        Go back home
      </Link>
    </div>
  );
};

export default Error;

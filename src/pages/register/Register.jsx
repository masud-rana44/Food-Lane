import { Helmet } from "react-helmet";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  return (
    <div className="mt-28 relative w-full h-full min-h-[calc(100vh-88px)] object-cover flex items-center justify-center px-4 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Register</title>
      </Helmet>
      <div className=" absolute inset-0" />
      <div className="mx-auto  w-full sm:max-w-sm  rounded-md bg-gray-100   text-white z-[5] ">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;

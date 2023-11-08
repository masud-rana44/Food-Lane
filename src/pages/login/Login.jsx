import { Helmet } from "react-helmet";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative pt-16 w-full h-full min-h-[calc(100vh-88px)] object-cover flex items-center justify-center px-4 mt-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Login</title>
      </Helmet>
      <div className=" absolute inset-0" />
      <div className="mx-auto  w-full sm:max-w-sm min-h-full rounded-md bg-gray-100   text-white z-[5]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

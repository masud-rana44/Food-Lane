import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-2xl font-bold text-primary flex items-center space-x-1"
    >
      <img src={logo} alt="Logo" className="h-12" />
      <span>Food Lane</span>
    </Link>
  );
};

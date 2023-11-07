import { Link } from "react-router-dom";
import { User } from "./User";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const { user } = useAuth();

  const links = [
    { to: "/foods", text: "Foods" },
    { to: "/blogs", text: "Blogs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] z-10">
      <div className="container mx-auto px-3 h-full md:px-0 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-primary flex items-center space-x-1"
        >
          <img src={logo} alt="Logo" className="h-12" />
          <span>Food Lane</span>
        </Link>

        <nav className="space-x-10 flex items-center ">
          <ul className="flex items-center space-x-10 text-primary-dark">
            {links.map((link) => (
              <li
                key={link.to}
                className="font-xl font-medium hover:text-secondary transition-colors"
              >
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
          {user ? <User /> : <Button label="Login" />}
        </nav>
      </div>
    </header>
  );
};

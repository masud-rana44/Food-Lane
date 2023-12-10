import { Link, useLocation } from "react-router-dom";
import { User } from "./User";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { Logo } from "./Logo";

export const Navbar = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  const links = [
    { to: "/", text: "Home" },
    { to: "/foods", text: "All Foods" },
    { to: "/blogs", text: "Blogs" },
  ];

  const allLinks = (
    <>
      {links.map((link) => (
        <li
          key={link.to}
          className={`font-xl font-medium hover:text-primary transition-colors}`}
        >
          <Link className={pathname === link.to && "text-primary"} to={link.to}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] z-10 ${
        pathname !== "/" ? "bg-white shadow-sm border-b" : "bg-black/10"
      }`}
    >
      <div className="container mx-auto px-3 h-full md:px-0 flex items-center justify-between">
        <Logo />
        <nav className="space-x-10 flex items-center ">
          <ul className="flex items-center space-x-10 text-primary-dark">
            {allLinks}
          </ul>
          {user ? (
            <User />
          ) : (
            <Link to="/login">
              <Button label="Login" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

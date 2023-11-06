import { Link } from "react-router-dom";
import { User } from "./User";

export const Navbar = () => {
  const user = false;

  const links = [
    { to: "/foods", text: "Foods" },
    { to: "/blogs", text: "Blogs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] px-10 flex items-center justify-between  z-10">
      <Link to="/" className="text-2xl font-bold text-primary">
        LOGO
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
        {user ? (
          <User />
        ) : (
          <button className="font-xl font-medium bg-secondary px-4 py-2  rounded-md text-white hover:opacity-75 transition">
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

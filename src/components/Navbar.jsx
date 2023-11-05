import { Link } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { to: "/foods", text: "Foods" },
    { to: "/blogs", text: "Blogs" },
    { to: "/login", text: "Login" },
    { to: "/profile", text: "Profile" },
  ];

  return (
    <header className="h-20 px-10 flex items-center justify-between bg-violet-500 text-white">
      <Link to="/" className="text-2xl font-bold">
        LOGO
      </Link>
      <nav>
        <ul className="flex items-center space-x-10">
          {links.map((link) => (
            <li key={link.to} className="font-xl font-medium">
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

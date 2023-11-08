import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const UserDropdown = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const { user, logOut } = useAuth();

  const items = [
    {
      label: "My added food",
      path: `/foods/users/${user.email}`,
    },
    {
      label: "Add new food",
      path: "/foods/user/new",
    },
    {
      label: "My Orders",
      path: "/orders",
    },
  ];

  return (
    <div>
      {isDropdownOpen && (
        <div className="z-10 absolute right-0  py-2 w-[220px] bg-white divide-y divide-gray-100 rounded-md shadow ">
          <ul
            className="py-4 text-sm text-gray-700 "
            aria-labelledby="dropdownHoverButton"
          >
            {items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-dark-2 "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={logOut}
            className="block px-4 py-2 bg-primary text-white w-full  hover:bg-primary-dark "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

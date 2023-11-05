import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export const User = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button type="button" id="dropdownHoverButton" onClick={toggleDropdown}>
        <img
          src={user.photoURL}
          className="h-10 w-10 rounded-full border-[3px] bg-white object-cover cursor-pointer"
        />
      </button>

      {isDropdownOpen && (
        <div className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <Link
                to="/favorites"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My added food
              </Link>
            </li>
            <li>
              <Link
                to="/foods/user/new"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Add new food
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Orders
              </Link>
            </li>
            <li>
              <button
                to="/"
                onClick={logOut}
                className="block px-4 py-2 bg-violet-500 text-white w-full rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

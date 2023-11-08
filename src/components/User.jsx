import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { UserDropdown } from "./UserDropdown";

export const User = () => {
  const { user } = useAuth();
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
      <UserDropdown
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </div>
  );
};

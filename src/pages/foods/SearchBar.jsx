import { BsSearch as Search } from "react-icons/bs";

export const SearchBar = ({ value, setValue, onSearch }) => {
  return (
    <div className="relative w-full mb-6">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch();
        }}
        className="w-full mx-auto pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200 py-2 px-4 "
        placeholder="Search for a food"
      />
    </div>
  );
};

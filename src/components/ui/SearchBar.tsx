import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "./button";

const SearchBar = () => {
  return (
    <div className="flex items-center border pl-4 gap-2 bg-white/70 lg:bg-white/40 border-gray-500/30 h-[46px] rounded-full overflow-hidden w-full">
      <SearchIcon className="w-5 h-5 mx-2 text-gray-700" />
      <input
        type="text"
        className="w-full h-full outline-none text-sm text-gray-500 placeholder-gray-500"
        placeholder="Search on Keikojulia"
      />
      {/* <button
        type="submit"
        className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white mr-[5px]">
        Search
      </button> */}
      <Button className="bg-green-600 hover:bg-green-700 w-32 h-9 rounded-full text-sm text-white mr-[5px]">
        Daftar
      </Button>
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  value: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setInput, value }) => {
  const [isSearchBarEnable, setIsSearchBarEnable] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-auto items-center rounded-2xl border px-2 py-2 md:p-4">
        <span
          className="cursor-pointer"
          onClick={() => setIsSearchBarEnable((prev) => !prev)}
        >
          <IoSearchOutline size={20} />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          value={value}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search category"
          className={`ml-2 h-6 px-2 text-sm md:px-2 ${
            isSearchBarEnable ? "w-full" : "hidden"
          }`}
        />
      </div>
    </>
  );
};

export default SearchBar;

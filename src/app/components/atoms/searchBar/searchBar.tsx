import { FunctionComponent } from "react";
import searchBarProps from "../../../types/searchBarProps";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar: FunctionComponent<searchBarProps> = ({label, onClear, placeholder = "Search", ...rest}) => {
    return (
        <div className="relative z-100 c-searchbar ">
            <input
                type="text"
                className="w-56 h-[2.25rem]  rounded-full  pr-8 pl-4 border-none focus:w-72 "
                placeholder={placeholder}
            />
            <button type="button" className="absolute inset-y-0 right-[8px] flex items-center px-2 bg-white hover:bg-gray-100 inset-y-4">
             <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBar;

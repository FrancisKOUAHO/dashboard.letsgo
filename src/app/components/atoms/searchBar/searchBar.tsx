import React from "react";
import searchInputProps from "../../../types/searchInputProps";
import { AiOutlineSearch } from "react-icons/ai";

type SearchBarProps = searchInputProps & {
    value: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
                                                 label,
                                                 onClear,
                                                 placeholder = "Search",
                                                 value,

                                             }) => {
    return (
        <div className="relative z-100">
            <input
                type="text"
                className="border rounded-lg py-2 px-4 pr-12 focus:outline-none focus:ring focus:border-blue-300"
                placeholder={placeholder}
                value={value}
            />
            <button type="button" className="absolute inset-y-0 right-[8px] flex items-center px-2 bg-white hover:bg-gray-100">
             <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBar;

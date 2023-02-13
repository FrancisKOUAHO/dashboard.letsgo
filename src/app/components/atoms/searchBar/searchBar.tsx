import { FunctionComponent } from "react";
import searchBarProps from "../../../types/searchBarProps";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "@/app/components/atoms/input/input";

const SearchBar: FunctionComponent<searchBarProps> = ({label, onClear, placeholder = "Search", ...rest}) => {
    return (
        <div className={`c-searchbar`} >
            <Input
                type="text"
                placeholder={placeholder}
            />
            <button type="button" className="absolute inset-y-0 right-[8px] flex items-center px-2 bg-white hover:bg-gray-100 inset-y-4">
             <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBar;

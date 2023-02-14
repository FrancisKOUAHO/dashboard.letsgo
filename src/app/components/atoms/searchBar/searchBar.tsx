import { FunctionComponent } from "react";
import searchBarProps from "../../../types/searchBarProps";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "@/app/components/atoms/input/input";

const SearchBar: FunctionComponent<searchBarProps> = ({label, onClear, placeholder = "Search", ...rest}) => {
    return (
        <div className="c-searchbar" >
            <Input
                type="text"
                placeholder={placeholder}
                className="c-searchbar__input"
            />
            <button type="button" className="search-button">
             <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBar;

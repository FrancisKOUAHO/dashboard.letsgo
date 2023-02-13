import SearchBar from "./searchBar";

export default {
    title: "Atoms/searchBar",
    component: SearchBar,
};

const searchBarRoundedBasic = (args) => <SearchBar {...args} />;

export const Default = searchBarRoundedBasic.bind({});
Default.args = {
    label: "Search",
    placeholder: "Search",
    value: "",
};


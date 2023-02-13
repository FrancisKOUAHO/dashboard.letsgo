import SearchBar from "./searchBar";

export default {
    title: "Atoms/searchBar",
    component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Search",
    placeholder: "Search",
    value: "",
    onChange: action("onChange"),
    onClick: action("onClick"),
};


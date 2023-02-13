type searchBarProps = {
    label?: string;
    onClear?: () => void;
    onChange?: (value: string) => void
    clearButton?: boolean
    placeholder?: string;
};

export default searchBarProps;

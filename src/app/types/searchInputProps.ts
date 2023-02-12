type searchInputProps = {
    label?: string;
    onClear?: (() => void);
    placeholder?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => boolean;
};

export default searchInputProps;

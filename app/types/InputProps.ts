type InputProps = {
  type?: 'text' | 'password' | 'checkbox';
  label?: string;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => boolean;
};

export default InputProps;

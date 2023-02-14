import React from "react";

type InputProps = {
  type?: 'text' | 'password' | 'checkbox';
  label?: string;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => boolean;
  name?: string;
  className?: string
};

export default InputProps;

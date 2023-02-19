import React from "react";

type InputProps = {
  type?: 'text' | 'password' | 'checkbox' | 'date' | 'email' | 'number' | 'tel' | 'url' | 'time';
  label?: string;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => boolean;
  name?: string;
  className?: string
};

export default InputProps;

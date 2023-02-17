import React from 'react';

type ButtonProps = {
  href?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'greyC' ;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string,
  name?: string,
};

export default ButtonProps;

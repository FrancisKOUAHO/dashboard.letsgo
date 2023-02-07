import React from 'react';

type ButtonProps = {
  href?: string;
  color?: 'primary' | 'secondary' | 'default';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export default ButtonProps;

import React, {CSSProperties} from 'react';

type ButtonProps = {
  href?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'greyC' ;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string,
  name?: string,
  isActive?: boolean;
  minWidth?: number;
  minHeight?: number;
  size?: string;
  w?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean,
  style?: CSSProperties,
};

export default ButtonProps;

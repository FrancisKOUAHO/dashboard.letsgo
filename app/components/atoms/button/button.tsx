import {FunctionComponent} from "react";
import ButtonProps from "../../../types/ButtonProps";

const Button: FunctionComponent<ButtonProps> = ({children, onClick, href, color= 'primary'}) => {
  if (!href) return <button className={`c-button c-button--${color}`} onClick={onClick}>{children}</button>
  return <a href={href}>{children}</a>
}

export default Button

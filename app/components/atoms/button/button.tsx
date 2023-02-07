import { FunctionComponent } from "react";
import ButtonProps from "../../../types/ButtonProps";

const Button: FunctionComponent<ButtonProps> = ({ children }) =>  <button> {children}</button>

export default Button

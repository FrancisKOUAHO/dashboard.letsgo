import { FunctionComponent } from "react";
import InputTextProps from "../../../types/InputTextProps";

const InputText: FunctionComponent<InputTextProps> = ({children}) => {
  return <input type="text" id="fname" name="fname"/>
}

export default InputText

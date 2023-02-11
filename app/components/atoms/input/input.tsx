import { FunctionComponent } from "react";
import InputProps from "../../../types/InputProps";

const Input: FunctionComponent<InputProps> = ({type, label, placeholder, name}) => {

  if (type == "text")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={`c-input`} placeholder={placeholder} />
      </>
    )

  if(type == "password")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={`c-input`} placeholder={placeholder} />
      </>
    )

  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} />
    </>
  )
}

export default Input

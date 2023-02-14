import { FunctionComponent } from "react";
import InputProps from "../../../types/InputProps";

const Input: FunctionComponent<InputProps> = ({className, style, type, label, placeholder, name}) => {

  if (type == "text")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={className} style={style} placeholder={placeholder} />
      </>
    )

  if(type == "password")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={className} style={style} placeholder={placeholder} />
      </>
    )

  return (
    <>
      <label>{label}</label>
      <input name={name} type={type}  className={className} style={style} placeholder={placeholder} />
    </>
  )
}

export default Input

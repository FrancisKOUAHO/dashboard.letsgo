import { FunctionComponent } from "react";
import InputProps from "@/types/InputProps";

const Input: FunctionComponent<InputProps> = ({className, type, label, placeholder, name, pattern}) => {

  if (type == "text")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={className} placeholder={placeholder} pattern={pattern} />
      </>
    )

  if(type == "password")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={className} placeholder={placeholder} pattern={pattern} />
      </>
    )

  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} className={className} placeholder={placeholder} pattern={pattern} />
    </>
  )
}

export default Input

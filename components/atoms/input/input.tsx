import { FunctionComponent } from "react";
import InputProps from "@/types/InputProps";

const Input: FunctionComponent<InputProps> = ({className, type, label, placeholder, name}) => {

  if (type == "text")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={className} placeholder={placeholder} />
      </>
    )

  if(type == "password")
    return (
      <>
        <label>{label}</label>
        <input name={name} type={type} className={className} placeholder={placeholder} />
      </>
    )

  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} className={className} placeholder={placeholder} />
    </>
  )
}

export default Input

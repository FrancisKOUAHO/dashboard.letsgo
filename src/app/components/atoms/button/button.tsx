import { FunctionComponent } from "react";
import ButtonProps from "../../../types/ButtonProps";



const buttonColors = {
  primary: '#007bff',
  secondary: '#000000FF',
  danger: '#dc3545'
}

const ButtonIcon: FunctionComponent<ButtonProps> = ({className, name, children, onClick, href, color = 'primary', type}) =>{
  const buttonStyle = {
    color: buttonColors[color]
  }
  return (

      <button type={type} className={className} onClick={onClick} style={buttonStyle}>
        {children}{name}
      </button>
  )
}


const Button: FunctionComponent<ButtonProps> = ({children, onClick, href, color= 'primary', type}) => {
  if (!href) return <button type={type} className={`c-button c-button--${color}`} onClick={onClick}>{children}</button>
  return <a href={href}>{children}</a>
}



export {
  Button,
  ButtonIcon
}

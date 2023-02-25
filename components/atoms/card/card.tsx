import {FunctionComponent} from "react";
import CardProps from "@/types/CardProps";

const Card: FunctionComponent<CardProps> = ({className, children, children2}) => {
  return (
    <div className={className}>
      {children}
      {children2}
    </div>
  )
}

export default Card

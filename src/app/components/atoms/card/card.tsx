import {FunctionComponent} from "react";
import CardProps from "../../../types/CardProps"
import {ButtonIcon} from "@/app/components/atoms/button/button";
import {AiOutlineEye, AiOutlineForm, AiOutlineDelete} from "react-icons/ai";
const Card: FunctionComponent<CardProps> = ({ className, children}) => {
    return(
            <div className={className}>
                {children}
                <div className="c-flex-button">
                    <div>
                        <ButtonIcon className="c-button-icon" color='#4376FF'  name="apercu"><AiOutlineEye className="all-icon"/></ButtonIcon>
                    </div>
                    <div>
                        <ButtonIcon  className="c-button-icon" name="Modifier"><AiOutlineForm className="all-icon"/></ButtonIcon>
                        <ButtonIcon  className="c-button-icon" color='red' name="Supprimer"><AiOutlineDelete className="all-icon"/></ButtonIcon>
                    </div>
                </div>
            </div>
    )
}

export default Card

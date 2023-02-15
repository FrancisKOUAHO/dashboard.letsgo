import {FunctionComponent} from "react";
import CardProps from "../../../types/CardProps"
import IconText from "@/app/components/atoms/iconText/iconText";
import {ButtonIcon} from "@/app/components/atoms/button/button";
import {AiOutlineEye, AiOutlineForm, AiOutlineDelete} from "react-icons/ai";
const Card: FunctionComponent<CardProps> = ({ className, image, price, numberOfPlaces, children}) => {
    return(
            <div className={className}>
                {children}
                <IconText/>
                <div className="c-flex-button">
                    <div>
                        <ButtonIcon className="c-button-icon" name="apercu"><AiOutlineEye className="all-icon"/></ButtonIcon>
                    </div>
                    <div>
                        <ButtonIcon  className="c-button-icon" color="secondary" name="Modifier"><AiOutlineForm className="all-icon"/></ButtonIcon>
                        <ButtonIcon  className="c-button-icon" color="danger" name="Supprimer"><AiOutlineDelete className="all-icon"/></ButtonIcon>
                    </div>
                </div>
            </div>
    )
}

export default Card

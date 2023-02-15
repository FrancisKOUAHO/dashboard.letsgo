import {FunctionComponent} from "react";
import CardProps from "../../../types/CardProps"
import IconText from "@/app/components/atoms/iconText/iconText";
import {ButtonIcon} from "@/app/components/atoms/button/button";
import {AiOutlineEye} from "react-icons/ai";
const Card: FunctionComponent<CardProps> = ({ className, image, price, numberOfPlaces, children}) => {
    return(
            <div className={className}>
                {children}
                <IconText/>
                <div className="c-flex-button">
                    <div>
                        <ButtonIcon name="apercu"/>
                    </div>
                    <div>
                        <ButtonIcon  color="secondary" name="Modifier"/>
                        <ButtonIcon color="danger" name="Supprimer"/>
                    </div>
                </div>
            </div>
    )
}

export default Card

import CardUsers from "./cardUsers";
import Image from "next/image";
import Zola from "../../../assets/profile-pic.png"
export const BaseCardUsers = () =>{
    return(
        <CardUsers className="c-cardUsers" name="Zola Voldi" role="admin">
            <Image className="cardUsers-Image" src={Zola} width="100" height="100" alt=""/>
        </CardUsers>
        )
}

export default {
    title: "Atoms/CardUsers",
    component: CardUsers,
}

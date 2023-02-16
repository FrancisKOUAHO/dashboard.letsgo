import Card from "./card";
import Image from "next/image";
import Avatar from '../../../assets/pexel.jpg';
export const BaseCard = () => {
    return(
        <Card className="c-card">
            <Image  src={Avatar} width="100" height="100"/>
        </Card>
    )
}
export default {
    title: "Atoms/Cards",
    component: Card,
}

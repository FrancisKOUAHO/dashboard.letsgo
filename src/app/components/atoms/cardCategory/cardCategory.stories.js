import CardCategory from "./cardCategory";
import Image from "next/image";
import Are from "../../../assets/pexel.jpg";

export const BaseCardCategory = () => {
    return(
        <CardCategory className="c-cardCategory" name="Ateliers" slug="category" status="Active">
            <Image className="card-Image" src={Are} width="100" height="100"/>
        </CardCategory>
    )
}

export default {
    title: "Atoms/CardCategory",
    component: CardCategory,
}

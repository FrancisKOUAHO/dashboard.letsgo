import CardStats from "./cardStats";
import {AiOutlineShoppingCart, AiOutlineDesktop, AiOutlineUser} from "react-icons/ai";

const icons = {
    shoppingCart: <AiOutlineShoppingCart  className="AiOutlineShoppingCart"/>,
    desktop: <AiOutlineDesktop className="AiOutlineDesktop"/>,
    user: <AiOutlineUser className="AiOutlineUser" />
};
export const BaseCardNombreDeReservation = () => {
    return <CardStats className="c-cardStats" icon={icons.shoppingCart} number="8" numberofpourcents="0" titleCards="Nombre de réservations" />;
};

export const BaseCardNombreOffres = () => {
    return <CardStats className="c-cardStats" icon={icons.desktop} number="0" numberofpourcents="10" titleCards="Nombre d'offres" />;

}

export const BaseCardNombreVisiteurs = () => {
    return <CardStats className="c-cardStats" icon={icons.user} number="0" numberofpourcents="0" titleCards="Nombre de visiteurs" />;

}
export default {
    title: "Atoms/CardStats",
    component: CardStats,
}

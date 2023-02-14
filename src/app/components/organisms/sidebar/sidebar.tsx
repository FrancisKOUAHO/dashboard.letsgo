import { FunctionComponent } from "react";
import SidebarProps from "../../../types/SidebarProps";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineProfile, AiOutlineUser, AiOutlineTag, AiOutlineMessage, AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
    return (
      <>
        <div className="c-sidebar">
          <Link href="#">
            <AiOutlineHome/>
            Tableau de bord
          </Link>
          <Link href="#">
            <AiOutlineAppstore/>
            Catégories
          </Link>
          <Link href="#">
            <AiOutlineProfile/>
            Réservations
          </Link>
          <Link href="#">
            <AiOutlineUser/>
            Utilisateurs
          </Link>
          <Link href="#">
            <AiOutlineTag/>
            Activités
          </Link>
          <Link href="#">
            <AiOutlineMessage/>
            Chat
          </Link>
          <Link href="#">
            <AiOutlineCalendar/>
            Calendrier
          </Link>
        </div>
      </>
    )
}

export default Sidebar

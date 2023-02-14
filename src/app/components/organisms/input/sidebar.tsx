import { FunctionComponent } from "react";
import SidebarProps from "../../../types/SidebarProps";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineProfile, AiOutlineUser, AiOutlineTag, AiOutlineMessage, AiOutlineCalendar } from "react-icons/ai";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
    return (
      <>
        <div className="c-sidebar">
          <a href="#">
            <AiOutlineHome/>
            Tableau de bord
          </a>
          <a href="#">
            <AiOutlineAppstore/>
            Catégories
          </a>
          <a href="#">
            <AiOutlineProfile/>
            Réservations
          </a>
          <a href="#">
            <AiOutlineUser/>
            Utilisateurs
          </a>
          <a href="#">
            <AiOutlineTag/>
            Activités
          </a>
          <a href="#">
            <AiOutlineMessage/>
            Chat
          </a>
          <a href="#">
            <AiOutlineCalendar/>
            Calendrier
          </a>
        </div>
      </>
    )
}

export default Sidebar

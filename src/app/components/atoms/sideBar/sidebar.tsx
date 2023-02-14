import {FunctionComponent} from "react";
import SidebarProps from "../../../types/SidebarProps";
import {
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineProfile,
  AiOutlineTag,
  AiOutlineUser
} from "react-icons/ai";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
    return (
        <div className="c-sidebar">
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineHome/>
            Tableau de bord
          </a>
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineAppstore/>
            Catégories
          </a>
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineProfile/>
            Réservations
          </a>
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineUser/>
            Utilisateurs
          </a>
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineTag/>
            Activités
          </a>
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineMessage/>
            Chat
          </a>
          <a href="src/app/components/atoms/sidebar#">
            <AiOutlineCalendar/>
            Calendrier
          </a>
        </div>
    )
}

export default Sidebar

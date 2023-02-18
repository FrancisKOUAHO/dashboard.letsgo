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
import Link from "next/link";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
    return (
        <div className="c-sidebar">
          <a href="/admin/dashboard">
            <AiOutlineHome/>
            Tableau de bord
          </a>
          <Link href={'/admin/dashboard/categories'}>
            <AiOutlineAppstore/>
            Catégories
          </Link>
          <Link href={'/admin/dashboard/reservations'}>
            <AiOutlineProfile/>
            Réservations
          </Link>
          <a href="/admin/dashboard/users">
            <AiOutlineUser/>
            Utilisateurs
          </a>
          <Link href={'/admin/dashboard/activities'}>
            <AiOutlineTag/>
            Activités
          </Link>
          <a href="/admin/dashboard/chat">
            <AiOutlineMessage/>
            Chat
          </a>
          <a href="/admin/dashboard/calendar">
            <AiOutlineCalendar/>
            Calendrier
          </a>
        </div>
    )
}

export default Sidebar

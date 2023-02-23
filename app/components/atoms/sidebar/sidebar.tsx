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
          <Link href={'/admin/dashboard'}>
            <AiOutlineHome/>
            Tableau de bord
          </Link>
          <Link href={'/admin/dashboard/categories'}>
            <AiOutlineAppstore/>
            Catégories
          </Link>
          <Link href={'/admin/dashboard/reservations'}>
            <AiOutlineProfile/>
            Réservations
          </Link>
          <Link href={'/admin/dashboard/users'}>
            <AiOutlineUser/>
            Utilisateurs
          </Link>
          <Link href={'/admin/dashboard/activities'}>
            <AiOutlineTag/>
            Activités
          </Link>
          <Link href={'/admin/dashboard/chat'}>
            <AiOutlineMessage/>
            Chat
          </Link>
          <Link href={'/admin/dashboard/calendar'}>
            <AiOutlineCalendar/>
            Calendrier
          </Link>
        </div>
    )
}

export default Sidebar

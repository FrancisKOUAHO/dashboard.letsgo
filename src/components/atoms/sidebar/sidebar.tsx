import {FunctionComponent, useEffect, useState} from "react";
import SidebarProps from "../../../../app/types/SidebarProps";
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
  const [userRole, setUserRole] = useState('admin')

  useEffect(() => {
    const user: any = localStorage.getItem('userRole')
    setUserRole(user)
  }, [])

  return (
    <>
      {
        userRole === 'admin' ? (
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
        ) : (
          <div className="c-sidebar">
            <Link href={'/partner/dashboard'}>
              <AiOutlineHome/>
              Tableau de bord
            </Link>
            <Link href={'/partner/dashboard/reservations'}>
              <AiOutlineProfile/>
              Réservations
            </Link>
            <Link href={'/partner/dashboard/users'}>
              <AiOutlineUser/>
              Utilisateurs
            </Link>
            <Link href={'/partner/dashboard/activities'}>
              <AiOutlineTag/>
              Activités
            </Link>
            <Link href={'/partner/dashboard/chat'}>
              <AiOutlineMessage/>
              Chat
            </Link>
          </div>
        )
      }
    </>
    )
}

export default Sidebar

import {FunctionComponent, useEffect, useState} from "react";
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
import SidebarProps from "@/types/SidebarProps";
import {useAuth} from "@/context/AuthContext";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
  const {user} = useAuth()

  return (
    <>
      {
        user?.role === 'partner' ? (
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
        ) : (
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
    </>
    )
}

export default Sidebar

"use client";

import { FunctionComponent, useState } from "react";

import Link from "next/link";
import {
  Grid3X3,
  LayoutDashboard,
  MousePointerSquare,
  Tv2,
  Users,
} from "lucide-react";

import { usePathname } from "next/navigation";

const Sidebar: FunctionComponent = () => {
  const pathname = usePathname();

  const [hide, sethide] = useState<boolean>(false);

  const toggle = () => sethide(!hide);

  return (
    <section className="c-sidebar">
      <div className="mb-10">
        <Link href="/admin/dashboard">
          <img
            src="/LetsGo_white.png"
            alt="LetsGo Logo"
            width={50}
            height={50}
          />
          <span>Let&apos;s Go</span>
        </Link>
      </div>
      <Link
        href="/admin/dashboard"
        className={pathname === "/admin/dashboard" ? "active" : ""}
        onClick={() => sethide(false)}
      >
        <LayoutDashboard />
        Dashboard
      </Link>
      <Link
        href="/admin/dashboard/users"
        className={pathname === "/dashboard/team" ? "active" : ""}
        onClick={() => sethide(false)}
      >
        <Users />
        Utilisateurs
      </Link>
      <button
        onClick={toggle}
        className={
          pathname === "/dashboard/document" ||
          pathname === "/dashboard/document/add" ||
          pathname === "/dashboard/document/download"
            ? "active"
            : ""
        }
      >
        <MousePointerSquare />
        Activités
      </button>
      <div
        className={
          !hide
            ? "c-sidebar__sub-menu c-sidebar__sub-menu--hide"
            : "c-sidebar__sub-menu c-sidebar__sub-menu--link active"
        }
      >
        <Link
          href="/admin/dashboard/categories"
          className={pathname === "/admin/dashboard/categories" ? "active" : ""}
        >
          <Tv2 />
          Catégories
        </Link>
        <Link
          href="/admin/dashboard/reservations"
          className={
            pathname === "/admin/dashboard/reservations" ? "active" : ""
          }
        >
          <Tv2 />
          Réservations
        </Link>
        <Link
          href="/admin/dashboard/activities"
          className={pathname === "/admin/dashboard/activities" ? "active" : ""}
        >
          <Grid3X3 />
          Activité
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;

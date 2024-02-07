"use client";

import { FunctionComponent, useState } from "react";

import Link from "next/link";
import {
  Grid3X3,
  LayoutDashboard,
  MousePointerSquare,
  Tv2,
} from "lucide-react";

import { usePathname } from "next/navigation";

const Sidebar: FunctionComponent = () => {
  const pathname = usePathname();

  const [hide, sethide] = useState<boolean>(false);

  const toggle = () => sethide(!hide);

  return (
    <section className="c-sidebar">
      <Link
        href="/partner/dashboard"
        className={pathname === "/admin/dashboard" ? "active" : ""}
        onClick={() => sethide(false)}
      >
        <LayoutDashboard />
        Dashboard
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
          href="/partner/dashboard/reservations"
          className={
            pathname === "/partner/dashboard/reservations" ? "active" : ""
          }
        >
          <Tv2 />
          Réservations
        </Link>
        <Link
          href="/partner/dashboard/activities"
          className={
            pathname === "/partner/dashboard/activities" ? "active" : ""
          }
        >
          <Grid3X3 />
          Activité
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;

/*import Image from "next/image";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import Input from "@/src/components/atoms/input/input";
import Dropdown from "@/src/components/atoms/dropdown/dropdown";
import Link from "next/link";
import { useAuth } from "@/src/context/AuthContext";

const TopBar = () => {
  const { logout } = useAuth();

  return (
    <nav className="c-topbar">
      <div className="c-below-topbar"></div>
      <div className="c-above-topbar">
        <div className="c-above-topbar-left">
          <Link href={"/admin/dashboard"}>
            <Image
              src="/LetsGo_white.png"
              alt="LetsGo Logo"
              width="35"
              height="100"
            />
            <span>Let&apos;s Go</span>
          </Link>
        </div>
        <div className="c-above-topbar-right">
          <Input
            className="c-input c-input-rounded"
            type={"text"}
            placeholder={"Rechercher..."}
          />
          <div className="c-notification">
            <AiOutlineBell />
          </div>
          <div className="c-profile-avatar">
            <Dropdown
              list={[
                {
                  label: "Francis KOUAHO",
                  link: "/booking",
                  icon: (
                    <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl" />
                  ),
                },
                {
                  label: "Profil",
                  link: "/customer-history",
                  icon: (
                    <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl" />
                  ),
                },
                {
                  label: "Aide",
                  link: "/account/profile",
                  icon: (
                    <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl" />
                  ),
                },
                {
                  label: "Déconnexion",
                  icon: (
                    <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl" />
                  ),
                  onclick: () => logout(),
                },
              ]}
            >
              <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl" />
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;*/

"use client";

import { usePathname } from "next/navigation";
import Dropdown from "@/src/components/atoms/dropdown/dropdown";
import { Bell, BellDot, LogOut, User, UserCircle, XCircle } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const pathname = usePathname();
  const [isNotification, setIsNotification] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [notifications, setNotifications] = useState([
    {
      title: "Nouvelle demande de devis",
      description: "Une nouvelle demande de devis a été créée",
      active: `${isActive}`,
      time: "Il y a 2 minutes",
    },
    {
      title: "Nouvelle demande de devis",
      description: "Une nouvelle demande de devis a été créée",
      active: `${isActive}`,
      time: "Il y a 5 minutes",
    },
  ]);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toogleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="c-topbar">
      <div className="c-topbar__logo">
        <h2>{pathname.slice(1)}</h2>
      </div>

      <div className="c-topbar__container">
        <div className="c-topbar__container__left">
          <div className="c-notification">
            {notifications && notifications[0].active ? (
              <BellDot
                onClick={toggleNotification}
                className="cursor-pointer text-red-500"
              />
            ) : (
              <Bell onClick={toggleNotification} className="cursor-pointer" />
            )}

            <div
              className={`${
                isNotificationOpen
                  ? "c-notification-list--open"
                  : "c-notification-list"
              }`}
            >
              <div className="c-notification-list-item-header">
                <p>Notification</p>
                <XCircle
                  size={20}
                  color="white"
                  onClick={toggleNotification}
                  className="cursor-pointer"
                />
              </div>
              {notifications.map((notification, index) => (
                <div key={index}>
                  <div
                    className={`c-notification-list-item ${
                      isActive && "c-notification-list-item--active"
                    }`}
                    onClick={toogleActive}
                  >
                    <p className="c-notification-list-item-title">
                      {notification.title}
                    </p>
                    <div className="c-notification-list-item-description">
                      <p>{notification.description}</p>
                      <span>{notification.time}</span>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="c-topbar__container__right">
          <div className="c-topbar__container__right__item">
            <div className="c-profile-avatar">
              <Dropdown
                list={[
                  {
                    label: "f.kouaho@skipperndt.com",
                    icon: <User />,
                  },
                  {
                    label: "Déconnexion",
                    icon: <LogOut />,
                    onclick: () => {},
                  },
                ]}
              >
                <UserCircle />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;

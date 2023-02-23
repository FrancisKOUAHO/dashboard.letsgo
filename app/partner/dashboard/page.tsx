"use client"

import LayoutCustom from "app/layouts/layoutCustom";
import { IsAuthorized } from "app/utils/auth";
import React from "react";
import CardStats from "../../components/atoms/cardstats/cardStats";
import {AiOutlineDesktop, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";

const icons = {
  shoppingCart: <AiOutlineShoppingCart  className="AiOutlineShoppingCart"/>,
  desktop: <AiOutlineDesktop className="AiOutlineDesktop"/>,
  user: <AiOutlineUser className="AiOutlineUser" />
};


const Page = () => {
  const authorized = IsAuthorized('partner');

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <LayoutCustom>
      <div className="c-categories">
        <h2>{"Bilan d'affaires"}</h2>
        <div className="c-users__users">
          <div className="container-card">
            <CardStats className="c-cardStats" icon={icons.shoppingCart} number="8" numberofpourcents="0" titleCards="Nombre de réservations" />
            <CardStats className="c-cardStats" icon={icons.desktop} number="0" numberofpourcents="10" titleCards="Nombre d'offres" />
            <CardStats className="c-cardStats" icon={icons.user} number="0" numberofpourcents="0" titleCards="Nombre de visiteurs" />

          </div>
        </div>
      </div>
    </LayoutCustom>
  )
}

export default Page

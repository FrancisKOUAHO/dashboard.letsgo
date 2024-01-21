"use client"

import React from "react";
import {AiOutlineEuro, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import LayoutCustom from "@/layouts/layoutCustom";
import CardStats from "@/components/atoms/cardstats/cardStats";
import {useReservations} from "@/hooks/useReservations";
import useIsAuthorized from "@/utils/auth";

const icons = {
  shoppingCart: <AiOutlineShoppingCart  className="AiOutlineShoppingCart"/>,
  euro: <AiOutlineEuro className="AiOutlineDesktop"/>,
  user: <AiOutlineUser className="AiOutlineUser" />
};


const Page = () => {
  const isAuthorized = useIsAuthorized('partner');

  const {data, status, error} = useReservations()
  const totalReservations = data?.data?.length || 0;

  let totalPrice = 0;
  if (data && data.data) {
    for (let i = 0; i < totalReservations; i++) {
      const reservation = data?.data[i];
      const price = parseFloat(reservation.total_price);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    }
  }

  return (
      <LayoutCustom>
        <div className="c-categories">
          <h2>{"Bilan d'affaires"}</h2>
          <div className="c-users__users">
            <div className="container-card">
              <CardStats className="c-cardStats" icon={icons.shoppingCart} number={totalReservations} numberofpourcents="0" titleCards="Nombre de réservations" />
              <CardStats className="c-cardStats" icon={icons.euro} number={totalPrice} numberofpourcents="0" titleCards="Chiffres d'affaires"  />
              <CardStats className="c-cardStats" icon={icons.user} numberofpourcents="0" titleCards="Nombre de visiteurs" />
            </div>
          </div>
        </div>
      </LayoutCustom>
  )
}

export default Page

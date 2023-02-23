"use client"

import LayoutCustom from "app/layouts/layoutCustom";
import { IsAuthorized } from "app/utils/auth";
import React from "react";
import CardStats from "../../components/atoms/cardstats/cardStats";
import {AiOutlineEuro, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import {useReservations} from "../../hooks/useReservations";

const icons = {
  shoppingCart: <AiOutlineShoppingCart  className="AiOutlineShoppingCart"/>,
  euro: <AiOutlineEuro className="AiOutlineDesktop"/>,
  user: <AiOutlineUser className="AiOutlineUser" />
};


const Page = () => {
  const authorized = IsAuthorized('admin');

  const {data, status, error} = useReservations()
  const totalReservations = data?.data.length

  let  totalPrice = 0;

  for (let i = 0; i < totalReservations; i++) {
    const reservation = data?.data[i];
    const price = parseFloat(reservation.total_price);
    totalPrice += price;
  }

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <LayoutCustom>
      <div className="c-categories">
        <h2>{"Bilan d'affaires"}</h2>
        <div className="c-users__users">
          <div className="container-card">
            <CardStats className="c-cardStats" icon={icons.shoppingCart} number={totalReservations} numberofpourcents="0" titleCards="Nombre de réservations" />
            <CardStats className="c-cardStats" icon={icons.euro} number={totalPrice} numberofpourcents="0" titleCards="Chiffres d'affaires" />
            {/*<CardStats className="c-cardStats" icon={icons.user} number={totalReservations} numberofpourcents="0" titleCards="Nombre de visiteurs" />*/}

          </div>
        </div>
      </div>
    </LayoutCustom>
  )
}

export default Page

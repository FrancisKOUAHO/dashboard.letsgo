"use client"

import React from "react";
import {AiOutlineEuro, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import CardStats from "@/components/atoms/cardstats/cardStats";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import {IsAuthorized} from "@/utils/auth";
import {useReservations} from "@/hooks/useReservations";
import LayoutCustom from "@/layouts/layoutCustom";

const icons = {
  shoppingCart: <AiOutlineShoppingCart  className="AiOutlineShoppingCart"/>,
  euro: <AiOutlineEuro className="AiOutlineDesktop"/>,
  user: <AiOutlineUser className="AiOutlineUser" />
};


const Page = () => {
  const authorized = IsAuthorized('partner');

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

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  if (!authorized) return <LayoutCustom><div className="flex justify-center items-center h-screen">Not Authorized</div></LayoutCustom>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen">Erreur...</div></LayoutCustom>

  return (
      <LayoutCustom>
        <div className="c-categories">
          <h2>{"Bilan d'affaires"}</h2>
          <div className="c-users__users">
            <div className="container-card">
              <CardStats className="c-cardStats" icon={icons.shoppingCart} number={totalReservations} numberofpourcents="0" titleCards="Nombre de réservations" />
              <CardStats className="c-cardStats" icon={icons.euro} number={totalPrice} numberofpourcents="0" titleCards="Chiffres d'affaires" />
              <CardStats className="c-cardStats" icon={icons.user} number={totalReservations} numberofpourcents="0" titleCards="Nombre de visiteurs" />
            </div>
          </div>
        </div>
      </LayoutCustom>
  )
}

export default Page

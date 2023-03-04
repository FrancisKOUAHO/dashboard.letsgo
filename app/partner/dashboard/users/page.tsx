'use client'

import React from "react";
import {useUsers} from "@/hooks/useUsers";
import {IsAuthorized} from "@/utils/auth";
import LayoutCustom from "@/layouts/layoutCustom";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import CardUsers from "@/components/atoms/cardusers/cardUsers";


const Page = () => {
  const authorized = IsAuthorized("partner");

  const {data, status, error} = useUsers()

  if (!authorized) return <LayoutCustom><div className="flex justify-center items-center h-screen">Not Authorized</div></LayoutCustom>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen">Erreur...</div></LayoutCustom>

  return (
    <LayoutCustom>
      <div className="c-users">
        <h2>{"Tous les utilisateurs"}</h2>

        <div className="c-users__users mt-12">

          <div>
            <div className="container-card">
              {data &&
                data.data.map((user: any, index: number) => {
                  return (
                    <CardUsers className="c-cardUsers" key={index} name={user.full_name} role={user.role}>
                      <img className="cardUsers-Image" src={user.photo} alt={user.full_name} width="100" height="100"/>
                    </CardUsers>
                  )
                })
              }
            </div>
          </div>
        </div>

      </div>
    </LayoutCustom>
  )
}

export default Page

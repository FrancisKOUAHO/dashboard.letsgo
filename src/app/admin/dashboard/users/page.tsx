'use client'

import LayoutCustom from "@/app/layouts/layoutCustom";
import {IsAuthorized} from "@/app/utils/auth";
import {Button} from "@/app/components/atoms/button/button";
import CardUsers from "@/app/components/atoms/cardusers/cardUsers";
import {useEffect, useState} from "react";
import {useUsers} from "@/app/hooks/useUsers";
import LoadingSpinner from "@/app/components/atoms/loadingspinner/loadingSpinner";


const Page = () => {
  const authorized = IsAuthorized("admin")

  const {data, status, error} = useUsers()

  let [isOpen, setIsOpen] = useState(false)
  const closeModal = (): void => {
    setIsOpen(false)
  }

  const openModal = (): void => {
    setIsOpen(true)
  }

  if (!authorized) return <div>Not Authorized</div>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen"><div>Erreur...</div></div></LayoutCustom>

  console.log(data)
  return (
    <LayoutCustom>
      <div className="c-users">
        <h2>{"Tous les utilisateurs"}</h2>
        <div className="c-users__users">
          <div>
            <Button color="primary" isActive={true} onClick={openModal}>
              Ajouter
            </Button>

            <div className="container-card">
              { data &&
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

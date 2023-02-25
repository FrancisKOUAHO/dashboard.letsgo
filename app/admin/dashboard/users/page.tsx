'use client'

import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {IsAuthorized} from "@/utils/auth";
import {useUsers} from "@/hooks/useUsers";
import {api} from "@/config/api";
import LayoutCustom from "@/layouts/layoutCustom";
import {Button} from "@/components/atoms/button/button";
import CardUsers from "@/components/atoms/cardusers/cardUsers";
import Modal from "@/components/atoms/modal/modal";
import Input from "@/components/atoms/input/input";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";

const Page = () => {
  const authorized = IsAuthorized("admin")

  const {data, status, error} = useUsers()

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPartner, setIsOpenPartner] = useState(false)
  const [partner, setPartner] = useState([])

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModalPartenaire = () => {
    setIsOpenPartner(false)
  }

  const openModalPartneraire = () => {
    setIsOpenPartner(true)
  }

  const generatePassword = (length = 8) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }

  const HandleSubmitAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const {full_name, role, password, email} = Object.fromEntries(new FormData(form));
    await api.post("/auth/addUser", {
      full_name,
      role,
      email,
      password: generatePassword()
    }).then((response) => {
      if (response.status === 200) {
        toast(`Utilisateur ajouté`, {position: toast.POSITION.BOTTOM_CENTER});
        closeModal()
        form.reset()
      }
    })
  };


  const HandleSubmitAddPartner = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const {user_id, name_compagny, address, city, postcode, phone} = Object.fromEntries(new FormData(form));
    const response = await api.post("/organisators/create_organisator", {
      user_id,
      name_compagny,
      address,
      city,
      postcode,
      phone
    })
    if (response.status === 200) {
      toast(`Partenaire ajouté`, {position: toast.POSITION.BOTTOM_CENTER});
      closeModalPartenaire()
      form.reset()
    }
  };

  const getUserRolePartner = async () => {
    const response = await api.get("/auth/getAllUser")
    setPartner(response.data.filter((user: any) => user.role === "partner"))
  }

  useEffect(() => {
    getUserRolePartner()
  }, [])

  if (!authorized) return <LayoutCustom><div className="flex justify-center items-center h-screen">Not Authorized</div></LayoutCustom>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen">Erreur...</div></LayoutCustom>

  return (
    <LayoutCustom>
      <div className="c-users">
        <h2>{"Tous les utilisateurs"}</h2>

        <div className="c-users__users">

          <div>
            <div className="flex gap-10 text-sm mt-5">
              <Button color="primary" isActive={true} onClick={openModal}>
                Ajouter un utilisateur
              </Button>

              <Button color="primary" isActive={true} onClick={openModalPartneraire}>
                Ajouter un partenaire
              </Button>
            </div>

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

        <Modal closeModal={closeModal} isOpen={isOpen} name="Enregistrer un utilisateur">
          <form onSubmit={HandleSubmitAddUser} className="c-modal-form">
            <div className="container-form">
              <div>
                <div className="content-input">
                  <label>
                    Nom complet
                  </label>
                  <Input name="full_name" className="c-input" type="text" placeholder="Nom complet"/>
                </div>
                <div className="content-input">
                  <label>
                    email
                  </label>
                  <Input className="c-input" type="email" name="email" placeholder="contact@letsgoeurope.fr"/>
                </div>
              </div>
              <div>
                <div className="content-input">
                  <label>
                    Rôle
                  </label>
                  <select
                    name="role"
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
                  >
                    <option value="admin">Administrateur</option>
                    <option value="partner">Partenaire</option>
                  </select>
                </div>
                <div className="content-input">
                  <label>
                    mot de passe
                  </label>
                  <Input className="c-input" name="password" type="password" placeholder="*********"/>
                </div>
              </div>
            </div>
            <div className="content-button">
              <Button color="secondary" className="btn-cancel" onClick={closeModal}> Annuler </Button>
              <Button color="primary" isActive={true}> Enregistrer </Button>
            </div>
          </form>
        </Modal>
        <Modal closeModal={closeModalPartenaire} isOpen={isOpenPartner} name="Enregistrer un partenaire">
          <form onSubmit={HandleSubmitAddPartner} className="c-modal-form">
            <div className="container-form">
              <div>
                <div className="content-input">
                  <label>
                    Partenaires
                  </label>
                  <select
                    name="user_id"
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
                  >
                    {
                      partner && partner.map((user: any, index: number) => {
                        return (
                          <option key={index} value={user.id}>{user.full_name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="content-input">
                  <label>
                    Nom de la société
                  </label>
                  <Input className="c-input" name="name_compagny" type="text" placeholder="Nom de la société"/>
                </div>
                <div className="content-input">
                  <label>
                    Adresse
                  </label>
                  <Input className="c-input" name="address" type="text" placeholder="Adresse"/>
                </div>
              </div>
              <div>
                <div className="content-input">
                  <label>
                    Ville
                  </label>
                  <Input className="c-input" name="city" type="text" placeholder="Ville"/>
                </div>
                <div className="content-input">
                  <label>
                    Code postal
                  </label>
                  <Input className="c-input" name="postcode" type="text" placeholder=" Code postal"/>
                </div>
                <div className="content-input">
                  <label>
                    Téléphone
                  </label>
                  <Input className="c-input" type="text" name="phone" placeholder="Télephone"/>
                </div>
              </div>
            </div>
            <div className="content-button">
              <Button color='primary' className="btn-cancel" onClick={closeModalPartenaire}> Annuler </Button>
              <Button color='primary' isActive={true}> Enregistrer </Button>
            </div>
          </form>
        </Modal>
      </div>
    </LayoutCustom>
  )
}

export default Page

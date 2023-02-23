'use client'

import LayoutCustom from "app/layouts/layoutCustom";
import {IsAuthorized} from "app/utils/auth";
import {Button} from "app/components/atoms/button/button";
import CardUsers from "app/components/atoms/cardusers/cardUsers";
import {useState} from "react";
import {useUsers} from "app/hooks/useUsers";
import LoadingSpinner from "app/components/atoms/loadingspinner/loadingSpinner";
import Input from "app/components/atoms/input/input";
import Modal from "app/components/atoms/modal/modal";


const Page = () => {
  const authorized = IsAuthorized("admin")

  const {data, status, error} = useUsers()

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPartner, setIsOpenPartner] = useState(false)

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

  if (!authorized) return <div>Not Authorized</div>
  if (status === "loading") return <LayoutCustom>
    <div className="flex justify-center items-center h-screen"><LoadingSpinner/></div>
  </LayoutCustom>
  if (error === "error") return <LayoutCustom>
    <div className="flex justify-center items-center h-screen">
      <div>Erreur...</div>
    </div>
  </LayoutCustom>

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
          <form className="c-modal-form">
            <div className="container-form">
              <div>
                <div className="content-input">
                  <label>
                    Nom complet
                  </label>
                  <Input className="c-input" type="text" placeholder="Nom complet"/>
                </div>
                <div className="content-input">
                  <label>
                    email
                  </label>
                  <Input className="c-input" type="email" placeholder="contact@letsgoeurope.fr"/>
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
                  <Input className="c-input" type="password" placeholder="*********"/>
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
          <form className="c-modal-form">
            <div className="container-form">
              <div>
                <div className="content-input">
                  <label>
                    Partenaires
                  </label>
                  <Input className="c-input" type="text" placeholder="Partenaires"/>
                </div>
                <div className="content-input">
                  <label>
                    Nom de la société
                  </label>
                  <Input className="c-input" type="text" placeholder="Nom de la société"/>
                </div>
                <div className="content-input">
                  <label>
                    Adresse
                  </label>
                  <Input className="c-input" type="text" placeholder="Adresse"/>
                </div>
              </div>
              <div>
                <div className="content-input">
                  <label>
                    Ville
                  </label>
                  <Input className="c-input" type="text" placeholder="Ville"/>
                </div>
                <div className="content-input">
                  <label>
                    Code postal
                  </label>
                  <Input className="c-input" type="text" placeholder=" Code postal"/>
                </div>
                <div className="content-input">
                  <label>
                    Téléphone
                  </label>
                  <Input className="c-input" type="text" placeholder="Télephone"/>
                </div>
              </div>
            </div>
            <div className="content-button">
              <Button color='primary' className="btn-cancel"> Annuler </Button>
              <Button color={'primary'} isActive={true}> Enregistrer </Button>
            </div>
          </form>
        </Modal>
      </div>
    </LayoutCustom>
  )
}

export default Page

"use client"

import LayoutCustom from "app/layouts/layoutCustom";
import {IsAuthorized} from "app/utils/auth";
import { ReservationContent, TitleTable} from "app/components/atoms/cardcategory/table";
import {useReservationId, useReservations} from "app/hooks/useReservations";
import LoadingSpinner from "app/components/atoms/loadingspinner/loadingSpinner";
import {useState} from "react";
import {useAuth} from "../../../context/AuthContext";

const Page = () => {
  const authorized = IsAuthorized("partner");
  const {user} = useAuth()

  const {data, status, error} = useReservationId(user?.id)

  const itemsPerPage = 7
  const totalActivities = data.length
  const pageCount = Math.ceil(totalActivities / itemsPerPage)

  const [page, setPage] = useState(1)

  if (!authorized) return <LayoutCustom><div className="flex justify-center items-center h-screen">Not Authorized</div></LayoutCustom>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen">Erreur...</div></LayoutCustom>

  return (
    <LayoutCustom>
      <div className="c-reservations">
        <h2>Tous les reservations</h2>

        <TitleTable
          className="c-cardCategory"
          title="Référence"
          title_2="Acheteur	"
          title_3="Nom de l'activité"
          title_4="Montant du paiement"
          title_5="Actions"
        >
          {
            data &&
            data
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((reservation: any, index: number) => {
                return (
                  <ReservationContent
                    key={index}
                    reference={reservation.id}
                    acheteur={reservation.users.full_name}
                    activite={reservation.activities.name}
                    montant={`${reservation.amount} €`}
                  />
                )
              })
          }
        </TitleTable>

        {data && (
          <nav className="c-activities__navigation">
            <ul>
              <li>
                <button
                  onClick={() => setPage(page - 1)}
                  className="transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev
                </button>
              </li>
              {Array.from({length: pageCount}, (_, i) => i + 1).map((num) => (
                <li key={num}>
                  <button
                    onClick={() => setPage(num)}
                    className={`transition-colors duration-150 ${num === page ? "active" : ""}`}> {num}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPage(page + 1)}
                  className="transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </LayoutCustom>
  )
}

export default Page

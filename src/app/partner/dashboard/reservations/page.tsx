"use client";

import { useState } from "react";
import { useReservationId } from "@/src/hooks/useReservations";
import { useAuth } from "@/src/context/AuthContext";
import LayoutCustom from "@/src/layouts/layoutCustom";
import {
  ReservationContent,
  TitleTable,
} from "@/src/components/atoms/cardcategory/table";
import useIsAuthorized from "@/src/utils/auth";

const Page = () => {
  const isAuthorized = useIsAuthorized("partner");
  const { user } = useAuth();

  const { data, status, error } = useReservationId(user?.id);

  const itemsPerPage = 7;
  const totalActivities = data?.length || 0;
  const pageCount = Math.ceil(totalActivities / itemsPerPage);

  const [page, setPage] = useState(1);

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
          {data &&
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
                );
              })}
        </TitleTable>

        {data && (
          <nav className="c-activities__navigation">
            <ul>
              <li>
                <button
                  onClick={() => setPage(page - 1)}
                  className="transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
                >
                  Prev
                </button>
              </li>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((num) => (
                <li key={num}>
                  <button
                    onClick={() => setPage(num)}
                    className={`transition-colors duration-150 ${
                      num === page ? "active" : ""
                    }`}
                  >
                    {" "}
                    {num}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPage(page + 1)}
                  className="transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </LayoutCustom>
  );
};

export default Page;

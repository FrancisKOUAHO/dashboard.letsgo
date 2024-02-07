import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/config/api";

const fetchReservations = async () => {
  const response = await api.get(`/reservations/get_reservations`);

  return response;
};

const useReservations = () => {
  const { status, data, error } = useQuery(["reservations"], fetchReservations);

  return { status, data, error };
};

const fetchReservationId = async (organisatorId: string) => {
  const response = await api.get(
    `/reservations/reservationAndOrganisator/${organisatorId}`
  );
  return response.data; // on retourne seulement la donnée de la réponse, pas la réponse entière
};

const useReservationId = (ReservationId: string) => {
  const { status, data, error } = useQuery(["organisator", ReservationId], () =>
    fetchReservationId(ReservationId)
  );

  return { status, data, error };
};

export {
  fetchReservations,
  fetchReservationId,
  useReservations,
  useReservationId,
};

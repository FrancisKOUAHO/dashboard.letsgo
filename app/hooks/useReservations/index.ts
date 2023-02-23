import { useQuery } from '@tanstack/react-query';
import { api } from "app/config/api";

const fetchReservations = async () => {
  const response = await api.get(`/reservations/get_reservations`);

  return response;
};

const useReservations = () => {
  const {status, data, error} = useQuery(['reservations'], fetchReservations);

  return {status, data, error};
};


export {
  fetchReservations,
  useReservations
}

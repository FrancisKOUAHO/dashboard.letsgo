import { useQuery } from '@tanstack/react-query';
import { api } from "@/app/config/api";

const fetchPartner = async () => {
  const response = await api.get(`/organisators/get_organisators`);

  return response;
};

const usePartner = () => {
  const {status, data, error} = useQuery(['organisators'], fetchPartner);

  return {status, data, error};
};


export {
  fetchPartner,
  usePartner
}

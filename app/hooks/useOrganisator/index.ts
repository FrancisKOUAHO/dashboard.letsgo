import { useQuery } from '@tanstack/react-query';
import { api } from "app/config/api";

const fetchOrganisator = async (organisatorId: string) => {
  const response = await api.get(`/organisators/organisatorId/${organisatorId}`);
  return response.data; // on retourne seulement la donnée de la réponse, pas la réponse entière
};

const useOrganisator = (organisatorId: string) => {
  const { status, data, error } = useQuery(['organisator', organisatorId], () =>
    fetchOrganisator(organisatorId)
  );

  return { status, data, error };
};


export {
  fetchOrganisator,
  useOrganisator
}

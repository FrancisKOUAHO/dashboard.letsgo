import { useQuery } from '@tanstack/react-query';
import { api } from "@/app/config/api";

const fetchUsers = async () => {
  const response = await api.get(`/auth/getAllUser`);

  return response;
};

const useUsers = () => {
  const {status, data, error} = useQuery(['users'], fetchUsers);

  return {status, data, error};
};


export {
  fetchUsers,
  useUsers
}

import { useQuery } from '@tanstack/react-query';
import { api } from "@/app/config/api";

const fetchCategories = async () => {
  const response = await api.get(`/categories/get_categories`);

  return response;
};

const useCategories = () => {
  const {status, data, error} = useQuery(['categories'], fetchCategories);

  return {status, data, error};
};


export {
  fetchCategories,
  useCategories
}

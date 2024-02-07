import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/config/api";

const fetchActivities = async () => {
  const response = await api.get(`/activities/get_activities`);

  return response;
};

const fetchActivitiesById = async (id: string) => {
  const response = await api.get(`/activities/organisateurActivityId/${id}`);

  return response;
};

const useActivities = () => {
  const { status, data, error } = useQuery(["activities"], fetchActivities);

  return { status, data, error };
};

const useActivitiesById = (id: string) => {
  const { status, data, error } = useQuery(["activitiesById"], () =>
    fetchActivitiesById(id)
  );

  return { status, data, error };
};

export {
  fetchActivities,
  useActivities,
  useActivitiesById,
  fetchActivitiesById,
};

'use client'

import { useQuery } from '@tanstack/react-query';
import api from "@/app/config/api";

const fetchActivities = async () => {
  const response = await api.get(`/activities/get_activities`);

  return response;
};

const useActivities = () => {
  const {status, data, error} = useQuery(['activities'], fetchActivities);

  return {status, data, error};
};


export {
  fetchActivities,
  useActivities
}

import { useQuery } from "@tanstack/react-query";
import { api } from "./instance";

export const getPlannerApi = async () => {
  const response = await api.get(`/planners`);

  return response.data;
};

export default function useGetPlanner() {
  return useQuery({
    queryKey: queryKey.all(),
    queryFn: () => getPlannerApi(),
  });
}

export const queryKey = {
  all: () => ["planner-list"],
};

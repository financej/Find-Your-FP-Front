import { api } from "./instance";

export const putAddressApi = async (address) => {
  const response = await api.put(`/users/info`, {
    address,
  });

  return response.data;
};

import { api } from "./instance";

export const getRoomId = async () => {
  const response = await api.post(`/chats`, {
    userId: Number(localStorage.getItem("userId")),
  });

  return response.data;
};

import { api } from "./instance";

export const loginApi = async (code) => {
  const response = await api.post(`/login/kakao`, {
    code,
    redirectUri: import.meta.env.VITE_REDIRECT_URL,
  });

  return response.data;
};

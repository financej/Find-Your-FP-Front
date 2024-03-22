import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  if (!accessToken) {
    config.headers.Authorization = null;
  } else {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    token: "", //토큰
    userName: "", //사용자 이름
    isLogin: false, // 사용자 인증 상태
    login: () =>
      set({
        isLogin: true,
        token: JSON.parse(localStorage.getItem("accessToken")) ?? "",
        userName: JSON.parse(localStorage.getItem("userName")) ?? "",
      }), // 로그인 함수
    logout: () => set({ isLogin: false, token: "" }), // 로그아웃 함수
  }))
);

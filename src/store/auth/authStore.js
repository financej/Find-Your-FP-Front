import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: "", //토큰
  userName: "", //사용자 이름
  isLogin: false, // 사용자 인증 상태
  login: (accessToken, userName) =>
    set({
      isLogin: true,
      token: accessToken ?? "",
      userName: userName ?? "",
    }), // 로그인 함수
  logout: () => set({ isLogin: false, token: "" }), // 로그아웃 함수
}));

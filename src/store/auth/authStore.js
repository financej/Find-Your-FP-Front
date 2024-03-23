import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: "", //토큰
  userName: "", //사용자 이름
  userId: "", //사용자 PK
  isLogin: false, // 사용자 인증 상태
  login: (accessToken, userName, userId) =>
    set({
      isLogin: true,
      token: accessToken ?? "",
      userName: userName ?? "",
      userId: userId ?? "",
    }), // 로그인 함수
  logout: () => set({ isLogin: false, token: "" }), // 로그아웃 함수
}));

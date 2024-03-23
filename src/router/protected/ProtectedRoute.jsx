import { useAuthStore } from "@/store";
import { Outlet, Navigate } from "react-router-dom";
import { KAKAO_URL } from "../../components/layout/header/nav/NavigationBar";

export default function ProtectedRoute() {
  const { token, isLogin } = useAuthStore();

  if (!token || !isLogin) {
    window.location.href = KAKAO_URL;
    return null;
  }

  return token && isLogin ? <Outlet /> : <Navigate to={"/"} replace />;
}

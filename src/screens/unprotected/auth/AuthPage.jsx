import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@/api/login";
import { useAuthStore } from "@/store/auth";

function AuthPage() {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const { login, token } = useAuthStore();

  const getAccessToken = async () => {
    try {
      const res = await loginApi(code);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("userName", res.userName);

      login();
      console.log(token);
      navigate("/");
    } catch (error) {
      throw new Error("로그인 시도 중 에러가 발생했습니다." + error);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return <></>;
}

export default AuthPage;

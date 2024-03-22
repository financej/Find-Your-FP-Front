import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { loginApi } from "../../../api/login";

function AuthPage() {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const { login, token } = useAuthStore();

  const getAccessToken = async () => {
    try {
      const res = await loginApi(code);
      localStorage.setItem("accessToken", JSON.stringify(res.accessToken));
      localStorage.setItem("userName", JSON.stringify(res.userName));

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

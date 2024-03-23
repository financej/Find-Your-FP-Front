import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, useConfirmModalStore } from "@/store";
import { loginApi } from "../../../api/login";

function AuthPage() {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { openConfirmModal } = useConfirmModalStore();

  const getAccessToken = async () => {
    try {
      const res = await loginApi(code);

      const accessToken = JSON.stringify(res.accessToken);
      const userName = JSON.stringify(res.userName);
      const userId = JSON.stringify(res.userId);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userId", userId);

      login(accessToken, userName, userId);

      navigate("/search");
    } catch (error) {
      openConfirmModal({
        message: "로그인 중 문제가 발생했습니다.\n다시 로그인 해주세요.",
      }).then((check) => check && navigate("/"));
    }
  };

  useLayoutEffect(() => {
    const getUser = async () => {
      await getAccessToken();
    };
    getUser();
  }, []);

  return <></>;
}

export default AuthPage;

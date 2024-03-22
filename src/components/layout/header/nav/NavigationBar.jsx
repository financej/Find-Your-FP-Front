import { useAuthStore, useConfirmModalStore } from "@/store";
import { SearchIcon } from "@/ui/icons";
import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const MenuList = [
  {
    to: "/",
    icon: <SearchIcon />,
    label: "메인 화면 메뉴",
  },
];

const KAKAO_REST_API = import.meta.env.VITE_KAKAO_API;
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API}&redirect_uri=${REDIRECT_URL}&response_type=code`;

const NavigationBar = () => {
  const { openConfirmModal } = useConfirmModalStore();
  const { isLogin, logout, userName } = useAuthStore();
  const theme = useTheme();

  const handleLogin = () => {
    console.log("emf");
    openConfirmModal({ message: "되니?" }).then(
      (check) => check && console.log("모달 테스트")
    );
  };

  const handleKaKaoLogin = () => {
    window.location.href = KAKAO_URL;
  };
  const handleKaKaoLogout = () => {
    logout();
  };

  return (
    <nav>
      <ul className="flex items-center gap-4 md:gap-7">
        {MenuList.map(({ to, icon, label }) => {
          return (
            <li key={to} className="w-6 h-6 md:w-12 md:h-12">
              <Link to={to} aria-label={label}>
                {icon}
              </Link>
            </li>
          );
        })}
        <div>
          {!isLogin ? (
            <>
              <Button
                variant="outlined"
                onClick={handleKaKaoLogin}
                sx={{
                  borderRadius: "50px",
                }}
              >
                <Typography variant="body1">로그인</Typography>
              </Button>
            </>
          ) : (
            <Stack direction="row" spacing={1}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                {userName?.substring(0, 1)}
              </Avatar>
              <Button
                variant="outlined"
                onClick={handleKaKaoLogout}
                sx={{
                  borderRadius: "50px",
                }}
              >
                <Typography variant="body1">로그아웃</Typography>
              </Button>
            </Stack>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;

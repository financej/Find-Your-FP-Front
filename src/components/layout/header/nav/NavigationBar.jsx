import { useAuthStore, useConfirmModalStore } from "@/store";
import { SearchIcon } from "@/ui/icons";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../../searchBar/SearchBar";
import { useLocation } from "react-router-dom";

const MenuList = [
  {
    to: "/",
    icon: <SearchIcon />,
    label: "메인 화면 메뉴",
  },
];

const KAKAO_REST_API = import.meta.env.VITE_KAKAO_API;
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API}&redirect_uri=${REDIRECT_URL}&response_type=code`;

const NavigationBar = () => {
  const { openConfirmModal } = useConfirmModalStore();
  const { isLogin, logout, userName } = useAuthStore();
  const theme = useTheme();
  const { pathname } = useLocation();
  console.log(pathname);
  // const handleLogin = () => {
  //   console.log("emf");
  //   openConfirmModal({ message: "되니?" }).then(
  //     (check) => check && console.log("모달 테스트")
  //   );
  // };

  const handleKaKaoLogin = () => {
    window.location.href = KAKAO_URL;
  };
  const handleKaKaoLogout = () => {
    logout();
  };

  return (
    <nav className="">
      <ul className="flex items-center gap-4 md:gap-7">
        {pathname === "/search" && (
          <Box
            sx={{
              width: 800,
              paddingX: "80px",
            }}
          >
            <SearchBar />
          </Box>
        )}
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
              {/* <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                {userName?.substring(0, 1) ?? ""}
              </Avatar> */}
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

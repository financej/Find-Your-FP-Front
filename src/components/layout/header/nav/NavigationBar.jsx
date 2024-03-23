import { useAuthStore } from "@/store";
// import { useAuthStore, useConfirmModalStore } from "@/store";
// import { SearchIcon } from "@/ui/icons";
import { styled } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// import { Link } from "react-router-dom";
import SearchBar from "../../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CustomTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2), // 테마 스페이싱 사용
  fontSize: "14px",
  // 추가할 다른 스타일
}));

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&.hover": {
    cursor: "pointer",
    background: "red",
  },
}));

const KAKAO_REST_API = import.meta.env.VITE_KAKAO_API;
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API}&redirect_uri=${REDIRECT_URL}&response_type=code`;

const NavigationBar = () => {
  // const { openConfirmModal } = useConfirmModalStore();
  const { isLogin, logout, userName } = useAuthStore();
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
        {pathname === "/search" ? (
          <Box
            sx={{
              width: 800,
              paddingX: "80px",
            }}
          >
            <SearchBar />
          </Box>
        ) : (
          <>
            <StyledDiv>
              <CustomTypography onClick={() => navigate("/search")}>
                보험설계사 찾기
              </CustomTypography>
            </StyledDiv>
            <StyledDiv>
              <CustomTypography>상품 및 혜택</CustomTypography>
              <ExpandLess />
            </StyledDiv>
            <StyledDiv>
              <CustomTypography>고객지원</CustomTypography>
              <ExpandLess />
            </StyledDiv>
            <StyledDiv>
              <CustomTypography>회사 소개</CustomTypography>
              <ExpandLess />
            </StyledDiv>
          </>
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

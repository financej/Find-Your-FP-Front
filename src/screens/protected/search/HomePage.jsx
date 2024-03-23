import { Box, Typography } from "@mui/material";
import MainImageUp from "../../../../public/asset/mainimg1.svg";
import MainImageDown from "../../../../public/asset/mainimg2.svg";
import MainImageLeft from "../../../../public/asset/mainimg3.svg";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {KAKAO_URL} from "@/components/layout/header/nav/NavigationBar.jsx";

const CustomTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontSize: "35px",
  marginBottom: "50px",
}));

const CustomButton = styled("button")({
  fontSize: "14px",
  marginRight: "5px",
  width: "312px",
  height: "48px",
  background: "yellow",
});

const CustomTypographyExample = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontSize: "14px",
  color: "4B4B4B",
  marginBottom: "20px",
}));

const LeftDiv = styled("div")({
  height: "calc(100vh - 64px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const RightDiv = styled("div")({
  display: "flex",
  width: "300px",
  height: "calc(100vh - 64px)",
  flexDirection: "column",
  justifyContent: "center",
});

const LeftImage = styled("img")({
  width: "340px",
  height: "230px",
  margin: "5px",
  display: "flex",
  position: "static",
});

const RightImage = styled("img")({
  width: "450px",
  height: "470px",
  margin: "5px",
});

export default function HomePage() {
  const navigate = useNavigate();

    const handleKaKaoLogin = () => {
        window.location.href = KAKAO_URL;
    };

  return (
    <Box
      sx={{
        margin: "0",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        flexWrap: "wrap",
      }}
    >
      <LeftDiv>
        <LeftImage src={MainImageUp} />
        <LeftImage src={MainImageDown} />
      </LeftDiv>
      <LeftDiv>
        <RightImage src={MainImageLeft} />
      </LeftDiv>
      <RightDiv>
        <CustomTypography>
          이제 내 주변의 <br />
          보험 전문가를 <br />
          집에서 <br />
          만나보세요.
        </CustomTypography>
        <CustomTypographyExample>
          행복한 내일은 행복한 오늘이 모여 만들어지기에 오늘부터, 메트라이프
        </CustomTypographyExample>
        <CustomButton onClick={handleKaKaoLogin}>
          내 주위 보험설계사 찾기
        </CustomButton>
      </RightDiv>
    </Box>
  );
}

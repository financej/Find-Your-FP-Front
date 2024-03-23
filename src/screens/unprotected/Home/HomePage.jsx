import { Box, Typography } from "@mui/material";
import MiniLogo from "../../../../public/asset/minilogo.svg";

export default function HomePage() {
  return (
    <Box
      sx={{
        margin: "0 auto",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <img
        src={MiniLogo}
        style={{
          width: "246px",
          hight: "246px",
          margin: "0 auto",
        }}
      />
      <Typography variant="h5" sx={{ width: "100%", textAlign: "center" }}>
        로그인을 하시면 가장 가까운 보험사와 채팅이 연결됩니다.
      </Typography>
      <Typography variant="h5" sx={{ width: "100%", textAlign: "center" }}>
        나와 가까운 보험 설계사와 연결하고 상담받아 보세요!
      </Typography>
    </Box>
  );
}

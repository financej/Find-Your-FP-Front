import { Box, Typography } from "@mui/material";
import MiniLogo from "../../../../public/asset/minilogo.svg";

export default function SearchPage() {
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
        상단 검색바를 통해 주소를 검색해주세요.
      </Typography>
      <Typography variant="h5" sx={{ width: "100%", textAlign: "center" }}>
        가장 가까운 보험 설계사를 리스트업 해드립니다!
      </Typography>
    </Box>
  );
}

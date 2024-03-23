import { Box, Button, TextField } from "@mui/material";

export default function Form() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        margin: "0 auto",
        padding: "50px",
        borderRadius: "8px",
        "& .MuiTextField-root": { width: "50ch" },
      }}
    >
      <TextField label={"이름"} margin="normal" fullWidth />
      <TextField label={"나이"} margin="normal" />
      <TextField label={"현재 보험료"} margin="normal" />

      <Button
        variant="contained"
        sx={{
          width: "100%",
          color: "white",
          marginTop: "20px",
          paddingY: "10px",
          boxShadow: "0px",
        }}
      >
        결과 확인하기
      </Button>
    </Box>
  );
}

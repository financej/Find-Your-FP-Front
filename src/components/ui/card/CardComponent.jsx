import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getRoomId } from "../../../api/room";

function CardComponent({ data: { id, plannerName, address } }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleGo = async () => {
    const res = await getRoomId();
    navigate(`/chat/${Number(res.roomId)}`);
  };
  return (
    <Paper
      elevation={0}
      sx={{
        width: "23%",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5">{plannerName} 플래너님</Typography>
        <Box>
          <Chip
            label={address}
            variant="outlined"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: "white",
            }}
          />
        </Box>
      </Box>

      <Stack sx={{ alignItems: "center", p: 3 }}>
        <Box
          sx={{
            width: "128px",
            height: "128px",
            borderRadius: "10px",
            bgcolor: "#e5e4e4",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            textAlign: "center",
          }}
        >
          {plannerName?.substring(0, 1)}
        </Box>
      </Stack>

      <Button variant="outlined" onClick={handleGo}>
        바로 상담받기
      </Button>
    </Paper>
  );
}

export default CardComponent;

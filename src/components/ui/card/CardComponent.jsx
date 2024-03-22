import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

function CardComponent({ data: { title, category, contents } }) {
  const theme = useTheme();
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
        <Typography variant="h5">{title}</Typography>
        <Box>
          <Chip
            label={category}
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
          }}
        />
      </Stack>
      <Typography variant="body1" sx={{ p: 2 }}>
        {contents}
      </Typography>
      <Button variant="outlined">바로 상담받기</Button>
    </Paper>
  );
}

export default CardComponent;

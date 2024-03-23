import {
    Box,
    Paper,
    Typography,
  } from "@mui/material";
  
  function SummaryCard({title, children}) {
    return (
      <Paper
        elevation={0}
        sx={{
          width: "100%",
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
        </Box>
        <Typography variant="body1" sx={{ p: 2 }}>
          {children}
        </Typography>
      </Paper>
    );
  }
  
  export default SummaryCard;
  
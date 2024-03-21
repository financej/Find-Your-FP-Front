import { Paper } from "@mui/material";
import React from "react";

function DefaultPaper({
  width = "100%",
  height = "200px",
  flexDirection = "column",
  justifyContent,
  alignItems,
  children,
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: width ? width : "100%",
        height: height ? height : "200px",
        p: 3,
        display: "flex",
        flexDirection: flexDirection ? flexDirection : "column",
        justifyContent: justifyContent ? justifyContent : "space-between",
        alignItems: alignItems ? alignItems : "",
        borderRadius: "8px",
      }}
    >
      {children}
    </Paper>
  );
}

export default DefaultPaper;

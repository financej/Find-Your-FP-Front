import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        minWidth: 270,
        maxWidth: 360,
        height: "100vh",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Metlife-09
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="내 보험 진단하기" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Metlife 상품 둘러보기" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="AI 맞춤 진단 받아보기" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="저장한 진단 목록" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default SideBar;

import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Fragment } from "react";
import Chatbox from "../../../components/chatbot/popup/chat/ChatBox";
import { useState } from "react";
import { useCallback } from "react";
import {
  disconnectSocket,
  initSocketConnection,
  sendSocketMessage,
} from "../../../api/socketio";
import { useEffect } from "react";

export default function ChatPage() {
  // const socket = io(import.meta.env.VITE_SOKET_URL);

  useEffect(() => {
    initSocketConnection();

    return () => {
      disconnectSocket();
    };
  }, []);

  const [msg, setMsg] = useState(_mock.reverse());
  const [value, setValue] = useState();
  const theme = useTheme();

  const handleChange = useCallback((text) => {
    setValue(text);
  }, []);

  const handleSubmit = useCallback(async () => {
    setValue(value);
    setMsg((prev) => [
      {
        userName: "me",
        message: value,
      },
      ...prev,
    ]);
    await sendSocketMessage(value);
    setValue("");
  }, [value]);

  // const activeEnter = useCallback(
  //   (e) => {
  //     if (e.key === "Enter") {
  //       handleSubmit?.();
  //     }
  //   },
  //   [value, handleSubmit]
  // );

  return (
    <Box
      sx={{
        height: "calc(90vh - 140px)",
        display: "flex",
        flexDirection: "column-reverse",
        overflowY: "auto",
        paddingX: "10px",
      }}
    >
      {msg.map((chat, idx) => {
        if (chat.userName === "me") {
          return (
            <Fragment key={idx}>
              <Box
                sx={{
                  display: "inline-block",
                  textAlign: "right",
                  margin: "0 0 0 auto",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    padding: "8px",
                  }}
                >
                  {chat.userName}
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    padding: "13px",
                    borderRadius: "8px",
                    maxWidth: "700px",
                  }}
                >
                  <Typography variant="body2">{chat.message}</Typography>
                </Paper>
              </Box>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={idx}>
              <Box
                sx={{
                  display: "inline-block",
                  textAlign: "left",
                  margin: "0 auto 0 0",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    padding: "8px",
                  }}
                >
                  {chat.userName}
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                    padding: "13px",
                    borderRadius: "8px",
                    maxWidth: "700px",
                  }}
                >
                  <Typography variant="body2">{chat.message}</Typography>
                </Paper>
              </Box>
            </Fragment>
          );
        }
      })}

      <Chatbox value={value} onChange={handleChange} onSubmit={handleSubmit} />
    </Box>
  );
}

const _mock = [
  {
    userName: "me",
    message: "채팅 시작",
  },
  {
    userName: "you",
    message: "메트라이프 보험설계사와 상담을 시작해보세요!",
  },
  {
    userName: "me",
    message: "채팅 시작",
  },
  {
    userName: "you",
    message: "메트라이프 보험설계사와 상담을 시작해보세요!",
  },
  {
    userName: "me",
    message: "채팅 시작",
  },
  {
    userName: "you",
    message: "메트라이프 보험설계사와 상담을 시작해보세요!",
  },
  {
    userName: "me",
    message: "채팅 시작",
  },
  {
    userName: "you",
    message: "메트라이프 보험설계사와 상담을 시작해보세요! 가장 최근 채팅",
  },
];

import { useState, useEffect, useRef } from 'react';
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Fragment } from "react";
import Chatbox from "../../../components/chatbot/popup/chat/ChatBox";


const ChatRoom = () => {
    
  const theme = useTheme();
  const [userId, setUserId] = useState(1);
  const [roomId, setRommId] = useState(1);
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // WebSocket 연결
    const socketAddres = import.meta.env.VITE_SOKET_URL
    console.log("socketAddres: ", socketAddres)

    const socket = new WebSocket(socketAddres);
    socketRef.current = socket

    socket.onopen = function (e) {
      console.log('open server!');
      socketRef.current = socket
      const enterMsg = { type: "ENTER", roomId: roomId, senderId: userId, userName: "you", message: "채팅방에 입장 됐습니다." };
      socket.send(JSON.stringify(enterMsg));
      setMessages(prev => [{userName: "you", message: "채팅방에 입장 됐습니다."}, ...prev ])
    };

    // socket.current.onclose = function (e) {
    //   console.log('disconnect');
    // };

    socket.onerror = function (e) {
     
      console.log("error");
      console.log(e);
    };
    //수신
    socket.onmessage = function (e) {
      console.log(e);
      console.log(e.data);
      setMessages(prevMessages => [ e.data, ...prevMessages ]);
    };

    return () => {
        disconnectWebSocket()
    };

  }, []);

  const disconnectWebSocket = () => {
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }
  };

  function waitForConnection(ws, callback) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (ws.readyState === 1) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(ws, callback);
        }
      },
      1 // 밀리초 간격으로 실행
    );
  }

  const sendMsg = () => {
    const talkMsg = { type: "TALK", roomId: roomId, sender: userId, msg: content };
    
    setMessages(prev => [...prev, {userName: "me", message: content}])
    setContent(''); // 메시지 전송 후 입력 필드 초기화
    waitForConnection(socketRef.current, function () {
        socketRef.current.send(
            JSON.stringify(talkMsg)
        )
    })
  };

//   const quit = () => {
//     const quitMsg = { type: "QUIT", roomId: roomId, sender: userId, msg: "" };
//     socket.current.send(JSON.stringify(quitMsg));
//     socket.current.close();
//     // React Router를 사용한다면, useHistory()를 사용하여 페이지 이동
//     // 예: history.push("/chat/chatList");
//   };

const handleValue = (e) => {
    setContent(e)
}


  return (
    <Box
      sx={{
        height: "calc(90vh - 140px)",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        paddingX: "10px",
      }}
    >
      {messages.map((chat, idx) => {
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

      <Chatbox value={content} onChange={handleValue} onSubmit={sendMsg} />
    </Box>
  );
};

export default ChatRoom;

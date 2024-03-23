import { Box } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import MemoizedChatting from "./Chatting";
import { useLayoutEffect } from "react";
/**
    서버, 설계사, 고객
    알림, 채팅
    아이디
    메세지
 */
const SampleData = [
    {
        'sender' : 'CUSTOMER',
        'type': 'CHAT',
        'memberId': '1',
        'message': '안녕하세요.'
    },
    {
        'sender' : 'AGENT',
        'type': 'CHAT',
        'memberId': '2',
        'message': '안녕하세요~~'
    }
]

export default function ChatList() {

    const [chatData, setChatData] = useState([])
    const [memberInfo, setMemberInfo] = useState(null)
    const scrollRef = useRef()

    useLayoutEffect(() => {
        setMemberInfo({
            memberId: localStorage.getItem('memberId'),
            memberType: localStorage.getItem('memberType')
        })
        setChatData(SampleData)
    }, [])

    return (
        <Box id="ChatListContainer"
            sx={{
                display: 'block',
                padding: '5px 0 70px',
                position: 'relative',
                zIndex: 6,
                width: '100%',
                maxHeight: '105%',
                overflowY: 'auto',
                overflowX: 'hidden',
                height: 'auto',
                // marginBottom: '0.2%',
            }}
            ref={scrollRef}
        >
            <Box sx={{ minHeight: "100%"}}>
                <ul>
                    {
                        memberInfo && chatData.map((chat, idx) => {
                            const { message, memberId } = chat

                            console.log(memberId)
                            console.log(memberInfo.memberId)
                            return (
                            <li key={`${chat.sender}_${idx}`} className="px-3 mt-2" >
                                {
                                    memberId === memberInfo.memberId ? 
                                    <MemoizedChatting message={message} isRight />
                                    :
                                    <MemoizedChatting message={message} />
                                }
                            </li>
                            )
                        })
                    }
                </ul>
            </Box>
        </Box>
    )
}
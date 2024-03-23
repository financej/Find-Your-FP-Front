import { memo } from 'react'
import { Avatar, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ChatIcon } from "@/ui/icons";


/**
   {
        'sender' : 'CUSTOMER',
        'type': 'CHAT',
        'memberId': '1',
        'message': '안녕하세요.'
    }
 */
function Chatting({ message, isRight }) {
    return (
        <Box sx={{position: 'relative', textAlign: isRight? 'right' : 'left'}}>
            {
            !isRight &&
                <Avatar >
                    <ChatIcon />
                </Avatar>
            }
            
            <ChattingMessageBox
                isRight={isRight}
            >
                {message}
            </ChattingMessageBox>
        </Box>
    )
}


const ChattingMessageBox = styled(Box)(({ theme, isRight }) => ({
    display: 'inline-block',
    position: 'relative',
    zIndex: '10',
    margin: '0 35px 10px 40px',
    padding: '13px 15px 11px',
    borderRadius: '8px',
    backgroundColor: isRight ? theme.palette.primary.main : 'white',
    fontSize: '15px',
    lineHeight: 1.4,
    color: '#333',
    textAlign: isRight ? 'right' : 'left',
    '&:before': {
        display: 'inline-block',
        content: '""',
        width: '0',
        height: '0',
        position: 'absolute',
        top: '0',
        left: isRight ? 'auto' : '-6px',
        right: isRight ? '-12px' : 'auto',
        backgroundPosition: isRight ? '-54px -51px' : '-11px -51px',
        borderLeft: '15px solid ' + (isRight ? `${theme.palette.primary.main}`: 'transparent'), 
        borderRight: '15px solid ' + (isRight ? `transparent`: `white`), 
        borderBottom: '15px solid transparent',
        borderTop: `15px solid ` + (isRight ? `${theme.palette.primary.main}` : 'white'),
        transform: isRight ? 'translate(10%)' : 'translate(-30%)',
    },
  }));


const MemoizedChatting = memo(Chatting)
export default MemoizedChatting
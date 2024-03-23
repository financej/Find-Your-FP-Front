import { ChatbotPopuopContainer } from "./layout";
import CloseBtn from "./button/CloseBtn";
import ChatBox from "./chat/ChatBox";
import ChatList from "./chat/ChatList";

export default function ChatbotPopup({ isOpen, setIsOpen }) {
    return (
        <ChatbotPopuopContainer isOpen={isOpen} >
            <CloseBtn setIsOpen={ setIsOpen } />
            <div className='block h-full p-0 bg-[#cddae8] transition top duration-500 ease-in-out'>
                <ChatList />
                <ChatBox />
            </div>
        </ChatbotPopuopContainer>
    )
}
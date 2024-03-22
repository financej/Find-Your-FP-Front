import { Fab } from '@mui/material';
import {useState} from 'react'
import ChatIcon from '../ui/icons/ChatIcon';
import ChatbotPopup from './popup/ChatbotPopup';


export default function AIFloatingButton() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <aside className="block">
                <section className={`fixed ${isOpen ? 'opacity-[0]' : 'opacity-[1]' } right-0 z-[1000] min-h-[56px] bottom-[80px] text-left transition-all duration-500 delay-100`}>
                    <Fab color="primary" aria-label="AI Chatbot" sx={{ position: 'absolute', bottom: 16, right: 16 }} onClick={() => setIsOpen(true)}>
                        <ChatIcon />
                    </Fab>
                </section>
            </aside>
           <ChatbotPopup isOpen={ isOpen } setIsOpen={ setIsOpen } />
        </>
    )
}
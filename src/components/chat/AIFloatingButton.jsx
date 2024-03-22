import { Fab,IconButton } from '@mui/material';
import {useState} from 'react'
import ChatIcon from '../ui/icons/ChatIcon';
import { ArrowIcon } from '../ui/icons';


export default function AIFloatingButton() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <asid className="block">
                <section className={`fixed ${isOpen ? 'opacity-[0]' : 'opacity-[1]' } right-0 z-[1000] min-h-[56px] bottom-[80px] text-left transition-all duration-500 delay-100`}>
                    <Fab color="primary" aria-label="AI Chatbot" sx={{ position: 'absolute', bottom: 16, right: 16 }} onClick={() => setIsOpen(true)}>
                        <ChatIcon />
                    </Fab>
                </section>
            </asid>
            <section className={`${isOpen ? 'block fixed visible top-24 w-96 h-auto opacity-100 right-4 bottom-20 z-[1000] translate-x-0 transition-all duration-500 ease-in-out' : 'fixed invisible top-24 w-96 h-auto opacity-0 right-4 bottom-20 z-[1000] translate-x-full transition-transform duration-500 ease-in-out'} top-[100px]`} >
                <IconButton
                    sx={[{ 
                        display: 'block',
                        position: 'absolute',
                        top: -20, left: 0,
                        right: 0,
                        width: '80px',
                        height: '20px',
                        borderRadius: '16px 16px 0 0',
                        backgroundColor: '#cddae8',
                        margin: '0 auto',
                        
                    },
                    {
                        ':hover': {
                            backgroundColor: '#cddae8',
                        }
                    },
                ]} 
                    onClick={() => setIsOpen(false)}
                >
                    <ArrowIcon className='inline-block absolute top-1 -translate-x-1.5  w-4 h-5'/>
                </IconButton>
                <div className='block h-full p-0 bg-[#cddae8] transition top duration-500 ease-in-out'>

                </div>
            </section>
        </>
    )
}
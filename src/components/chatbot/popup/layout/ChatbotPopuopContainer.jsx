export default function ChatbotPopupContainer({isOpen, children}) {
    return (
        <section className={`${isOpen ? 'block fixed visible top-24 w-96 h-auto opacity-100 right-4 bottom-20 z-[1000] translate-x-0 transition-all duration-500 ease-in-out' : 'fixed invisible top-24 w-96 h-auto opacity-0 right-4 bottom-20 z-[1000] translate-x-full transition-transform duration-500 ease-in-out'} top-[100px]`} >
            { children }
        </section>
    )
}
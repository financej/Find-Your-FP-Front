import { Header } from "./header"
import {ModalContainer} from "../ui";
import { Outlet } from 'react-router-dom'


const Layout = ({ children }) => {
    
    return (
        <>
            <Header />
            <main className='w-full flex justify-center max-w-screen-xl mx-auto'>
                { children || <Outlet /> }
                <ModalContainer />
            </main>
        </>
    )
}

export default Layout
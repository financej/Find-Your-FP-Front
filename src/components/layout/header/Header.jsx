import { MetlifeIcon } from "@/ui/icons"
import { Link } from 'react-router-dom'
import NavigationBar from "./nav/NavigationBar"

const Header = () => {

 return (
    <header className='sticky top-0 bg-white z-10 border-b'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center px-5 py-2'>
            <Link to='/' aria-label="메인 화면 바로가기" className="w-[7rem] md:w-[12rem] h-10">
                <MetlifeIcon />
            </Link> 
            <NavigationBar />
        </div>
    </header>
 )
}

export default Header
import { SearchIcon } from "@/ui/icons"
import { Link } from 'react-router-dom'
import { useConfirmModalStore } from "@/store"

const MenuList = [
    {
        to: '/',
        icon: <SearchIcon />,
        label: '메인 화면 메뉴'
    }
]

const NavigationBar = () => {

    const { openConfirmModal } = useConfirmModalStore()

    const handleLogin = () => {
        console.log("emf")
        openConfirmModal({message: "되니?"}).then(check => check && console.log("모달 테스트"))
    }

    return (
        <nav>
            <ul className="flex gap-4 md:gap-7 items-center">
                { MenuList.map(({ to, icon, label }) => {
                    
                    return (
                        <li key={to} className="w-6 h-6 md:w-12 md:h-12">
                            <Link to={to} aria-label={label}>
                                {icon}
                            </Link>
                        </li>
                    )
                })}
                <div>
                    <button onClick={handleLogin}>로그인</button>
                </div>
                {
                    // users ?? <></>
                }
            </ul>
        </nav>
    )
}

export default NavigationBar
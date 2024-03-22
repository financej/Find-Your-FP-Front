import { HiOutlineBackspace } from "react-icons/hi";

export default function ClearIcon({className}) {
    return <HiOutlineBackspace className={`${className ? className : ''}`}/>
}
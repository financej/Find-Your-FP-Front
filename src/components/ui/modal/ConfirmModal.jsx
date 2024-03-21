import { useLayoutEffect, useState } from "react"
import { useConfirmModalStore } from "@/store"
import { Button } from "@mui/material"


export default function ConfirmModal({ title = "알림", handleCheck, handleCancel, message, isAlert, id }) {

    const [ isOpen, setIsOpen ] = useState(true)
    const closeConfirmModal = useConfirmModalStore(state => state.closeConfirmModal)

    useLayoutEffect(() => {
        setIsOpen(true)
    }, [])

    const handleFuncAddCloseFunc = (handleFunc) => {
      setIsOpen(false)
      setTimeout(() => {
        handleFunc()
        closeConfirmModal(id)
      }, 200)
    }
  
    return (
      <div className={ `${ isOpen ? 'left-0' : 'left-[-100%]'} z-[999] fixed top-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,.5)]` }>
        <div className={ `${isOpen ? 'bottom-0 opacity-[1]' : 'bottom-[-500px] opacity-[0]'} overflow-hidden transition-all duration-300 delay-100 w-[300px] bg-white rounded-3xl` }>
            {
                title &&
                <h5 className="flex w-full justify-center items-center mt-[20px] font-bold test-[1.2rem]">{ title }</h5> 
            }
            {
                message &&
                <div className="flex justify-center items-center text-center my-3 text[1.2rem] p-3 "> { message } </div>
            }
          <div className="flex w-full justify-center items-center text-center py-2">
            { 
              !isAlert &&
              <Button onClick={ () => handleFuncAddCloseFunc(handleCancel) }>취소</Button> 
            }
            <Button className="w-1/2 rounded-lg" variant="contained" onClick={ () => handleFuncAddCloseFunc(handleCheck) }>확인</Button>
          </div>
        </div>
      </div>
    )
}
  
import ConfirmModal from "./ConfirmModal"
import { useConfirmModalStore } from "@/store"

export default function ModalContainer() {

    const confirmModalPropsList = useConfirmModalStore(state => state.confirmModalPropsList)
      
    return (
      <>
        { confirmModalPropsList.map((props, idx) => <ConfirmModal key={ idx } idx={ idx } { ...props } /> ) }
      </>
    )
  }
  
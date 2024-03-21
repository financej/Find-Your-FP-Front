import { create } from 'zustand'
import { getRandomId } from '@/utils'

export const useConfirmModalStore = create(set => ({
    confirmModalPropsList: [],
    openConfirmModal: ({ title = "알림", message="", isAlert = true }) => new Promise(resolve => set(state => ({
      confirmModalPropsList: [
        ...state.confirmModalPropsList, {
          id: getRandomId('ConfirmModal'),
          title,
          message,
          isAlert,
          handleCancel: () => resolve(false),
          handleCheck: () => resolve(true),
        }
      ]
    }))),
    closeConfirmModal: (id) => set(state => {
      state.confirmModalPropsList = state.confirmModalPropsList.filter(confirmModalProps => confirmModalProps.id != id)
      return state
    }),
  }))
  
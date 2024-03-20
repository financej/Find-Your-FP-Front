import { create } from 'zustand'

export const useConfirmModalStore = create(set => ({
    confirmModalPropsList: [],
    openConfirmModal: ({ title = "알림", message="", isAlert = true }) => new Promise(resolve => set(state => ({
      confirmModalPropsList: [
        ...state.confirmModalPropsList, {
          title,
          message,
          isAlert,
          handleCancel: () => resolve(false),
          handleCheck: () => resolve(true),
        }
      ]
    }))),
    closeConfirmModal: (index) => set(state => {
      state.confirmModalPropsList = state.confirmModalPropsList.filter((_, idx) => idx !== index)
      return state
    }),
  }))
  
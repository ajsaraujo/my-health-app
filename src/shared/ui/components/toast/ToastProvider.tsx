/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { ToastProps, ToastType } from './Toast'
import { ToastActions } from './ToastActions'

const DEFAULT_TOAST_VALUE: ToastProps = {
  visible: false,
  message: '',
  type: 'success',
}

const ToastDataContext = createContext(DEFAULT_TOAST_VALUE)
const ToastActionsContext = createContext<ToastActions>({
  success: () => {},
  error: () => {},
  hide: () => {},
})

export function ToastProvider({ children }: PropsWithChildren) {
  const [toast, setToast] = useState<ToastProps>(DEFAULT_TOAST_VALUE)

  function success(message: string, durationInMs?: number) {
    showToast(message, 'success', durationInMs)
  }

  function error(message: string, durationInMs?: number) {
    showToast(message, 'error', durationInMs)
  }

  function showToast(message: string, type: ToastType, durationInsMs = 2000) {
    setToast({ visible: true, message, type })

    setTimeout(hide, durationInsMs)
  }

  function hide() {
    setToast({ ...toast, visible: false })
  }

  const toastActions = { success, error, hide }

  return (
    <ToastDataContext.Provider value={toast}>
      <ToastActionsContext.Provider value={toastActions}>
        {children}
      </ToastActionsContext.Provider>
    </ToastDataContext.Provider>
  )
}

export function useToastData() {
  return useContext(ToastDataContext)
}

export function useToastActions() {
  return useContext(ToastActionsContext)
}

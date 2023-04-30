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

  function success(message: string) {
    showToast(message, 'success')
  }

  function error(message: string) {
    showToast(message, 'error')
  }

  function showToast(message: string, type: ToastType) {
    setToast({ visible: true, message, type })

    const TOAST_DURATION_IN_MS = 2000

    setTimeout(hide, TOAST_DURATION_IN_MS)
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

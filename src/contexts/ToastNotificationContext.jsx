import { useContext, useRef } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const ToastNotificationContext = createContext(null)

const ToastNotificationProvider = ({ children }) => {
  const time = useRef(null)
  const [toast, setToast] = useState({
    id: 1,
    title: 'Hello World',
    type: 'info',
    source: 'Getting Started',
    isActive: false,
    actions: [
      {
        name: 'Action 1',
        onClick: () => {}
      }
    ]
  })

  const clearToastNotification = () => {
    setToast((prevState) => {
      return { ...prevState, isActive: false }
    })
  }

  const setToastNotification = ({ title = 'Hello World', type = 'info', source = 'Getting Started', actions = [] }) => {
    clearToastNotification()
    setToast({ id: Math.round(Math.random() * 100), title, type, source, isActive: true, actions })
    clearTimeout(time.current)
    time.current = setTimeout(() => {
      clearToastNotification()
    }, 20000)
  }

  return (
    <ToastNotificationContext.Provider value={{ toast, setToastNotification, clearToastNotification }}>
      {children}
    </ToastNotificationContext.Provider>
  )
}

export default ToastNotificationProvider

// eslint-disable-next-line react-refresh/only-export-components
export function useToastNotification() {
  const { setToastNotification } = useContext(ToastNotificationContext)
  return setToastNotification
}
// eslint-disable-next-line react-refresh/only-export-components
export function useToastNotificationData() {
  const { toast, clearToastNotification } = useContext(ToastNotificationContext)
  return { toast, clearToastNotification }
}
